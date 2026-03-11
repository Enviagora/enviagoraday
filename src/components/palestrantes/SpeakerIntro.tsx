import logoEnviagoraDay from "@/assets/logo-enviagora-day-nobg.png";
import { ExternalLink } from "lucide-react";

const SpeakerIntro = () => (
  <section className="mb-16 text-center">
    <img
      src={logoEnviagoraDay}
      alt="Enviagora Day"
      className="mx-auto mb-10 h-12"
      loading="eager"
    />

    <h1 className="text-gradient-hero font-heading text-3xl md:text-4xl font-bold mb-6 leading-tight">
      Seja bem-vindo, palestrante.
    </h1>

    <div className="glass-card p-8 md:p-10 text-left space-y-4 text-sm md:text-base leading-relaxed text-muted-foreground">
      <p>
        Parabéns por fazer parte do time de palestrantes do{" "}
        <span className="text-foreground font-semibold">Enviagora Day</span>.
      </p>
      <p>
        Este é um espaço pensado especialmente para você — aqui você encontra
        tudo o que precisa saber sobre o evento e pode enviar sua apresentação
        com tranquilidade.
      </p>
      <p>
        No dia <span className="text-foreground font-semibold">14 de março</span>,
        150 a 200 pessoas estarão presentes com um objetivo em comum:{" "}
        <span className="text-foreground font-semibold">crescer</span>. E a sua
        voz vai fazer parte disso.
      </p>
      <p>
  Para ajudá-lo, disponibilizamos um{" "}
  
    href="https://docs.google.com/presentation/d/1A2Olc0qUubNVPWEpPsZ95luUKTOdQjX8FsmLvJUa-Vk/edit?usp=sharing"
    target="_blank"
    rel="noopener noreferrer"
    className="text-accent hover:underline inline-flex items-center gap-1"
  >
    template de apresentação
    <ExternalLink className="h-3 w-3" />
  </a>{" "}
  como base para sua palestra. Caso prefira criar a sua própria, o tamanho é{" "}
  <span className="text-foreground font-semibold">2758 × 1034 pixels</span> —
  e pedimos apenas que utilize{" "}
  <span className="text-foreground font-semibold">
    a primeira imagem do template como capa
  </span>
  , para mantermos a identidade visual do evento.
</p>
      <p className="text-amber-400/80 font-semibold pt-2">
        Prazo: As apresentações devem ser enviadas até{" "}
        <span className="text-amber-400">quinta-feira, 12 de março às 20h00</span>.
      </p>
      <p>
        Estamos honrados em tê-lo conosco. Qualquer dúvida, estamos à disposição.
      </p>
      <p className="pt-2 text-foreground font-semibold">Equipe Enviagora</p>
    </div>

    <div className="mt-8">
      <a href="#presentation-upload">
        <button className="btn-silver text-sm">Enviar apresentação</button>
      </a>
    </div>
  </section>
);

export default SpeakerIntro;
