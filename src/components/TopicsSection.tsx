import { motion } from "framer-motion";

const topics = [
  { title: "ESCALA", description: "Estratégias para crescimento exponencial" },
  { title: "OPERAÇÃO", description: "Otimização de processos e eficiência" },
  { title: "PERFORMANCE", description: "Maximização de resultados e métricas" },
  { title: "BRANDING", description: "Construção de marca forte e diferenciada" },
  { title: "ASSINATURAS", description: "Modelos de negócio recorrentes" },
  { title: "JOGO DE LONGO PRAZO", description: "Visão estratégica sustentável" },
  { title: "INTERNACIONALIZAÇÃO", description: "Expansão para mercados globais" },
];

export const TopicsSection = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-black via-gray-950 to-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtMy4zMTQgMC02IDIuNjg2LTYgNnMyLjY4NiA2IDYgNiA2LTIuNjg2IDYtNi0yLjY4Ni02LTYtNnoiIHN0cm9rZT0iIzMzMyIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9nPjwvc3ZnPg==')] opacity-20"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-blue-400 font-medium mb-4 tracking-wide uppercase text-sm">
            Um dia inteiro falando sobre
          </p>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Os Temas do Evento
          </h2>
        </motion.div>

       <div className="flex flex-wrap gap-3 mb-12 justify-start">
  {topics.map((topic, index) => (
    <motion.div
      key={topic.title}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
    >
      <div className="border border-white/80 rounded-full px-6 py-3 hover:bg-white/10 transition-all duration-300 cursor-default">
        <span className="text-white font-bold tracking-widest uppercase text-sm md:text-base">
          {topic.title}
        </span>
      </div>
    </motion.div>
  ))}
</div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center space-y-4"
        >
          <div className="inline-flex items-center gap-2 text-gray-400 text-sm">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            <p className="uppercase tracking-wider font-medium">
              Conteúdo de alto nível para empreendedores sérios
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
