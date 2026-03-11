import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "npm:@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
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

    const body = await req.json();
    const { password } = body;

    if (password !== "enviagora123") {
      return errorResponse("Senha incorreta", 401);
    }

    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const serviceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, serviceRoleKey);

    const { data: presentations, error: dbError } = await supabase
      .from("presentations")
      .select("id, speaker_name, file_name, storage_path, file_size, mime_type, created_at")
      .order("created_at", { ascending: false });

    if (dbError) {
      throw new Error(`Database error: ${dbError.message}`);
    }

    const result = await Promise.all(
      (presentations || []).map(async (p) => {
        const { data: signedData, error: signError } = await supabase.storage
          .from("presentations")
          .createSignedUrl(p.storage_path, 3600);

        return {
          ...p,
          download_url: signError ? null : signedData?.signedUrl,
        };
      })
    );

    return new Response(JSON.stringify({ presentations: result }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("List error:", err);
    return errorResponse(
      err instanceof Error ? err.message : "Erro interno do servidor",
      500
    );
  }
});
