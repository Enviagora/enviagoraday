import { useEffect, useRef } from "react";
import auraBeauty from "@/assets/logos/aura-beauty.png";
import guday from "@/assets/logos/guday.png";
import gummy from "@/assets/logos/gummy.png";
import bigboom from "@/assets/logos/bigboom.png";
import hiven from "@/assets/logos/hiven.png";
import alwaysfit from "@/assets/logos/alwaysfit.png";

const logos = [
  { src: auraBeauty, alt: "Aura Beauty" },
  { src: guday, alt: "Guday" },
  { src: gummy, alt: "Gummy Original" },
  { src: bigboom, alt: "BigBoom" },
  { src: hiven, alt: "Hiven" },
  { src: alwaysfit, alt: "AlwaysFit" },
];

const LogoCarousel = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    let frame: number;
    let pos = 0;
    const speed = 0.5;

    const step = () => {
      pos += speed;
      if (pos >= el.scrollWidth / 2) pos = 0;
      el.scrollLeft = pos;
      frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, []);

  // Duplicate logos for seamless infinite scroll
  const allLogos = [...logos, ...logos];

  return (
    <div className="mt-16 overflow-hidden">
      <p className="mb-6 text-center font-sans text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
        Marcas Confirmadas
      </p>
      <div
        ref={scrollRef}
        className="flex items-center gap-12 overflow-hidden"
        style={{ scrollBehavior: "auto" }}
      >
        {allLogos.map((logo, i) => (
          <div
            key={i}
            className="flex h-16 w-40 shrink-0 items-center justify-center opacity-70 grayscale brightness-200 transition-all duration-300 hover:opacity-100 hover:grayscale-0 hover:brightness-100"
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="max-h-full max-w-full object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoCarousel;
