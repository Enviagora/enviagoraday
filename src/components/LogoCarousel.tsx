import logosConfirmadas from "@/assets/logos/logos-confirmadas.png";

const LogoCarousel = () => {
  return (
    <div className="mt-16">
      <p className="mb-6 text-center font-sans text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
        Marcas Confirmadas
      </p>
      <div className="flex items-center justify-center">
        <img
          src={logosConfirmadas}
          alt="Marcas confirmadas: AlwaysFit, Bloom, Gummy, PopRida, EnvyHair, Adeus, Maxfem, Cicatribem"
          className="max-w-full object-contain opacity-80"
        />
      </div>
    </div>
  );
};

export default LogoCarousel;
