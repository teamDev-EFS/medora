import HeroSection from '../components/HeroSection';
import FeatureSection from '../components/FeatureSection';
import HowItWorksSection from '../components/HowItWorksSection';
import TestimonialSection from '../components/TestimonialSection';
import PricingSection from '../components/PricingSection';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Activity, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const stats = [
  { label: 'Active clinics', value: '1,240+', icon: Activity },
  { label: 'Patients served', value: '2.4M', icon: Users },
  { label: 'Uptime SLA', value: '99.99%', icon: ShieldCheck },
];

export default function Home() {
  return (
    <div className="bg-[#0A0F1E] text-[#F9FAFB]">
      <HeroSection />

      {/* Stats strip */}
      <section className="relative border-y border-white/5 bg-[#0A0F1E]">
        <div className="mx-auto max-w-6xl px-6 py-12 grid grid-cols-1 sm:grid-cols-3 gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-4"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#06B6D4]/15 to-[#6366F1]/15 text-cyan-300 ring-1 ring-white/10">
                <s.icon className="h-6 w-6" />
              </span>
              <div>
                <div className="text-2xl font-bold tracking-tight">{s.value}</div>
                <div className="text-sm text-white/60">{s.label}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <FeatureSection />
      <HowItWorksSection />
      <TestimonialSection />
      <PricingSection />

      {/* Final CTA */}
      <section className="relative overflow-hidden bg-[#0A0F1E] py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-[#06B6D4]/10 via-transparent to-[#6366F1]/10 pointer-events-none" />
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-[#06B6D4]/10 blur-3xl pointer-events-none" />
        <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight"
          >
            Ready to modernize your practice?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ delay: 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 text-lg text-white/70"
          >
            Join the clinics already running on Medora. Setup takes minutes, not months.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ delay: 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/pricing">
              <button className="group rounded-full bg-gradient-to-r from-[#06B6D4] to-[#6366F1] px-8 py-3 font-semibold shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-2">
                Start free trial <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </button>
            </Link>
            <Link to="/contact">
              <button className="rounded-full border border-white/20 bg-white/5 px-8 py-3 font-semibold hover:bg-white/10 hover:border-white/30 active:scale-[0.98] transition-colors">
                Talk to sales
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
