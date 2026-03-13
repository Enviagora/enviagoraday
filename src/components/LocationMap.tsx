import AnimatedSection from "./AnimatedSection";
import { MapPin, ExternalLink } from "lucide-react";

const LocationMap = () => {
  const address = "Av. Olavo Fontoura, 1078 - Santana, São Paulo - SP, 02012-021";
  const latitude = -23.50861;
  const longitude = -46.62436;

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
                    <h3 className="text-lg font-semibold text-foreground mb-3">
                      Endereço do Evento
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
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
            </div>

            <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-gradient-to-br from-white/5 to-white/10 p-8">
              <a
                href={`https://www.google.com/maps?q=${latitude},${longitude}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-[300px] md:h-[400px] bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg overflow-hidden hover:opacity-90 transition-opacity relative group"
              >
                <img
                  src={`https://maps.googleapis.com/maps/api/staticmap?center=${latitude},${longitude}&zoom=15&size=600x400&markers=color:0x9CA3AF|${latitude},${longitude}&key=AIzaSyDummyKeyForPreview`}
                  alt="Localização do evento"
                  className="w-full h-full object-cover opacity-50"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-slate-800/80 to-slate-900/80 group-hover:from-slate-800/70 group-hover:to-slate-900/70 transition-all">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-silver mx-auto mb-3" />
                    <p className="text-white font-semibold">Ver no Google Maps</p>
                    <p className="text-silver text-sm mt-2">Clique para abrir</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default LocationMap;
