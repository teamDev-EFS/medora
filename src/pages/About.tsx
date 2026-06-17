import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -12 }}
    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
  >
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-textPrimary mb-6">About Medora</h1>
      <p className="text-base text-textSecondary mb-4">
        Medora is a modern SaaS platform built for medical practices of all sizes. Our mission is to empower clinics with secure, automated, and insightful tools that streamline patient care and clinic operations.
      </p>
      <p className="text-base text-textSecondary mb-4">
        Founded by healthcare and technology experts, Medora brings together best-in-class security, intuitive design, and powerful automation to help you focus on what matters most: your patients.
      </p>
      <p className="text-base text-textSecondary">
        Join hundreds of clinics who trust Medora to modernize their workflow and grow their practice.
      </p>
    </div>
  </motion.div>
);

export default About;
