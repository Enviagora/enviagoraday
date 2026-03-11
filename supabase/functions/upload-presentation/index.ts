import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers":
    "Content-Type, Authorization, X-Client-Info, Apikey",
};

function errorResponse(message: string, status = 400) {
  return new Response(JSON.stringify({ error: message }), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });
}

async function getAccessToken(credentials: {
  client_email: string;
  private_key: string;
}): Promise<string> {
  const now = Math.floor(Date.now() / 1000);
  const header = { alg: "RS256", typ: "JWT" };
  const payload = {
    iss: credentials.client_email,
    scope: "https://www.googleapis.com/auth/drive.file",
    aud: "https://oauth2.googleapis.com/token",
    iat: now,
    exp: now + 3600,
  };

  const enc = (obj: unknown) =>
    btoa(JSON.stringify(obj))
      .replace(/\+/g, "-")
      .replace(/\//g, "_")
      .replace(/=+$/, "");

  const unsignedToken = `${enc(header)}.${enc(payload)}`;

  const pemContents = credentials.private_key
    .replace(/-----BEGIN PRIVATE KEY-----/, "")
    .replace(/-----END PRIVATE KEY-----/, "")
    .replace(/\s/g, "");

  const binaryKey = Uint8Array.from(atob(pemContents), (c) => c.charCodeAt(0));

  const cryptoKey = await crypto.subtle.importKey(
    "pkcs8",
    binaryKey,
    { name: "RSASSA-PKCS1-v1_5", hash: "SHA-256" },
    false,
    ["sign"]
  );

  const signature = await crypto.subtle.sign(
    "RSASSA-PKCS1-v1_5",
    cryptoKey,
    new TextEncoder().encode(unsignedToken)
  );

  const sig = btoa(String.fromCharCode(...new Uint8Array(signature)))
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");

  const jwt = `${unsignedToken}.${sig}`;

  const tokenRes = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion: jwt,
    }),
  });

  if (!tokenRes.ok) {
    const err = await tokenRes.text();
    throw new Error(`Token exchange failed: ${err}`);
  }

  const { access_token } = await tokenRes.json();
  return access_token;
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 200, headers: corsHeaders });
  }

  try {
    if (req.method !== "POST") {
      return errorResponse("Method not allowed", 405);
    }

    const credentialsRaw = Deno.env.get("GOOGLE_SERVICE_ACCOUNT_KEY");
    const folderId = Deno.env.get("GOOGLE_DRIVE_FOLDER_ID");

    if (!credentialsRaw || !folderId) {
      return errorResponse(
        "Google Drive integration not configured",
        500
      );
    }

    const credentials = JSON.parse(credentialsRaw);

    const formData = await req.formData();
    const speakerName = formData.get("speakerName") as string | null;
    const file = formData.get("file") as File | null;

    if (!speakerName?.trim()) {
      return errorResponse("Nome do palestrante e obrigatorio");
    }

    if (!file) {
      return errorResponse("Arquivo e obrigatorio");
    }

    const ext = file.name.split(".").pop()?.toLowerCase();
    if (!["pptx", "pdf", "key"].includes(ext || "")) {
      return errorResponse("Formato invalido. Aceitos: .pptx, .pdf, .key");
    }

    const accessToken = await getAccessToken(credentials);

    const sanitizedName = speakerName.trim().replace(/[^a-zA-Z0-9\s\-_]/g, "");
    const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
    const fileName = `${sanitizedName}_${timestamp}.${ext}`;

    const metadata = {
      name: fileName,
      parents: [folderId],
    };

    const boundary = "enviagora_upload_boundary";
    const fileBytes = new Uint8Array(await file.arrayBuffer());

    const metaPart = [
      `--${boundary}`,
      "Content-Type: application/json; charset=UTF-8",
      "",
      JSON.stringify(metadata),
      "",
    ].join("\r\n");

    const filePart = [
      `--${boundary}`,
      `Content-Type: ${file.type || "application/octet-stream"}`,
      "",
      "",
    ].join("\r\n");

    const closing = `\r\n--${boundary}--`;

    const metaBytes = new TextEncoder().encode(metaPart);
    const filePartBytes = new TextEncoder().encode(filePart);
    const closingBytes = new TextEncoder().encode(closing);

    const body = new Uint8Array(
      metaBytes.length + filePartBytes.length + fileBytes.length + closingBytes.length
    );
    body.set(metaBytes, 0);
    body.set(filePartBytes, metaBytes.length);
    body.set(fileBytes, metaBytes.length + filePartBytes.length);
    body.set(closingBytes, metaBytes.length + filePartBytes.length + fileBytes.length);

    const uploadRes = await fetch(
      "https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": `multipart/related; boundary=${boundary}`,
        },
        body,
      }
    );

    if (!uploadRes.ok) {
      const errText = await uploadRes.text();
      throw new Error(`Google Drive upload failed: ${errText}`);
    }

    const result = await uploadRes.json();

    return new Response(
      JSON.stringify({ success: true, fileId: result.id, fileName }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  } catch (err) {
    console.error("Upload error:", err);
    return errorResponse(
      err instanceof Error ? err.message : "Erro interno do servidor",
      500
    );
  }
});
