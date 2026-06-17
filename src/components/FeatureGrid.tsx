import React from 'react';
import { features } from '../data/features';
import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';

const FeatureGrid: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
      >
        {features.map((feature) => {
          const Icon = (LucideIcons as any)[feature.icon] || LucideIcons['Circle'];
          return (
            <motion.div
              key={feature.id}
              className="rounded-2xl border border-border bg-surface-1 shadow-lg p-8 flex flex-col items-center text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
              }}
              whileHover={{ scale: 1.03, boxShadow: '0 12px 32px -8px rgba(6,182,212,0.18)' }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="w-14 h-14 flex items-center justify-center rounded-xl bg-primary/10 mb-4">
                <Icon size={32} className="text-primary" />
              </span>
              <h3 className="text-lg font-semibold text-textPrimary mb-2">{feature.title}</h3>
              <p className="text-sm text-textSecondary">{feature.description}</p>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default FeatureGrid;
