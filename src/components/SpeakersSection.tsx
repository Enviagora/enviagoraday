import AnimatedSection from "./AnimatedSection";
import LogoCarousel from "./LogoCarousel";

import diegoSantana from "@/assets/speakers/diego-santana-2.webp";
import rogerioAndrade from "@/assets/speakers/rogerio-andrade-2.webp";
import zhangYe from "@/assets/speakers/zhang-ye-2.webp";
import rafaBorn from "@/assets/speakers/rafa-born-2.webp";
import robsonGalvao from "@/assets/speakers/robson-galvao-2.webp";
import jackAlecrim from "@/assets/speakers/jack-alecrim.webp";
import luigiConstantino from "@/assets/speakers/luigi-constantino.webp";
import moritzNeto from "@/assets/speakers/moritz-neto.webp";

const speakers = [
  { id: 1, image: diegoSantana, alt: "Diego Santana - Especialista em E-commerce" },
  { id: 2, image: rogerioAndrade, alt: "Rogério Andrade - CEO da Avantto" },
  { id: 3, image: zhangYe, alt: "Zhang Ye - Founder da Always Fit" },
  { id: 4, image: rafaBorn, alt: "Rafael Born - Founder Enviagora & Fleurity" },
  { id: 5, image: robsonGalvao, alt: "Robson Galvão - CEO da Gummy" },
  { id: 6, image: jackAlecrim, alt: "Jack Alecrim - Cientista em Inovação Capilar" },
  { id: 7, image: luigiConstantino, alt: "Luigi Constantino - Co-Founder do MVM" },
  { id: 8, image: moritzNeto, alt: "Moritz Neto - CEO do Grupo Unfair Advantage" },
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
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 max-w-6xl mx-auto">
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
