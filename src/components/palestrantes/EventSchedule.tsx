import { Clock } from "lucide-react";

const schedule = [
  { time: "08:15 – 10:00", label: "Abertura + Bloco 1", accent: true },
  { time: "10:00 – 10:25", label: "Break", accent: false },
  { time: "10:25 – 12:00", label: "Keynote + Talks", accent: true },
  { time: "12:00 – 12:40", label: "Almoco", accent: false },
  { time: "12:40 – 14:35", label: "Talks + Tarde", accent: true },
  { time: "14:35 – 15:05", label: "Break", accent: false },
  { time: "15:05 – 17:30", label: "Encerramento", accent: true },
];

const EventSchedule = () => (
  <section className="mb-16">
    <div className="flex items-center gap-3 mb-8">
      <Clock className="h-5 w-5 text-accent" />
      <h2 className="text-gradient-silver font-heading text-2xl md:text-3xl font-bold">
        Cronograma do evento
      </h2>
    </div>

    <div className="glass-card overflow-hidden">
      <div className="divide-y divide-white/5">
        {schedule.map((item, i) => (
          <div
            key={i}
            className={`flex items-center gap-4 md:gap-6 px-6 md:px-8 py-4 md:py-5 transition-colors duration-200 hover:bg-white/[0.03] ${
              item.accent ? "" : "opacity-60"
            }`}
          >
            <div className="relative flex-shrink-0">
              <div
                className={`w-2.5 h-2.5 rounded-full ${
                  item.accent
                    ? "bg-accent shadow-[0_0_8px_hsl(var(--glow-accent)/0.5)]"
                    : "bg-muted-foreground/40"
                }`}
              />
              {i < schedule.length - 1 && (
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-px h-6 bg-white/10" />
              )}
            </div>

            <span className="text-xs md:text-sm font-mono text-muted-foreground min-w-[120px] md:min-w-[140px]">
              {item.time}
            </span>

            <span
              className={`text-sm md:text-base font-medium ${
                item.accent ? "text-foreground" : "text-muted-foreground"
              }`}
            >
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default EventSchedule;
