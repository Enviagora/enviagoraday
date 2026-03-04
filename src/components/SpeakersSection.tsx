import AnimatedSection from "./AnimatedSection";
import LogoCarousel from "./LogoCarousel";

import nataliaMigliorini from "@/assets/speakers/natalia-migliorini.png";
import rogerioAndrade from "@/assets/speakers/1ROGERIO-ANDRADE.png";
import zhangYe from "@/assets/speakers/zhang-ye-v2.png";
import rafaBorn from "@/assets/speakers/rafa-born-v2.png";
import robsonGalvao from "@/assets/speakers/robson-galvao-v2.png";
import jackAlecrim from "@/assets/speakers/jack-alecrim-v2.png";
import luigiConstantino from "@/assets/speakers/luigi-constantino-v2.png";
import moritzNeto from "@/assets/speakers/moritz-neto-v2.png";
import fernandoScherer from "@/assets/speakers/xuxa-v2.png";
import victorLuana from "@/assets/speakers/bloom-victor-luana.png";
import diegoSantana from "@/assets/speakers/diego-santana-v2.png";
import fernandoBrasao from "@/assets/speakers/fernando-brasao.png";
import gustavoLeao from "@/assets/speakers/IMG_9572.PNG";
import danielFleck from "@/assets/speakers/IMG_9571.PNG";
import giorgioBarone from "@/assets/speakers/IMG_9570.PNG";
import gustavoMagalhaes from "@/assets/speakers/Felipe-Magalhaes.png";
import ricardoDias from "@/assets/speakers/Ricardo-Dias.png";
import edisonKwecko from "@/assets/speakers/Edison-K..png";


const speakers = [
  { id: 1, image: giorgioBarone, name: "Giorgio Barone", role: "+10 Milhões de Seguidores Somados" },
  { id: 2, image: zhangYe, name: "Zhang Ye", role: "Founder da Always Fit" },
  { id: 3, image: diegoSantana, name: "Diego Santana", role: "Especialista em E-commerce" },
  { id: 4, image: rafaBorn, name: "Rafael Born", role: "Founder Enviagora & Fleurity" },
  { id: 5, image: fernandoScherer, name: "Fernando Scherer", role: "Medalhista Olímpico & Empresário" },
  { id: 6, image: luigiConstantino, name: "Luigi Constantino", role: "Co-Founder do MVM" },
  { id: 7, image: moritzNeto, name: "Moritz Neto", role: "CEO do Grupo Unfair Advantage" },
  { id: 8, image: robsonGalvao, name: "Robson Galvão", role: "CEO da Gummy" },
  { id: 9, image: rogerioAndrade, name: "Rogério Andrade", role: "CEO da Avantto" },
  { id: 10, image: gustavoMagalhaes, name: "Gustavo Magalhães", role: "Fundador da Dreams Holding" },
  { id: 11, image: ricardoDias, name: "Ricardo Dias", role: "Co-Fundador da Adventures Inc." },
  { id: 12, image: edisonKwecko, name: "Edison Kwecko", role: "Fundador da Stokki" },
  { id: 13, image: jackAlecrim, name: "Jack Alecrim", role: "Cientista em Inovação Capilar" },
  { id: 14, image: victorLuana, name: "Victor e Luana", role: "Founders da Bloom Body e Barbours" },
  { id: 15, image: fernandoBrasao, name: "Fernando Brasão", role: "Founder da Marketing Brasil" },
  { id: 16, image: gustavoLeao, name: "Gustavo Leão", role: "Co-Founder da Eblue Solutions" },
  { id: 17, image: danielFleck, name: "Daniel Fleck", role: "Naturopata e Terapeuta Vibracional" },
];

const SpeakersSection = () => {
  return (
<section className="relative pt-4 pb-8 md:pt-8 md:pb-12">
      {/* Subtle ambient glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute left-1/2 top-0 -translate-x-1/2 h-[500px] w-[800px] rounded-full opacity-[0.07]"
          style={{ background: "radial-gradient(circle, hsl(var(--silver-bright)) 0%, transparent 70%)" }}
        />
      </div>

      <div className="container relative z-1 mx-auto px-4 md:px-6">
        {/* Section header */}
        <AnimatedSection className="text-center mb-14">
          <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.4em] text-steel mb-4">
            Quem estará no palco
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
                  className="w-full h-auto object-cover transition-transform duration-700 scale-[1.02] group-hover:scale-[1.05]"
                  loading="lazy"
                  decoding="async"
                />

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
