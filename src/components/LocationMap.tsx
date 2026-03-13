import AnimatedSection from "./AnimatedSection";
import { MapPin, ExternalLink } from "lucide-react";

const LocationMap = () => {
  const address = "Av. Olavo Fontoura, 780 - Santana, São Paulo - SP, 02012-000";
  const latitude = -23.508611;
  const longitude = -46.624361;

  return (
    <section id="localizacao" className="relative py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection className="text-center mb-12 md:mb-16">
          <p className="mb-3 font-sans text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
            Localização
          </p>
          <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
            Nos encontre no{" "}
            <span className="text-gradient-silver">Hangar</span>
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.2} className="mx-auto max-w-2xl">
          <div className="glass-card-strong p-8 rounded-2xl">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <MapPin className="h-6 w-6 text-gradient-silver mt-1" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  Endereço do Evento
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {address}
                </p>
                <div className="flex flex-col gap-2">
                  <a
                    href={`https://www.google.com/maps?q=${latitude},${longitude}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-silver hover:text-white transition-colors text-sm font-medium"
                  >
                    Abrir no Google Maps
                    <ExternalLink className="h-4 w-4" />
                  </a>
                  <a
                    href={`https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-silver hover:text-white transition-colors text-sm font-medium"
                  >
                    Traçar rota
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default LocationMap;
