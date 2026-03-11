import { Clock } from "lucide-react";

const schedule = [
  {
    time: "08:15 – 08:25",
    speaker: "Rafael Born",
    theme: "Abertura oficial do Enviagora Day",
    duration: "10 min",
    isBreak: false,
  },
  {
    time: "08:25 – 08:30",
    speaker: "Transição",
    theme: "",
    duration: "5 min",
    isBreak: false,
  },
  {
    time: "08:30 – 08:45",
    speaker: "Edson Kwecko",
    theme: "A importância do ERP na sua operação",
    duration: "15 min",
    isBreak: false,
  },
  {
    time: "08:45 – 08:50",
    speaker: "Transição",
    theme: "",
    duration: "5 min",
    isBreak: false,
  },
  {
    time: "08:50 – 09:05",
    speaker: "Gustavo Leão",
    theme: "Tributação no e-commerce: Melhores Práticas",
    duration: "15 min",
    isBreak: false,
  },
  {
    time: "09:05 – 09:10",
    speaker: "Transição",
    theme: "",
    duration: "5 min",
    isBreak: false,
  },
  {
    time: "09:10 – 09:30",
    speaker: "Leila",
    theme: "Geração de demanda B2B",
    duration: "20 min",
    isBreak: false,
  },
  {
    time: "09:30 – 09:35",
    speaker: "Transição",
    theme: "",
    duration: "5 min",
    isBreak: false,
  },
  {
    time: "09:35 – 10:00",
    speaker: "Fernando Brasão",
    theme: "Estratégia e execução empresarial",
    duration: "25 min",
    isBreak: false,
  },
  { time: "10:00 – 10:25", speaker: "BREAK", theme: "", duration: "25 min", isBreak: true },
  {
    time: "10:30 – 10:55",
    speaker: "Robson Galvão",
    theme: "Construindo marcas próprias de alto crescimento",
    duration: "25 min",
    isBreak: false,
  },
  {
    time: "10:55 – 11:00",
    speaker: "Transição",
    theme: "",
    duration: "5 min",
    isBreak: false,
  },
  {
    time: "11:00 – 11:30",
    speaker: "Fernando Sherer",
    theme: "Marketing que gera crescimento real",
    duration: "30 min",
    isBreak: false,
  },
  {
    time: "11:30 – 11:35",
    speaker: "Transição",
    theme: "",
    duration: "5 min",
    isBreak: false,
  },
  {
    time: "11:35 – 12:00",
    speaker: "Rogério Avantto",
    theme: "Construindo audiência que vira vendas",
    duration: "25 min",
    isBreak: false,
  },
  { time: "12:00 – 12:40", speaker: "ALMOÇO", theme: "", duration: "40 min", isBreak: true },
  {
    time: "12:40 – 13:00",
    speaker: "Daniel Fleck",
    theme: "Saúde",
    duration: "20 min",
    isBreak: false,
  },
  {
    time: "13:00 – 13:05",
    speaker: "Transição",
    theme: "",
    duration: "5 min",
    isBreak: false,
  },
  {
    time: "13:05 – 13:25",
    speaker: "Jack Alecrim",
    theme: "Como criar produtos inovadores",
    duration: "20 min",
    isBreak: false,
  },
  {
    time: "13:25 – 13:30",
    speaker: "Transição",
    theme: "",
    duration: "5 min",
    isBreak: false,
  },
  { time: "13:30 – 13:55", speaker: "Ricardo Dias", theme: "", duration: "25 min", isBreak: false },
  {
    time: "13:55 – 14:00",
    speaker: "Transição",
    theme: "",
    duration: "5 min",
    isBreak: false,
  },
  {
    time: "14:00 – 14:15",
    speaker: "Rafael Born",
    theme: "História da Enviagora",
    duration: "15 min",
    isBreak: false,
  },
  {
    time: "14:15 – 14:20",
    speaker: "Transição",
    theme: "",
    duration: "5 min",
    isBreak: false,
  },
  {
    time: "14:20 – 14:35",
    speaker: "Gustavo Magalhães",
    theme: "",
    duration: "15 min",
    isBreak: false,
  },
  { time: "14:35 – 15:05", speaker: "BREAK", theme: "", duration: "30 min", isBreak: true },
  {
    time: "15:05 – 15:25",
    speaker: "Victor e Luana",
    theme: "",
    duration: "20 min",
    isBreak: false,
  },
  {
    time: "15:25 – 15:30",
    speaker: "Transição",
    theme: "",
    duration: "5 min",
    isBreak: false,
  },
  {
    time: "15:30 – 15:55",
    speaker: "Barone",
    theme: "",
    duration: "25 min",
    isBreak: false,
  },
  {
    time: "15:55 – 16:00",
    speaker: "Transição",
    theme: "",
    duration: "5 min",
    isBreak: false,
  },
  { time: "16:00 – 16:25", speaker: "MVM", theme: "", duration: "25 min", isBreak: false },
  {
    time: "16:25 – 16:30",
    speaker: "Transição",
    theme: "",
    duration: "5 min",
    isBreak: false,
  },
  {
    time: "16:30 – 16:40",
    speaker: "Kanglu — Nuni",
    theme: "",
    duration: "10 min",
    isBreak: false,
  },
  {
    time: "16:40 – 16:45",
    speaker: "Transição",
    theme: "",
    duration: "5 min",
    isBreak: false,
  },
  {
    time: "16:45 – 17:30",
    speaker: "Ye + Herly + Rafa",
    theme: "",
    duration: "45 min",
    isBreak: false,
  },
];

const EventSchedule = () => (
  <section className="mb-16">
    <div className="flex items-center gap-3 mb-8">
      <Clock className="h-5 w-5 text-accent" />
      <h2 className="text-gradient-silver font-heading text-2xl md:text-3xl font-bold">
        Cronograma do evento
      </h2>
    </div>

    <div className="glass-card overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-white/10">
            <th className="px-6 py-4 text-left font-semibold text-muted-foreground">Horário</th>
            <th className="px-6 py-4 text-left font-semibold text-muted-foreground">Palestrante</th>
            <th className="px-6 py-4 text-left font-semibold text-muted-foreground">Tema</th>
            <th className="px-6 py-4 text-left font-semibold text-muted-foreground">Duração</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-white/5">
          {schedule.map((item, i) => (
            <tr
              key={i}
              className={`transition-colors duration-200 hover:bg-white/[0.03] ${
                item.isBreak ? "bg-white/[0.02]" : ""
              }`}
            >
              <td className="px-6 py-4 font-mono text-xs md:text-sm text-accent">
                {item.time}
              </td>
              <td
                className={`px-6 py-4 font-medium ${
                  item.isBreak ? "text-amber-400" : "text-foreground"
                }`}
              >
                {item.speaker}
              </td>
              <td className="px-6 py-4 text-muted-foreground max-w-xs">{item.theme}</td>
              <td className="px-6 py-4 text-muted-foreground text-xs">{item.duration}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </section>
);

export default EventSchedule;
