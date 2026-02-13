import { Instagram, Plane } from "lucide-react";

const Footer = () =>
<footer className="border-t border-white/5 py-10">
    <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-6 sm:flex-row">
      <div className="flex items-center gap-2">
        <Plane className="h-4 w-4 text-muted-foreground rotate-[-30deg]" />
        <span className="text-sm text-muted-foreground">© 2026 Enviagora. Todos os direitos reservados.</span>
      </div>
      <div className="flex gap-4">
        <a href="#" aria-label="Instagram" className="text-muted-foreground transition-colors hover:text-silver">
          <Instagram className="h-5 w-5" />
        </a>
        <a href="#" aria-label="LinkedIn" className="text-muted-foreground transition-colors hover:text-silver">
          
        </a>
      </div>
    </div>
  </footer>;


export default Footer;