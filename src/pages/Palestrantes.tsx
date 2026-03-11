import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import SpeakerIntro from "@/components/palestrantes/SpeakerIntro";
import EventSchedule from "@/components/palestrantes/EventSchedule";
import PresentationUpload from "@/components/palestrantes/PresentationUpload";

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
    <Footer />
  </div>
);

export default Palestrantes;
