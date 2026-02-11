import { Plane } from "lucide-react";

const Header = () => {
  const scrollToForm = () => {
    document.getElementById("formulario")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5" style={{ background: "rgba(15,23,42,0.6)", backdropFilter: "blur(16px)" }}>
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2">
          <Plane className="h-5 w-5 text-silver rotate-[-30deg]" />
          <span className="font-display text-lg font-bold tracking-wider text-foreground">ENVIAGORA</span>
        </div>
        <button onClick={scrollToForm} className="btn-outline-silver text-sm">
          Solicitar Convite
        </button>
      </div>
    </header>
  );
};

export default Header;
