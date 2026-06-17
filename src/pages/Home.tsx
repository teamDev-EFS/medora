import HeroSection from '../components/HeroSection';
import FeatureSection from '../components/FeatureSection';
import HowItWorksSection from '../components/HowItWorksSection';
import PricingSection from '../components/PricingSection';
import TestimonialSection from '../components/TestimonialSection';

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <FeatureSection />
      <HowItWorksSection />
      <PricingSection />
      <TestimonialSection />
    </div>
  );
}
