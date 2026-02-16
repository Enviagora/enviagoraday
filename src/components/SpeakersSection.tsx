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

  const getPrevIndex = (c: number) => (c === 0 ? speakers.length - 1 : c - 1);
  const getNextIndex = (c: number) => (c === speakers.length - 1 ? 0 : c + 1);

  const prevSpeaker = speakers[getPrevIndex(current)];
  const currentSpeaker = speakers[current];
  const nextSpeaker = speakers[getNextIndex(current)];

  return (
    <section className="relative py-24 md:py-[15px]">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center mb-4">
          <p className="font-sans text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
            Palestrantes
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <div className="relative mx-auto flex items-center justify-center gap-3 md:gap-6 max-w-3xl">
            {/* Navigation buttons */}
            <button
              onClick={prev}
              className="absolute -left-2 md:-left-14 top-1/2 -translate-y-1/2 z-20 flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-md transition-all hover:border-white/25 hover:bg-white/10"
              aria-label="Palestrante anterior"
            >
              <ChevronLeft className="h-5 w-5 text-foreground" />
            </button>
            <button
              onClick={next}
              className="absolute -right-2 md:-right-14 top-1/2 -translate-y-1/2 z-20 flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-md transition-all hover:border-white/25 hover:bg-white/10"
              aria-label="Próximo palestrante"
            >
              <ChevronRight className="h-5 w-5 text-foreground" />
            </button>

            {/* Previous card (side) */}
            <div
              className="hidden md:block w-1/4 flex-shrink-0 cursor-pointer"
              onClick={prev}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={`prev-${prevSpeaker.id}`}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 0.4, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden rounded-2xl border border-white/5 scale-90"
                >
                  <img
                    src={prevSpeaker.image}
                    alt={prevSpeaker.alt}
                    className="w-full h-auto object-cover"
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Current card (center) */}
            <div className="w-3/4 md:w-1/2 flex-shrink-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSpeaker.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden rounded-2xl border border-white/10"
                >
                  <img
                    src={currentSpeaker.image}
                    alt={currentSpeaker.alt}
                    className="w-full h-auto object-cover"
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Next card (side) */}
            <div
              className="hidden md:block w-1/4 flex-shrink-0 cursor-pointer"
              onClick={next}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={`next-${nextSpeaker.id}`}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 0.4, x: 0 }}
                  exit={{ opacity: 0, x: 30 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden rounded-2xl border border-white/5 scale-90"
                >
                  <img
                    src={nextSpeaker.image}
                    alt={nextSpeaker.alt}
                    className="w-full h-auto object-cover"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

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
        </AnimatedSection>

        <AnimatedSection delay={0.4}>
          <LogoCarousel />
        </AnimatedSection>
      </div>
    </section>
  );
};

export default SpeakersSection;
