import Navigation from "@/components/Navigation";
import AnimatedHero from "@/components/AnimatedHero";
import AISolutions from "@/components/AISolutions";
import PlatformFeatures from "@/components/PlatformFeatures";
import EnterpriseIntegrations from "@/components/EnterpriseIntegrations";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ChatBot from "@/components/ChatBot";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <AnimatedHero />
      <AISolutions />
      <PlatformFeatures />
      <EnterpriseIntegrations />
      <Services />
      <Portfolio />
      <Testimonials />
      <About />
      <Contact />
      <Footer />
      <WhatsAppButton />
      <ChatBot />
    </div>
  );
};

export default Index;
