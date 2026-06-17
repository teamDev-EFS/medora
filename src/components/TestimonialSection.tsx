import React from 'react';
import { Quote } from 'lucide-react';
import { testimonials } from '../data/testimonials';
import GradientText from './GradientText';
import Reveal from './ui/Reveal';

const TestimonialSection: React.FC = () => {
  return (
    <section id="testimonials" className="relative py-20">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-[hsl(var(--foreground))] mb-3">
              <GradientText>Trusted by clinicians worldwide</GradientText>
            </h2>
            <p className="text-lg text-[hsl(var(--muted-foreground))]">
              From solo practitioners to multi-location clinics — Medora powers care everywhere.
            </p>
          </div>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <Reveal key={testimonial.name} delay={i * 0.08}>
              <div className="relative h-full bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-2xl p-6 shadow-sm hover:border-cyan-500/40 transition-colors duration-300 flex flex-col">
                <Quote className="w-6 h-6 text-cyan-400/40 mb-3" />
                <blockquote className="text-[hsl(var(--foreground))]/90 text-sm leading-relaxed flex-1">
                  “{testimonial.quote}”
                </blockquote>
                <div className="mt-6 flex items-center">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full object-cover mr-3 ring-2 ring-cyan-500/30"
                  />
                  <div>
                    <div className="font-semibold text-sm text-[hsl(var(--foreground))]">{testimonial.name}</div>
                    <div className="text-xs text-[hsl(var(--muted-foreground))]">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
