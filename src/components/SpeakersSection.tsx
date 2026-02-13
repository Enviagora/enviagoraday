import { HelpCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import LogoCarousel from "./LogoCarousel";
import speaker1 from "@/assets/speakers/speaker-1.png";
import speaker2 from "@/assets/speakers/speaker-2.png";
import speaker3 from "@/assets/speakers/speaker-3.png";
import speaker4 from "@/assets/speakers/speaker-4.jpg";
import speaker5 from "@/assets/speakers/speaker-5.png";

const speakers = [
  { id: 1, name: "Diogo Santana", label: "E-commerce", handle: "@dihsantanabr", image: speaker1 },
  { id: 2, name: "Rogério Andrade", label: "CEO da Avantto", handle: "@rogerioandradesa", image: speaker2 },
  { id: 3, name: "Zhang Ye", label: "TikTok Shop", handle: "@zhangye.fit", image: speaker3 },
  { id: 4, name: "Rafael Born", label: "CEO da Enviagora", handle: "@rafaelborn", image: speaker4 },
  { id: 5, name: "Robson Galvão", label: "Marca Própria", handle: "@robsongalvao", image: speaker5 },
  { id: 6, name: "Em breve", label: "Novos palestrantes", handle: "@enviagoraday", image: null },
];

const SpeakersSection = () => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? speakers.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === speakers.length - 1 ? 0 : c + 1));

  const speaker = speakers[current];
  const isMystery = speaker.image === null;

  return (
    <section className="relative py-28 md:py-40 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSection className="text-center mb-16">
          <p className="font-sans text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground mb-3">
            Palestrantes
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground tracking-tight">
            Quem vai estar no palco
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <div className="relative mx-auto max-w-2xl">
            {/* Navigation buttons */}
            <button
              onClick={prev}
              className="absolute -left-4 md:-left-20 top-1/2 -translate-y-1/2 z-20 flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-300 hover:border-primary/30 hover:bg-white/10 hover:shadow-[0_0_30px_rgba(199,210,224,0.15)] hover:scale-110"
              aria-label="Palestrante anterior"
            >
              <ChevronLeft className="h-6 w-6 text-foreground" />
            </button>
            <button
              onClick={next}
              className="absolute -right-4 md:-right-20 top-1/2 -translate-y-1/2 z-20 flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-300 hover:border-primary/30 hover:bg-white/10 hover:shadow-[0_0_30px_rgba(199,210,224,0.15)] hover:scale-110"
              aria-label="Próximo palestrante"
            >
              <ChevronRight className="h-6 w-6 text-foreground" />
            </button>

            {/* Speaker card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={speaker.id}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -20 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                {isMystery ? (
                  <a
                    href="https://www.instagram.com/enviagoraday/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative block aspect-[3/4] w-full max-h-[500px] overflow-hidden rounded-3xl bg-card transition-all duration-500"
                  >
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-white/[0.04] to-white/[0.01]">
                      <HelpCircle className="h-32 w-32 text-muted-foreground/30 group-hover:text-primary/40 transition-colors duration-500" />
                    </div>
                    {/* Bottom vignette overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
                      <p className="text-2xl md:text-3xl font-bold text-foreground tracking-tight">
                        Novos palestrantes
                      </p>
                      <p className="mt-2 text-base text-muted-foreground">
                        Siga <span className="text-primary font-medium">@enviagoraday</span> para descobrir
                      </p>
                    </div>
                  </a>
                ) : (
                  <div className="group relative aspect-[3/4] w-full max-h-[500px] overflow-hidden rounded-3xl bg-card">
                    {/* Full-bleed speaker photo */}
                    <img
                      src={speaker.image!}
                      alt={speaker.name}
                      className="absolute inset-0 h-full w-full object-cover object-top scale-105 group-hover:scale-110 transition-transform duration-700"
                    />
                    {/* Bottom vignette overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                    {/* Speaker info — bottom-left */}
                    <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
                      <h3 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight drop-shadow-lg">
                        {speaker.name}
                      </h3>
                      <p className="mt-2 inline-block rounded-md bg-white/10 backdrop-blur-md px-3 py-1 text-sm md:text-base font-semibold text-foreground">
                        {speaker.label}
                      </p>
                      <p className="mt-2 text-sm text-muted-foreground/80">{speaker.handle}</p>
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>

            {/* Dots indicator */}
            <div className="mt-10 flex items-center justify-center gap-2.5">
              {speakers.map((s, i) => (
                <button
                  key={s.id}
                  onClick={() => setCurrent(i)}
                  className={`h-2.5 rounded-full transition-all duration-400 ${
                    i === current
                      ? "w-8 bg-foreground shadow-[0_0_10px_rgba(255,255,255,0.3)]"
                      : "w-2.5 bg-muted-foreground/30 hover:bg-muted-foreground/60"
                  }`}
                  aria-label={`Ir para palestrante ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.4} className="mt-20">
          <LogoCarousel />
        </AnimatedSection>
      </div>
    </section>
  );
};

export default SpeakersSection;
