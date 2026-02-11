import { useState } from "react";
import { Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import AnimatedSection from "./AnimatedSection";

const formatPhone = (value: string) => {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  if (digits.length <= 2) return digits;
  if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
};

const ApplicationForm = () => {
  const [form, setForm] = useState({ nome: "", email: "", whatsapp: "", empresa: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (field: string, value: string) => {
    if (field === "whatsapp") value = formatPhone(value);
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.nome || !form.email || !form.whatsapp || !form.empresa) {
      toast.error("Preencha todos os campos.");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Solicitação enviada! Entraremos em contato em breve.");
      setForm({ nome: "", email: "", whatsapp: "", empresa: "" });
    }, 1500);
  };

  return (
    <section id="formulario" className="relative py-24 md:py-32">
      <div className="container mx-auto px-6">
        <AnimatedSection className="mx-auto max-w-xl text-center">
          <p className="mb-3 font-sans text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
            Aplicação
          </p>
          <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
            Garanta seu lugar no{" "}
            <span className="text-gradient-silver">Hangar</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Preencha o formulário para solicitar seu convite exclusivo.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2} className="mx-auto mt-12 max-w-lg">
          <form onSubmit={handleSubmit} className="glass-card-strong p-8 md:p-10 space-y-6">
            <div className="space-y-2">
              <Label htmlFor="nome" className="text-sm text-silver">Nome Completo</Label>
              <Input
                id="nome"
                placeholder="Seu nome"
                value={form.nome}
                onChange={(e) => handleChange("nome", e.target.value)}
                className="border-white/10 bg-white/5 text-foreground placeholder:text-muted-foreground/50 focus:border-silver/40 focus:ring-silver/20"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm text-silver">E-mail Corporativo</Label>
              <Input
                id="email"
                type="email"
                placeholder="seu@empresa.com.br"
                value={form.email}
                onChange={(e) => handleChange("email", e.target.value)}
                className="border-white/10 bg-white/5 text-foreground placeholder:text-muted-foreground/50 focus:border-silver/40 focus:ring-silver/20"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="whatsapp" className="text-sm text-silver">WhatsApp</Label>
              <Input
                id="whatsapp"
                placeholder="(11) 99999-9999"
                value={form.whatsapp}
                onChange={(e) => handleChange("whatsapp", e.target.value)}
                className="border-white/10 bg-white/5 text-foreground placeholder:text-muted-foreground/50 focus:border-silver/40 focus:ring-silver/20"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="empresa" className="text-sm text-silver">Nome da Empresa</Label>
              <Input
                id="empresa"
                placeholder="Empresa S/A"
                value={form.empresa}
                onChange={(e) => handleChange("empresa", e.target.value)}
                className="border-white/10 bg-white/5 text-foreground placeholder:text-muted-foreground/50 focus:border-silver/40 focus:ring-silver/20"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="btn-silver w-full text-base font-bold tracking-wide disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {loading ? "Enviando..." : (
                <>
                  <Send className="h-4 w-4" />
                  Enviar Solicitação
                </>
              )}
            </button>
          </form>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ApplicationForm;
