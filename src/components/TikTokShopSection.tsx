import AnimatedSection from "./AnimatedSection";
import logoAlwaysFit from "@/assets/logos/alwaysfit.png";
import logoBloom from "@/assets/logos/bloom.png";
import logoAdeus from "@/assets/logos/adeus.png";
import logoPopozuda from "@/assets/logos/popozuda.png";

const brands = [
  { src: logoAlwaysFit, alt: "AlwaysFit" },
  { src: logoBloom, alt: "Bloom" },
  { src: logoAdeus, alt: "Adeus" },
  { src: logoPopozuda, alt: "Popozuda" },
];

const TikTokShopSection = () => (
  <section className="relative py-16 md:py-24">
    <div className="container mx-auto px-4 md:px-6 flex justify-center">
      <AnimatedSection className="w-full max-w-2xl">
        <div
          className="relative rounded-2xl p-[2px]"
          style={{
            background: "linear-gradient(135deg, #00f2ea, #ff0050, #00f2ea)",
            boxShadow: "0 0 40px rgba(0,242,234,0.18), 0 0 80px rgba(255,0,80,0.10), 0 8px 48px rgba(0,0,0,0.6)",
          }}
        >
          <div
            className="rounded-2xl px-8 py-10 md:px-12 md:py-14 flex flex-col items-center text-center gap-6"
            style={{ background: "#0a0a0a" }}
          >
            <span
              className="text-[10px] font-bold uppercase tracking-[0.35em] px-3 py-1 rounded-full border border-white/10"
              style={{
                background: "linear-gradient(90deg, #00f2ea, #ff0050)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              TikTok Shop
            </span>

            <h2
              className="text-2xl md:text-4xl font-bold leading-tight text-white"
            >
              A logística por trás de quem domina o TikTok Shop
            </h2>

            <p className="text-sm md:text-base text-white/60 max-w-md leading-relaxed">
              Marcas como AlwaysFit, Bloom, Adeus e Popozuda escalam milhares de pedidos por dia. O que elas têm em comum? A Enviagora na operação.
            </p>

            <div className="flex items-center justify-center gap-8 py-2">
              {brands.map((brand) => (
                <img
                  key={brand.alt}
                  src={brand.src}
                  alt={brand.alt}
                  className="h-8 md:h-10 w-auto object-contain opacity-70 grayscale brightness-200 transition-all duration-300 hover:opacity-100 hover:grayscale-0 hover:brightness-100"
                  loading="lazy"
                  decoding="async"
                />
              ))}
            </div>

            <a
              href="#formulario"
              className="mt-2 inline-block rounded-full px-8 py-3 text-sm font-bold text-white uppercase tracking-widest transition-all duration-300 hover:scale-105 hover:shadow-lg"
              style={{
                background: "linear-gradient(90deg, #00f2ea, #ff0050)",
                boxShadow: "0 0 24px rgba(0,242,234,0.25), 0 0 24px rgba(255,0,80,0.15)",
              }}
            >
              Quero escalar minha operação
            </a>
          </div>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default TikTokShopSection;
