import React from 'react';
import { testimonials } from '../data/testimonials';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const TestimonialRow: React.FC = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <motion.h2
        className="text-2xl sm:text-3xl font-bold text-center mb-10 text-textPrimary"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        What Our Customers Say
      </motion.h2>
      <motion.div
        className="flex gap-8 overflow-x-auto pb-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
      >
        {testimonials.map((t) => (
          <motion.div
            key={t.id}
            className="min-w-[320px] max-w-sm flex-1 bg-surface-1 rounded-2xl border border-border shadow-lg p-8 flex flex-col items-center text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            variants={{
              hidden: { opacity: 0, y: 24 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
            }}
          >
            <span className="w-14 h-14 flex items-center justify-center rounded-full bg-primary/10 mb-4">
              <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover" loading="lazy" />
            </span>
            <Quote size={32} className="text-primary mb-2" />
            <p className="text-base text-textPrimary mb-4">“{t.quote}”</p>
            <div className="text-sm font-semibold text-textPrimary">{t.name}</div>
            <div className="text-xs text-textSecondary">{t.role}</div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default TestimonialRow;
