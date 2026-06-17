import React from 'react';
import { motion } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import FeatureGrid from '../components/FeatureGrid';
import HowItWorks from '../components/HowItWorks';
import PricingSection from '../components/PricingSection';
import TestimonialRow from '../components/TestimonialRow';

const Home: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
    >
      <HeroSection />
      <FeatureGrid />
      <HowItWorks />
      <PricingSection />
      <TestimonialRow />
    </motion.div>
  );
};

export default Home;
