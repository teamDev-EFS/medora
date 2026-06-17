import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const NoiseOverlay: React.FC = () => (
  <svg
    className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.035] mix-blend-overlay"
    aria-hidden="true"
  >
    <filter id="hero-noise">
      <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" />
      <feColorMatrix type="saturate" values="0" />
    </filter>
    <rect width="100%" height="100%" filter="url(#hero-noise)" />
  </svg>
);

const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-[#0A0F1E] pb-20 pt-24 sm:pt-36">
      {/* Subtle cyan-to-purple ambient wash */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#06B6D4]/10 via-[#6366F1]/10 to-transparent pointer-events-none" />

      {/* Single static ambient glow */}
      <div className="absolute -top-32 -left-32 w-[480px] h-[480px] rounded-full bg-[#06B6D4]/20 blur-3xl opacity-40 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[320px] h-[320px] rounded-full bg-[#6366F1]/20 blur-3xl opacity-30 pointer-events-none" />

      <NoiseOverlay />

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-cyan-300 backdrop-blur mb-6"
        >
          <Sparkles size={14} />
          HIPAA-grade · Built for modern clinics
        </motion.div>
        <motion.h1
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#F9FAFB] drop-shadow-sm"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          The modern platform for medical practices
        </motion.h1>
        <motion.p
          className="mt-6 text-lg sm:text-xl text-[#F9FAFB]/80 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          Streamline your clinic's workflow, manage patients securely, and grow with confidence. Medora brings automation, analytics, and HIPAA-grade security to your fingertips.
        </motion.p>
        <motion.div
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <Link to="/pricing">
            <button
              className="group rounded-full bg-gradient-to-r from-[#06B6D4] to-[#6366F1] px-8 py-3 text-[#F9FAFB] font-semibold shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:brightness-110 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#06B6D4] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0F1E] flex items-center justify-center gap-2 transition-all"
            >
              Get Started <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </button>
          </Link>
          <Link to="/features">
            <button
              className="rounded-full border border-white/20 bg-white/5 text-[#F9FAFB] px-8 py-3 font-semibold hover:bg-white/10 hover:border-white/30 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#06B6D4] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0F1E] transition-colors"
            >
              See Features
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
