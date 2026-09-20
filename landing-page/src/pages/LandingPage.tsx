import Header from "../components/Header";
import Hero from "../components/Hero";
import HowItWorksSection from "../components/HowItWorksSection";
import MemoriesSection from "../components/MemoriesSection";
import PricingSection from "../components/PricingSection";
import ProblemSection from "../components/ProblemSection";
import TargetSection from "../components/TargetSection";
import VoiceSection from "../components/VoiceSection";

const LandingPage = () => {
  return (
    <div className="overflow-x-hidden bg-[#FFFCF4]">
      <Header />

      <main>
        <Hero />

        <ProblemSection />

        <TargetSection />

        <HowItWorksSection />

        <VoiceSection />

        <MemoriesSection />

        <PricingSection />
      </main>
    </div>
  );
};

export default LandingPage;
