import { motion } from "framer-motion";
import { Check } from "lucide-react";

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
            Um dia inteiro falando sobre:
          </p>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Os Temas do Evento
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"></div>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Nada de palco genérico. Nada de conteúdo de superfície.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {topics.map((topic, index) => (
            <motion.div
              key={topic.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="bg-black border border-gray-800 rounded-2xl p-8 h-full hover:border-blue-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="relative z-10">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="mt-1 flex-shrink-0">
                      <div className="w-8 h-8 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                        <Check className="w-4 h-4 text-blue-400" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2 tracking-wide">
                        {topic.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {topic.description}
                      </p>
                    </div>
                  </div>
                </div>
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
