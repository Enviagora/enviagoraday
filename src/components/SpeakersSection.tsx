import AnimatedSection from "./AnimatedSection";
import LogoCarousel from "./LogoCarousel";

import diegoSantana from "@/assets/speakers/diego-santana-new.png";
import rogerioAndrade from "@/assets/speakers/rogerio-andrade-new.png";
import zhangYe from "@/assets/speakers/zhang-ye-new.png";
import rafaBorn from "@/assets/speakers/rafa-born-new.png";
import robsonGalvao from "@/assets/speakers/robson-galvao-new.png";
import jackAlecrim from "@/assets/speakers/jack-alecrim-new.png";
import luigiConstantino from "@/assets/speakers/luigi-constantino-new.png";
import moritzNeto from "@/assets/speakers/moritz-neto-new.png";
import fernandoScherer from "@/assets/speakers/fernando-scherer.png";

const speakers = [
  { id: 1, image: diegoSantana, name: "Diego Santana", role: "Especialista em E-commerce" },
  { id: 2, image: rogerioAndrade, name: "Rogério Andrade", role: "CEO da Avantto" },
  { id: 3, image: zhangYe, name: "Zhang Ye", role: "Founder da Always Fit" },
  { id: 4, image: rafaBorn, name: "Rafael Born", role: "Founder Enviagora & Fleurity" },
  { id: 5, image: robsonGalvao, name: "Robson Galvão", role: "CEO da Gummy" },
  { id: 6, image: jackAlecrim, name: "Jack Alecrim", role: "Cientista em Inovação Capilar" },
  { id: 7, image: luigiConstantino, name: "Luigi Constantino", role: "Co-Founder do MVM" },
  { id: 8, image: moritzNeto, name: "Moritz Neto", role: "CEO do Grupo Unfair Advantage" },
  { id: 9, image: fernandoScherer, name: "Fernando Scherer", role: "Medalhista Olímpico & Empresário" },
];

const SpeakersSection = () => {
  return (
    <section className="relative py-16 md:py-24">
      {/* Subtle ambient glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute left-1/2 top-0 -translate-x-1/2 h-[500px] w-[800px] rounded-full opacity-[0.07]"
          style={{ background: "radial-gradient(circle, hsl(var(--silver-bright)) 0%, transparent 70%)" }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        {/* Section header */}
        <AnimatedSection className="text-center mb-14">
          <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.4em] text-steel mb-4">
            Quem estará no palco
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground leading-tight">
            Líderes que <span className="text-gradient-silver">movem o mercado</span>
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-sm leading-relaxed text-muted-foreground">
            Fundadores, CEOs e estrategistas que construíram negócios de referência — reunidos em um único palco.
          </p>
        </AnimatedSection>

        {/* Speaker grid */}
        <AnimatedSection delay={0.15}>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 max-w-6xl mx-auto">
            {speakers.map((speaker, index) => (
              <div
                key={speaker.id}
                className="group relative w-[calc(50%-8px)] md:w-[calc(33.333%-16px)] rounded-2xl overflow-hidden border border-white/[0.06] transition-all duration-500 hover:border-white/[0.15]"
                style={{ animationDelay: `${index * 60}ms` }}
              >
                {/* Card inner glow on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: "linear-gradient(180deg, transparent 40%, hsl(var(--silver) / 0.08) 100%)" }}
                />

                <img
                  src={speaker.image}
                  alt={`${speaker.name} - ${speaker.role}`}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  loading="lazy"
                />

                {/* Name overlay at bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4 bg-gradient-to-t from-black/70 via-black/30 to-transparent">
                  <p className="font-display text-xs md:text-sm font-semibold text-white/90 leading-tight">
                    {speaker.name}
                  </p>
                  <p className="text-[10px] md:text-xs text-white/50 mt-0.5 font-light">
                    {speaker.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Decorative separator */}
        <div className="glow-line mt-16 mb-2" />

        <AnimatedSection delay={0.4}>
          <LogoCarousel />
        </AnimatedSection>
      </div>
    </section>
  );
};

export default SpeakersSection;
