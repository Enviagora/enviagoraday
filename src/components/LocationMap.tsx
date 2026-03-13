import AnimatedSection from "./AnimatedSection";
import { MapPin } from "lucide-react";

const LocationMap = () => {
  const address = "Av. Olavo Fontoura, 1078 - Santana, São Paulo - SP, 02012-021";
  const googleMapsUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3730.7534788849373!2d-46.62436!3d-23.50861!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce658e0d1bd9ad%3A0x3f23e0f6f6f6f6f6!2sAv.%20Olavo%20Fontoura%2C%201078%20-%20Santana%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2002012-021!5e0!3m2!1spt-BR!2sbr!4v1234567890";

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

        <AnimatedSection delay={0.2} className="mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="flex flex-col gap-6">
              <div className="glass-card-strong p-8 rounded-2xl">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <MapPin className="h-6 w-6 text-gradient-silver mt-1" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      Endereço do Evento
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {address}
                    </p>
                    <a
                      href={`https://www.google.com/maps/search/${encodeURIComponent(address)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-4 text-silver hover:text-white transition-colors text-sm font-medium"
                    >
                      Ver no Google Maps
                      <span>→</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <iframe
                src={googleMapsUrl}
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-[300px] md:h-[400px]"
              />
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default LocationMap;
