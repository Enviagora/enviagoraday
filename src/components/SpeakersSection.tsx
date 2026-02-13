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
{ id: 1, label: "E-commerce", handle: "@dihsantanabr", image: speaker1 },
{ id: 2, label: "CEO da Avantto", handle: "@rogerioandradesa", image: speaker2 },
{ id: 3, label: "TikTok Shop", handle: "@zhangye.fit", image: speaker3 },
{ id: 4, label: "CEO da Enviagora", handle: "@rafaelborn", image: speaker4 },
{ id: 5, label: "Marca Própria", handle: "@robsongalvao", image: speaker5 },
{ id: 6, label: "Em breve", handle: "@enviagoraday", image: null }];


const SpeakersSection = () => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => c === 0 ? speakers.length - 1 : c - 1);
  const next = () => setCurrent((c) => c === speakers.length - 1 ? 0 : c + 1);

  const speaker = speakers[current];
  const isMystery = speaker.image === null;

  return (
    <section className="relative py-24 md:py-[15px]">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center mb-4">
          <p className="font-sans text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
            Palestrantes
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <div className="relative mx-auto max-w-lg">
            {/* Navigation buttons */}
            <button
              onClick={prev}
              className="absolute -left-4 md:-left-16 top-1/2 -translate-y-1/2 z-10 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-md transition-all hover:border-white/25 hover:bg-white/10 hover:shadow-[0_0_20px_rgba(199,210,224,0.12)]"
              aria-label="Palestrante anterior">

              <ChevronLeft className="h-5 w-5 text-foreground" />
            </button>
            <button
              onClick={next}
              className="absolute -right-4 md:-right-16 top-1/2 -translate-y-1/2 z-10 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-md transition-all hover:border-white/25 hover:bg-white/10 hover:shadow-[0_0_20px_rgba(199,210,224,0.12)]"
              aria-label="Próximo palestrante">

              <ChevronRight className="h-5 w-5 text-foreground" />
            </button>

            {/* Speaker card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={speaker.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}>

                {isMystery ?
                <a
                  href="https://www.instagram.com/enviagoraday/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card-strong flex flex-col items-center justify-center px-8 py-16 text-center transition-all duration-300 hover:border-white/20 hover:shadow-[0_0_40px_rgba(199,210,224,0.1)]">

                    <div className="mb-6 flex h-40 w-40 md:h-52 md:w-52 items-center justify-center rounded-full border border-white/10">
                      <HelpCircle className="h-20 w-20 text-muted-foreground" />
                    </div>
                    <p className="text-lg font-semibold text-foreground">Novos palestrantes</p>
                    <p className="mt-1 text-sm text-muted-foreground">@enviagoraday</p>
                  </a> :

                <div className="glass-card-strong flex flex-col items-center justify-center px-8 py-16 text-center">
                    <div className="mb-6 h-40 w-40 md:h-52 md:w-52 overflow-hidden rounded-full border-2 border-white/15 shadow-[0_0_40px_rgba(199,210,224,0.08)]">
                      <img
                      src={speaker.image!}
                      alt={speaker.label}
                      className="h-full w-full object-cover object-center" />

                    </div>
                    <p className="text-lg font-semibold text-foreground">{speaker.label}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{speaker.handle}</p>
                  </div>
                }
              </motion.div>
            </AnimatePresence>

            {/* Dots indicator */}
            <div className="mt-8 flex items-center justify-center gap-2">
              {speakers.map((s, i) =>
              <button
                key={s.id}
                onClick={() => setCurrent(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                i === current ?
                "w-6 bg-foreground" :
                "w-2 bg-muted-foreground/40 hover:bg-muted-foreground/70"}`
                }
                aria-label={`Ir para palestrante ${i + 1}`} />

              )}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.4}>
          <LogoCarousel />
        </AnimatedSection>
      </div>
    </section>);

};

export default SpeakersSection;