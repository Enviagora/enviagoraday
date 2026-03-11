import { useState } from "react";
import { Download, Lock, X, FileText, Loader2, AlertCircle } from "lucide-react";

interface Presentation {
  id: string;
  speaker_name: string;
  file_name: string;
  storage_path: string;
  file_size: number;
  mime_type: string;
  created_at: string;
  download_url: string | null;
}

type ModalState = "closed" | "password" | "list";

function formatBytes(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

const AdminDownload = () => {
  const [modalState, setModalState] = useState<ModalState>("closed");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [presentations, setPresentations] = useState<Presentation[]>([]);

  const handleOpen = () => {
    setPassword("");
    setError("");
    setModalState("password");
  };

  const handleClose = () => {
    setModalState("closed");
    setPassword("");
    setError("");
    setPresentations([]);
  };

  const handlePasswordSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const apiUrl = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/list-presentations`;
      const res = await fetch(apiUrl, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Erro ao carregar apresentacoes");
      }

      setPresentations(data.presentations || []);
      setModalState("list");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erro inesperado");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={handleOpen}
        className="text-white/10 hover:text-white/30 transition-colors duration-300 text-xs flex items-center gap-1"
        aria-label="Admin"
      >
        <Lock className="h-3 w-3" />
        <span>admin</span>
      </button>

      {modalState !== "closed" && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
          onClick={(e) => e.target === e.currentTarget && handleClose()}
        >
          <div className="glass-card w-full max-w-lg max-h-[90vh] flex flex-col rounded-2xl overflow-hidden">
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
              <div className="flex items-center gap-2">
                <Download className="h-4 w-4 text-accent" />
                <span className="text-sm font-semibold text-foreground">
                  {modalState === "password" ? "Acesso restrito" : "Apresentacoes recebidas"}
                </span>
              </div>
              <button
                onClick={handleClose}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {modalState === "password" && (
              <form onSubmit={handlePasswordSubmit} className="p-6 space-y-4">
                <p className="text-sm text-muted-foreground">
                  Digite a senha para acessar as apresentacoes enviadas.
                </p>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Senha"
                  autoFocus
                  required
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none transition-all duration-200 focus:border-accent/50 focus:ring-1 focus:ring-accent/30"
                />
                {error && (
                  <div className="flex items-center gap-2 text-red-400 text-sm">
                    <AlertCircle className="h-4 w-4 flex-shrink-0" />
                    <span>{error}</span>
                  </div>
                )}
                <button
                  type="submit"
                  disabled={loading || !password}
                  className="btn-silver w-full text-sm disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Verificando...
                    </>
                  ) : (
                    "Entrar"
                  )}
                </button>
              </form>
            )}

            {modalState === "list" && (
              <div className="flex-1 overflow-y-auto p-6 space-y-3">
                {presentations.length === 0 ? (
                  <p className="text-sm text-muted-foreground text-center py-8">
                    Nenhuma apresentacao enviada ainda.
                  </p>
                ) : (
                  presentations.map((p) => (
                    <div
                      key={p.id}
                      className="flex items-start justify-between gap-4 rounded-lg border border-white/10 bg-white/[0.03] p-4 hover:bg-white/[0.06] transition-colors"
                    >
                      <div className="flex items-start gap-3 min-w-0">
                        <FileText className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                        <div className="min-w-0">
                          <p className="text-sm font-medium text-foreground truncate">
                            {p.speaker_name}
                          </p>
                          <p className="text-xs text-muted-foreground truncate mt-0.5">
                            {p.file_name}
                          </p>
                          <p className="text-xs text-muted-foreground/60 mt-1">
                            {formatBytes(p.file_size)} &middot; {formatDate(p.created_at)}
                          </p>
                        </div>
                      </div>
                      {p.download_url ? (
                        <a
                          href={p.download_url}
                          download={p.file_name}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-outline-silver text-xs flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5"
                        >
                          <Download className="h-3 w-3" />
                          Baixar
                        </a>
                      ) : (
                        <span className="text-xs text-red-400/70 flex-shrink-0">
                          Indisponivel
                        </span>
                      )}
                    </div>
                  ))
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default AdminDownload;
