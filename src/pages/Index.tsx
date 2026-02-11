import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SpeakersSection from "@/components/SpeakersSection";
import ApplicationForm from "@/components/ApplicationForm";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="bg-page-gradient min-h-screen">
    <Header />
    <HeroSection />
    <AboutSection />
    <SpeakersSection />
    <ApplicationForm />
    <Footer />
  </div>
);

export default Index;
