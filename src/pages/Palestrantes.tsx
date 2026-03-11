import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import SpeakerIntro from "@/components/palestrantes/SpeakerIntro";
import EventSchedule from "@/components/palestrantes/EventSchedule";
import PresentationUpload from "@/components/palestrantes/PresentationUpload";
import AdminDownload from "@/components/palestrantes/AdminDownload";

const Palestrantes = () => (
  <div className="bg-page-gradient min-h-screen">
    <Header />
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <AnimatedSection>
          <SpeakerIntro />
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <EventSchedule />
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <PresentationUpload />
        </AnimatedSection>
      </div>
    </main>
    <footer className="border-t border-white/5 py-10">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">© 2026 Enviagora. Todos os direitos reservados.</span>
        </div>
        <AdminDownload />
      </div>
    </footer>
  </div>
);

export default Palestrantes;
