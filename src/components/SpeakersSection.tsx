import AnimatedSection from "./AnimatedSection";
import LogoCarousel from "./LogoCarousel";
import speaker1 from "@/assets/speakers/speaker-1.png";
import speaker2 from "@/assets/speakers/speaker-2.png";
import speaker3 from "@/assets/speakers/speaker-3.png";
import speaker4 from "@/assets/speakers/speaker-4.jpg";

const speakers = [
  { id: 1, label: "TikTok Shop", image: speaker1 },
  { id: 2, label: "Painel Logística", image: speaker2 },
  { id: 3, label: "Painel E-commerce", image: speaker3 },
  { id: 4, label: "Encerramento", image: speaker4 },
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
            <div className="glass-card flex flex-col items-center justify-center p-6 text-center transition-all duration-300 hover:border-white/20 hover:shadow-[0_0_30px_rgba(199,210,224,0.08)] group">
              <div className="mb-4 h-24 w-24 overflow-hidden rounded-full border border-white/10">
                <img src={s.image} alt={s.label} className="h-full w-full object-cover" />
              </div>
              <p className="text-sm font-medium text-muted-foreground">{s.label}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection delay={0.4}>
        <LogoCarousel />
      </AnimatedSection>
    </div>
  </section>
);

export default SpeakersSection;
