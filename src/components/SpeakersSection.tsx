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
  { id: 1, image: diegoSantana, alt: "Diego Santana - Especialista em E-commerce" },
  { id: 2, image: rogerioAndrade, alt: "Rogério Andrade - CEO da Avantto" },
  { id: 3, image: zhangYe, alt: "Zhang Ye - Founder da Always Fit" },
  { id: 4, image: rafaBorn, alt: "Rafael Born - Founder Enviagora & Fleurity" },
  { id: 5, image: robsonGalvao, alt: "Robson Galvão - CEO da Gummy" },
  { id: 6, image: jackAlecrim, alt: "Jack Alecrim - Cientista em Inovação Capilar" },
  { id: 7, image: luigiConstantino, alt: "Luigi Constantino - Co-Founder do MVM" },
  { id: 8, image: moritzNeto, alt: "Moritz Neto - CEO do Grupo Unfair Advantage" },
  { id: 9, image: fernandoScherer, alt: "Fernando Scherer - Medalhista Olímpico & Empresário" },
];

const SpeakersSection = () => {
  return (
    <section className="relative py-4 md:py-[15px]">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection className="text-center mb-6">
          <p className="font-sans text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
            Palestrantes
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <div className="flex flex-wrap justify-center gap-3 md:gap-5 max-w-6xl mx-auto [&>div]:w-[calc(50%-6px)] md:[&>div]:w-[calc(33.333%-14px)]">
            {speakers.map((speaker) => (
              <div
                key={speaker.id}
                className="rounded-xl overflow-hidden border border-white/10"
              >
                <img
                  src={speaker.image}
                  alt={speaker.alt}
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.4}>
          <LogoCarousel />
        </AnimatedSection>
      </div>
    </section>
  );
};

export default SpeakersSection;
