import { useState, useRef } from "react";
import { Upload, FileText, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

const ACCEPTED_TYPES = [
  "application/vnd.openxmlformats-officedocument.presentationml.presentation",
  "application/pdf",
  "application/vnd.apple.keynote",
  "application/x-iwork-keynote-sffkey",
];

const ACCEPTED_EXTENSIONS = ".pptx,.pdf,.key";
const MAX_SIZE_MB = 100;

type UploadStatus = "idle" | "uploading" | "success" | "error";

const PresentationUpload = () => {
  const [speakerName, setSpeakerName] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<UploadStatus>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0];
    if (!selected) return;

    const ext = selected.name.split(".").pop()?.toLowerCase();
    if (!["pptx", "pdf", "key"].includes(ext || "")) {
      setErrorMsg("Formato invalido. Aceitos: .pptx, .pdf, .key");
      setFile(null);
      return;
    }

    if (selected.size > MAX_SIZE_MB * 1024 * 1024) {
      setErrorMsg(`Arquivo muito grande. Maximo: ${MAX_SIZE_MB}MB`);
      setFile(null);
      return;
    }

    setErrorMsg("");
    setFile(selected);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!speakerName.trim() || !file) return;

    setStatus("uploading");
    setErrorMsg("");

    try {
      const apiUrl = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/upload-presentation`;

      const formData = new FormData();
      formData.append("speakerName", speakerName.trim());
      formData.append("file", file);

      const res = await fetch(apiUrl, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
        },
        body: formData,
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Erro ao enviar arquivo");
      }

      setStatus("success");
      setSpeakerName("");
      setFile(null);
      if (inputRef.current) inputRef.current.value = "";
    } catch (err: unknown) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Erro inesperado ao enviar");
    }
  };

  const isReady = speakerName.trim().length > 0 && file !== null && status !== "uploading";

  return (
    <section>
      <div className="flex items-center gap-3 mb-8">
        <Upload className="h-5 w-5 text-accent" />
        <h2 className="text-gradient-silver font-heading text-2xl md:text-3xl font-bold">
          Envie sua apresentacao
        </h2>
      </div>

      <div className="glass-card p-8 md:p-10">
        {status === "success" ? (
          <div className="flex flex-col items-center gap-4 py-8 text-center">
            <CheckCircle className="h-12 w-12 text-emerald-400" />
            <p className="text-foreground font-semibold text-lg">
              Apresentacao enviada com sucesso!
            </p>
            <p className="text-muted-foreground text-sm">
              Obrigado! Sua apresentacao foi recebida pela equipe.
            </p>
            <button
              onClick={() => setStatus("idle")}
              className="btn-outline-silver text-sm mt-4"
            >
              Enviar outra
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="speaker-name"
                className="block text-sm font-medium text-foreground mb-2"
              >
                Nome do palestrante
              </label>
              <input
                id="speaker-name"
                type="text"
                value={speakerName}
                onChange={(e) => setSpeakerName(e.target.value)}
                placeholder="Seu nome completo"
                required
                className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none transition-all duration-200 focus:border-accent/50 focus:ring-1 focus:ring-accent/30"
              />
            </div>

            <div>
              <label
                htmlFor="file-upload"
                className="block text-sm font-medium text-foreground mb-2"
              >
                Arquivo da apresentacao
              </label>
              <div
                onClick={() => inputRef.current?.click()}
                className="group cursor-pointer rounded-lg border-2 border-dashed border-white/10 bg-white/[0.02] px-6 py-8 text-center transition-all duration-200 hover:border-accent/30 hover:bg-white/[0.04]"
              >
                <FileText className="mx-auto h-8 w-8 text-muted-foreground/50 group-hover:text-accent/70 transition-colors mb-3" />
                {file ? (
                  <p className="text-sm text-foreground font-medium">{file.name}</p>
                ) : (
                  <>
                    <p className="text-sm text-muted-foreground">
                      Clique para selecionar o arquivo
                    </p>
                    <p className="text-xs text-muted-foreground/50 mt-1">
                      .pptx, .pdf ou .key (max {MAX_SIZE_MB}MB)
                    </p>
                  </>
                )}
                <input
                  ref={inputRef}
                  id="file-upload"
                  type="file"
                  accept={ACCEPTED_EXTENSIONS}
                  onChange={handleFileChange}
                  className="hidden"
                />
              </div>
            </div>

            {errorMsg && (
              <div className="flex items-center gap-2 text-red-400 text-sm">
                <AlertCircle className="h-4 w-4 flex-shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={!isReady}
              className="btn-silver w-full text-sm disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:transform-none disabled:hover:shadow-none flex items-center justify-center gap-2"
            >
              {status === "uploading" ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Enviando...
                </>
              ) : (
                <>
                  <Upload className="h-4 w-4" />
                  Enviar apresentacao
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default PresentationUpload;
