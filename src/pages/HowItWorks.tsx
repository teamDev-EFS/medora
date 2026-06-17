import React from 'react';
import { motion } from 'framer-motion';
import HowItWorks from '../components/HowItWorks';

const HowItWorksPage: React.FC = () => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -12 }}
    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
  >
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-textPrimary mb-8">How Medora Works</h1>
      <HowItWorks />
    </div>
  </motion.div>
);

export default HowItWorksPage;
