import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import Portfolio from "../components/Portfolio";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

function HomePage() {
  return (
    <div>
      {" "}
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <Portfolio />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default HomePage;
