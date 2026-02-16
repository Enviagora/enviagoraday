import AnimatedSection from "./AnimatedSection";
import logoApoio from "@/assets/logos/apoio.png";

const SupportSection = () => (
  <section className="relative py-3 md:py-16">
    <div className="container mx-auto px-6">
      <AnimatedSection>
        <p className="mb-8 text-center font-sans text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
          Apoio
        </p>
        <div className="flex items-center justify-center">
          <img
            src={logoApoio}
            alt="Apoiadores: Stokki, Dubraval, eBlue"
            className="h-32 md:h-40 w-auto object-contain grayscale opacity-70"
            loading="lazy"
          />
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default SupportSection;
