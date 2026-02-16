import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useCallback } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
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

const wrap = (index: number, length: number) => ((index % length) + length) % length;

const SpeakersSection = () => {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const x = useMotionValue(0);

  const goTo = useCallback((newIndex: number) => {
    if (isAnimating) return;
    const diff = newIndex - current;
    // Determine shortest direction
    const dir = diff > 0 ? -1 : 1;
    setIsAnimating(true);
    // Animate x offset to simulate slide, then snap
    animate(x, dir * 300, {
      type: "spring",
      stiffness: 300,
      damping: 30,
      onComplete: () => {
        setCurrent(wrap(newIndex, speakers.length));
        x.set(0);
        setIsAnimating(false);
      },
    });
  }, [current, isAnimating, x]);

  const prev = () => goTo(current - 1);
  const next = () => goTo(current + 1);

  const getIndex = (offset: number) => wrap(current + offset, speakers.length);

  const visibleOffsets = [-2, -1, 0, 1, 2];

  return (
    <section className="relative py-24 md:py-[15px]">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center mb-4">
          <p className="font-sans text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
            Palestrantes
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <div className="relative mx-auto max-w-3xl overflow-hidden">
            {/* Navigation buttons */}
            <button
              onClick={prev}
              className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-md transition-all hover:border-white/25 hover:bg-white/10"
              aria-label="Palestrante anterior"
            >
              <ChevronLeft className="h-5 w-5 text-foreground" />
            </button>
            <button
              onClick={next}
              className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-md transition-all hover:border-white/25 hover:bg-white/10"
              aria-label="Próximo palestrante"
            >
              <ChevronRight className="h-5 w-5 text-foreground" />
            </button>

            {/* Carousel track */}
            <motion.div
              className="flex items-center justify-center"
              style={{ x }}
            >
              <div className="flex items-center gap-3 md:gap-5">
                {visibleOffsets.map((offset) => {
                  const idx = getIndex(offset);
                  const speaker = speakers[idx];
                  const isCurrent = offset === 0;
                  const isAdjacent = Math.abs(offset) === 1;
                  const isFar = Math.abs(offset) === 2;

                  return (
                    <motion.div
                      key={`${offset}-${idx}`}
                      className={`flex-shrink-0 overflow-hidden rounded-2xl border transition-all duration-500 cursor-pointer ${
                        isCurrent
                          ? "border-white/10 z-10"
                          : "border-white/5"
                      } ${isFar ? "hidden md:block" : ""}`}
                      style={{
                        width: isCurrent ? "280px" : isAdjacent ? "160px" : "100px",
                        opacity: isCurrent ? 1 : isAdjacent ? 0.45 : 0.2,
                        scale: isCurrent ? 1 : isAdjacent ? 0.9 : 0.8,
                        filter: isCurrent ? "none" : "brightness(0.7)",
                      }}
                      onClick={() => {
                        if (offset !== 0) goTo(current + offset);
                      }}
                      whileHover={!isCurrent ? { opacity: 0.6, scale: 0.93 } : {}}
                    >
                      <img
                        src={speaker.image}
                        alt={speaker.alt}
                        className="w-full h-auto object-cover"
                        draggable={false}
                      />
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* Dots indicator */}
          <div className="mt-6 flex items-center justify-center gap-2">
            {speakers.map((s, i) => (
              <button
                key={s.id}
                onClick={() => goTo(i)}
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
