import AnimatedSection from "./AnimatedSection";
import logoApoio from "@/assets/logos/apoio.png";

const supporters = [
  { src: logoApoio, alt: "Kanglu" },
];

const SupportersSection = () => (
  <section className="relative py-4 md:py-8">
    <div className="container mx-auto px-6">
      <div className="glow-line mb-12" />
      <AnimatedSection>
        <p className="mb-8 text-center font-sans text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
          Apoiadores
        </p>
        <div className="flex flex-nowrap items-center justify-center gap-1 md:gap-16">
          {supporters.map((supporter) => (
            <img
              key={supporter.alt}
              src={supporter.src}
              alt={supporter.alt}
              className="h-12 md:h-24 w-auto object-contain opacity-80 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0 hover:scale-110"
              loading="lazy"
              decoding="async"
            />
          ))}
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default SupportersSection;
