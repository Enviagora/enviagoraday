import AnimatedSection from "./AnimatedSection";
import heroImage from "@/assets/hero-aviation.jpg";

const AboutSection = () => (
  <section className="relative py-24 md:py-32">
    <div className="container mx-auto px-6">
      <div className="glow-line mb-16" />
      <div className="grid gap-12 md:grid-cols-2 md:gap-16 items-center">
        <AnimatedSection>
          <p className="mb-3 font-sans text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
            Sobre o Evento
          </p>
          <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
            Mais do que um evento.{" "}
            <span className="text-gradient-silver">Uma experiência.</span>
          </h2>
          <p className="mt-6 leading-relaxed text-muted-foreground">
            O Enviagora Day é um mastermind exclusivo que reúne os principais líderes de e-commerce e logística do Brasil.
            Um encontro a portas fechadas, dentro de um hangar de aviação executiva, projetado para conexões reais
            e estratégias de alto impacto.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Networking de alto nível, painéis estratégicos e uma experiência imersiva que redefine o padrão de eventos
            do setor. Cada detalhe foi pensado para inspirar e conectar mentes que movem o mercado.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="glass-card overflow-hidden">
            <img
              src={heroImage}
              alt="Interior do hangar de aviação executiva com jato privado"
              className="h-full w-full object-cover aspect-[16/10]"
              loading="lazy"
            />
          </div>
        </AnimatedSection>
      </div>
    </div>
  </section>
);

export default AboutSection;
