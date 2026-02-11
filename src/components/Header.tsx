import logoEnviagoraDay from "@/assets/logo-enviagora-day.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5" style={{ background: "rgba(15,23,42,0.6)", backdropFilter: "blur(16px)" }}>
      <div className="container mx-auto flex items-center justify-center px-6 py-4">
        <img src={logoEnviagoraDay} alt="Enviagora Day" className="h-8" />
      </div>
    </header>
  );
};

export default Header;
