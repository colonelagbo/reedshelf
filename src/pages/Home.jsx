import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { FeaturesSection } from "../components/FeaturesSection";
import { HowItWorksSection } from "../components/HowItWorksSection";
import { AboutSection } from "../components/AboutSection";
import { CTASection } from "../components/CTASection";
import { BlogPreviewSection } from "../components/BlogPreviewSection";
import { Footer } from "../components/Footer";

export const Home = () => {
  return (
    <div className="min-h-screen bg-[#f8f7f2] text-[#18332b] overflow-x-hidden">
      <Navbar />

      <main>
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <AboutSection />
        <BlogPreviewSection />
        <CTASection />
      </main>

      <Footer />
    </div>
  );
};
