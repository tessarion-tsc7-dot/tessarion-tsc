import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import FeaturesGrid from "../components/FeaturesGrid";
import MarketHighlights from "../components/MarketHighlights";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <MarketHighlights />
      <FeaturesGrid />
      <Testimonials />
      <Footer />
    </div>
  );
}
