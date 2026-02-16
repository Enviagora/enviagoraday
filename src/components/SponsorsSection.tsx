import AnimatedSection from "./AnimatedSection";
import logoFm from "@/assets/logos/fm-transportes.png";
import logoGecaps from "@/assets/logos/gecaps.png";
import logoMvm from "@/assets/logos/mvm.png";

const sponsors = [
  { src: logoFm, alt: "FM Transportes" },
  { src: logoGecaps, alt: "Gecaps" },
  { src: logoMvm, alt: "MVM" },
];

const SponsorsSection = () => (
  <section className="relative py-4 md:py-20">
    <div className="container mx-auto px-6">
      <div className="glow-line mb-12" />
      <AnimatedSection>
        <p className="mb-8 text-center font-sans text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
          Patrocinadores
        </p>
        <div className="flex flex-nowrap items-center justify-center gap-1 md:gap-16">
          {sponsors.map((sponsor) => (
            <img
              key={sponsor.alt}
              src={sponsor.src}
              alt={sponsor.alt}
              className="h-12 md:h-24 w-auto object-contain opacity-80 grayscale transition-opacity hover:opacity-100"
              loading="lazy"
            />
          ))}
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default SponsorsSection;
