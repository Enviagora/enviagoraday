import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "npm:@supabase/supabase-js@2";

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

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 200, headers: corsHeaders });
  }

  try {
    if (req.method !== "POST") {
      return errorResponse("Method not allowed", 405);
    }

    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const serviceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;

    const supabase = createClient(supabaseUrl, serviceRoleKey);

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

    const sanitizedName = speakerName
      .trim()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-zA-Z0-9\s\-_]/g, "")
      .replace(/\s+/g, "_");

    const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
    const storagePath = `${sanitizedName}_${timestamp}.${ext}`;

    const fileBytes = await file.arrayBuffer();

    const { error: storageError } = await supabase.storage
      .from("presentations")
      .upload(storagePath, fileBytes, {
        contentType: file.type || "application/octet-stream",
        upsert: false,
      });

    if (storageError) {
      throw new Error(`Storage upload failed: ${storageError.message}`);
    }

    const { error: dbError } = await supabase.from("presentations").insert({
      speaker_name: speakerName.trim(),
      file_name: file.name,
      storage_path: storagePath,
      file_size: file.size,
      mime_type: file.type || "application/octet-stream",
    });

    if (dbError) {
      await supabase.storage.from("presentations").remove([storagePath]);
      throw new Error(`Database insert failed: ${dbError.message}`);
    }

    return new Response(
      JSON.stringify({ success: true, fileName: file.name }),
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
