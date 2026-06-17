import React from 'react';
import { motion } from 'framer-motion';
import { ClipboardList, CalendarCheck2, BarChart3 } from 'lucide-react';

const steps = [
  {
    icon: <ClipboardList size={32} className="text-primary" />,
    title: 'Sign Up & Import',
    description: 'Create your Medora account and import your patient data in minutes. Our onboarding is seamless and guided.',
  },
  {
    icon: <CalendarCheck2 size={32} className="text-primary" />,
    title: 'Automate & Schedule',
    description: 'Set up automated reminders, manage appointments, and let Medora handle the busywork.',
  },
  {
    icon: <BarChart3 size={32} className="text-primary" />,
    title: 'Grow & Analyze',
    description: 'Track key metrics, patient engagement, and clinic growth with real-time analytics.',
  },
];

const HowItWorks: React.FC = () => {
  return (
    <section className="max-w-5xl mx-auto px-4 py-16">
      <motion.h2
        className="text-2xl sm:text-3xl font-bold text-center mb-10 text-textPrimary"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        How Medora Works
      </motion.h2>
      <div className="flex flex-col md:flex-row gap-10 md:gap-6 justify-center items-stretch">
        {steps.map((step, idx) => (
          <motion.div
            key={step.title}
            className="flex-1 bg-surface-1 rounded-2xl border border-border shadow-md p-8 flex flex-col items-center text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ delay: idx * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="w-14 h-14 flex items-center justify-center rounded-xl bg-primary/10 mb-4">
              {step.icon}
            </span>
            <h3 className="text-lg font-semibold text-textPrimary mb-2">{step.title}</h3>
            <p className="text-sm text-textSecondary">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
