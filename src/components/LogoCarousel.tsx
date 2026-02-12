import logoMaxfem from "@/assets/logos/maxfem.png";
import logoAdeus from "@/assets/logos/adeus.png";
import logoAlwaysfit from "@/assets/logos/alwaysfit.png";
import logoBloom from "@/assets/logos/bloom.png";
import logoCicatribem from "@/assets/logos/cicatribem.png";
import logoDot from "@/assets/logos/dot.png";
import logoPopozuda from "@/assets/logos/popozuda.png";
import logoEnvyhair from "@/assets/logos/envyhair.png";
import logoGuday from "@/assets/logos/guday.png";
import logoGummy from "@/assets/logos/gummy.png";

const logos = [
  { src: logoAlwaysfit, alt: "AlwaysFit" },
  { src: logoBloom, alt: "Bloom" },
  { src: logoGummy, alt: "Gummy Original" },
  { src: logoPopozuda, alt: "Popozuda" },
  { src: logoEnvyhair, alt: "Envy Hair" },
  { src: logoAdeus, alt: "Adeus" },
  { src: logoMaxfem, alt: "Maxfem" },
  { src: logoCicatribem, alt: "Cicatribem" },
  { src: logoDot, alt: "DOT" },
  { src: logoGuday, alt: "Guday" },
];

const LogoCarousel = () => {
  return (
    <div className="mt-16">
      <p className="mb-6 text-center font-sans text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
        Marcas Confirmadas
      </p>
      <div className="relative overflow-hidden">
        {/* Fade edges */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-background to-transparent" />

        <div className="flex animate-[scroll_25s_linear_infinite] w-max gap-16 items-center">
          {[...logos, ...logos].map((logo, i) => (
            <img
              key={i}
              src={logo.src}
              alt={logo.alt}
              className="h-10 w-auto object-contain opacity-70 grayscale"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoCarousel;
