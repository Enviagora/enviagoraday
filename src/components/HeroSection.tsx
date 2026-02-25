import { CalendarDays, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {
  const scrollToForm = () => {
    document.getElementById("formulario")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[50vh] items-center justify-center overflow-hidden pt-30 md:pt-20 flex flex-col py-0">
      {/* Radial glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full opacity-20" style={{ background: "radial-gradient(circle, hsl(199 89% 48% / 0.4) 0%, transparent 70%)" }} />
      </div>

      <div className="container relative z-10 text-center mx-0 my-0 px-0">

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-display text-3xl font-bold leading-tight tracking-tight md:text-7xl lg:text-8xl">

          <span className="text-gradient-hero my-0">Enviagora Day,</span>
          <br />
          <span className="text-gradient-silver">clear for takeoff!</span>
        </motion.h1>

        








        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-10 flex flex-col items-center justify-center gap-6 sm:flex-row">

          <div className="flex items-center gap-2 text-silver">
            <CalendarDays className="h-5 w-5" />
            <span className="font-medium">14 de Março, 2026</span>
          </div>
          <div className="hidden h-4 w-px bg-white/20 sm:block" />
          <div className="flex items-center gap-2 text-silver">
            <MapPin className="h-5 w-5" />
            <span className="font-medium">Hangar da Avantto, São Paulo</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="mt-6 my-[12px]">

          <button onClick={scrollToForm} className="btn-silver text-base tracking-wide font-thin font-mono text-center">
            CONFIRMAR PRESENÇA 
          </button>
        </motion.div>

        {/* Decorative chevrons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="mt-8 flex justify-center gap-1 my-[12px]">

          {[0, 1, 2].map((i) =>
          <svg key={i} width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-silver">
              <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </motion.div>
      </div>
    </section>);

};

export default HeroSection;