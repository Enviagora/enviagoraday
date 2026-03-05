import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SpeakersSection from "@/components/SpeakersSection";
import { TopicsSection } from "@/components/TopicsSection";
import ApplicationForm from "@/components/ApplicationForm";
import SponsorsSection from "@/components/SponsorsSection";
import SupportersSection from "@/components/SupportersSection";
import TikTokShopSection from "@/components/TikTokShopSection";
import SupportSection from "@/components/SupportSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="bg-page-gradient min-h-screen">
    <Header />
    <HeroSection />
    <SpeakersSection />
    <TopicsSection />
    <SponsorsSection />
    <SupportersSection />
    <TikTokShopSection />
    <AboutSection />
    <SupportSection />
    <ApplicationForm />
    <Footer />
  </div>
);

export default Index;
