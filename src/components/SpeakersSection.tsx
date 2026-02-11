import { Lock, User } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const speakers = [
  { id: 1, label: "TikTok Shop" },
  { id: 2, label: "Painel Logística" },
  { id: 3, label: "Painel E-commerce" },
  { id: 4, label: "Encerramento" },
];

const SpeakersSection = () => (
  <section className="relative py-24 md:py-32">
    <div className="container mx-auto px-6">
      <AnimatedSection className="text-center">
        <p className="mb-3 font-sans text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
          Palestrantes
        </p>
        <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
          Line-up de <span className="text-gradient-silver">Peso</span>
        </h2>
        <p className="mx-auto mt-4 max-w-md text-muted-foreground">
          Nomes que movem o mercado. Revelação em breve.
        </p>
      </AnimatedSection>

      <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
        {speakers.map((s, i) => (
          <AnimatedSection key={s.id} delay={i * 0.1}>
            <div className="glass-card flex flex-col items-center justify-center p-8 text-center transition-all duration-300 hover:border-white/20 hover:shadow-[0_0_30px_rgba(199,210,224,0.08)] group">
              <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full border border-white/10 bg-white/5">
                <User className="h-10 w-10 text-muted-foreground/40" />
              </div>
              <Lock className="mb-2 h-4 w-4 text-muted-foreground/60 group-hover:text-silver transition-colors" />
              <p className="text-sm font-medium text-muted-foreground">{s.label}</p>
              <p className="mt-1 text-xs text-muted-foreground/50">Em breve</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default SpeakersSection;
