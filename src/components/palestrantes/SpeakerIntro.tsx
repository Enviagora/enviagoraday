import logoEnviagoraDay from "@/assets/logo-enviagora-day-nobg.png";

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
        Parabens por fazer parte do time de palestrantes do{" "}
        <span className="text-foreground font-semibold">Enviagora Day</span>.
      </p>
      <p>
        Este e um espaco pensado especialmente para voce — aqui voce encontra
        tudo o que precisa saber sobre o evento e pode enviar sua apresentacao
        com tranquilidade.
      </p>
      <p>
        No dia <span className="text-foreground font-semibold">14 de marco</span>,
        150 pessoas estarao presentes com um objetivo em comum:{" "}
        <span className="text-foreground font-semibold">crescer</span>. E a sua
        voz vai fazer parte disso.
      </p>
      <p>
        Estamos honrados em te-lo conosco. Qualquer duvida, estamos a
        disposicao.
      </p>
      <p className="pt-2 text-foreground font-semibold">Equipe Enviagora</p>
    </div>
  </section>
);

export default SpeakerIntro;
