import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
  const prefersReduced = useReducedMotion();
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/20 via-secondary/20 to-background pb-12 pt-20 sm:pt-32">
      {/* Parallax blobs */}
      <motion.div
        className="absolute -top-32 -left-32 w-[480px] h-[480px] rounded-full bg-primary/30 blur-3xl opacity-40 pointer-events-none"
        animate={prefersReduced ? {} : { y: [0, 30, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-0 right-0 w-[320px] h-[320px] rounded-full bg-secondary/30 blur-2xl opacity-30 pointer-events-none"
        animate={prefersReduced ? {} : { x: [0, -40, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
        <motion.h1
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white drop-shadow-xl"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          The Modern Platform for Medical Practices
        </motion.h1>
        <motion.p
          className="mt-6 text-lg sm:text-xl text-white/80 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          Streamline your clinic’s workflow, manage patients securely, and grow with confidence. Medora brings automation, analytics, and HIPAA-grade security to your fingertips.
        </motion.p>
        <motion.div
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <Link to="/pricing">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 0 6px rgba(99,102,241,0.15), 0 12px 24px -8px rgba(99,102,241,0.4)' }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 500, damping: 22 }}
              className="rounded-full bg-primary px-8 py-3 text-white font-medium shadow-lg hover:bg-secondary focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 flex items-center gap-2"
            >
              Get Started <ArrowRight size={20} />
            </motion.button>
          </Link>
          <Link to="/features">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 500, damping: 22 }}
              className="rounded-full border-2 border-white/30 text-white px-8 py-3 font-medium hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              See Features
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
