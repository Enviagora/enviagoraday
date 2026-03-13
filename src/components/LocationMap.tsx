import AnimatedSection from "./AnimatedSection";
import { MapPin, ExternalLink } from "lucide-react";
import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const LocationMap = () => {
  const address = "Av. Olavo Fontoura, 780 - Santana, São Paulo - SP, 02012-000";
  const latitude = -23.508611;
  const longitude = -46.624361;
  const mapRef = useRef<L.Map | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;

    const map = L.map(containerRef.current).setView([latitude, longitude], 15);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "© OpenStreetMap contributors",
      maxZoom: 19,
    }).addTo(map);

    const customIcon = L.icon({
      iconUrl: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23c0a080' width='32' height='32'%3E%3Cpath d='M12 2C6.48 2 2 6.48 2 12c0 4.08 2.64 7.58 6.36 9.12.48.12.72 0 .84-.36.12-.36.72-2.88.84-3.36.12-.36 0-.6-.24-.84-.6-.48-1.08-1.08-1.08-2.04 0-3 2.52-5.52 5.28-5.52s5.28 2.52 5.28 5.52c0 .96-.48 1.56-1.08 2.04-.24.24-.36.48-.24.84.12.48.36 3 .84 3.36.12.36.36.48.84.36C19.36 19.58 22 16.08 22 12c0-5.52-4.48-10-10-10zm0 17c-3.84 0-7-3.12-7-7 0-3.84 3.12-7 7-7s7 3.12 7 7c0 3.84-3.12 7-7 7z'/%3E%3C/svg%3E",
      iconSize: [32, 32],
      iconAnchor: [16, 32],
      popupAnchor: [0, -32],
    });

    L.marker([latitude, longitude], { icon: customIcon })
      .addTo(map)
      .bindPopup(
        `<div class="font-semibold text-sm">${address}</div>`,
        { maxWidth: 200 }
      );

    mapRef.current = map;

    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, []);

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

            <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <div
                ref={containerRef}
                className="h-[300px] md:h-[400px] bg-slate-900 map-container"
              />
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default LocationMap;
