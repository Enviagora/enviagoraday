import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import LogoCarousel from "./LogoCarousel";

import diegoSantana from "@/assets/speakers/diego-santana.webp";
import rogerioAndrade from "@/assets/speakers/rogerio-andrade.webp";
import zhangYe from "@/assets/speakers/zhang-ye.webp";
import rafaBorn from "@/assets/speakers/rafa-born.webp";
import robsonGalvao from "@/assets/speakers/robson-galvao.webp";

const speakers = [
  { id: 1, image: diegoSantana, alt: "Diego Santana - Especialista em E-commerce" },
  { id: 2, image: rogerioAndrade, alt: "Rogério Andrade - CEO da Avantto" },
  { id: 3, image: zhangYe, alt: "Zhang Ye - Founder da Always Fit" },
  { id: 4, image: rafaBorn, alt: "Rafael Born - Founder Enviagora & Fleurity" },
  { id: 5, image: robsonGalvao, alt: "Robson Galvão - CEO da Gummy" },
];

const SpeakersSection = () => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? speakers.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === speakers.length - 1 ? 0 : c + 1));

  const speaker = speakers[current];

  return (
    <section className="relative py-24 md:py-[15px]">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center mb-4">
          <p className="font-sans text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
            Palestrantes
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <div className="relative mx-auto max-w-sm">
            {/* Navigation buttons */}
            <button
              onClick={prev}
              className="absolute -left-4 md:-left-16 top-1/2 -translate-y-1/2 z-10 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-md transition-all hover:border-white/25 hover:bg-white/10"
              aria-label="Palestrante anterior"
            >
              <ChevronLeft className="h-5 w-5 text-foreground" />
            </button>
            <button
              onClick={next}
              className="absolute -right-4 md:-right-16 top-1/2 -translate-y-1/2 z-10 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-md transition-all hover:border-white/25 hover:bg-white/10"
              aria-label="Próximo palestrante"
            >
              <ChevronRight className="h-5 w-5 text-foreground" />
            </button>

            {/* Speaker card - just the image */}
            <AnimatePresence mode="wait">
              <motion.div
                key={speaker.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden rounded-2xl border border-white/10"
              >
                <img
                  src={speaker.image}
                  alt={speaker.alt}
                  className="w-full h-auto object-cover"
                />
              </motion.div>
            </AnimatePresence>

            {/* Dots indicator */}
            <div className="mt-6 flex items-center justify-center gap-2">
              {speakers.map((s, i) => (
                <button
                  key={s.id}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === current
                      ? "w-6 bg-foreground"
                      : "w-2 bg-muted-foreground/40 hover:bg-muted-foreground/70"
                  }`}
                  aria-label={`Ir para palestrante ${i + 1}`}
                />
              ))}
            </div>
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
