import React from 'react';
import { Check } from 'lucide-react';
import { pricingTiers } from '../data/pricing';
import GradientText from './GradientText';
import Button from './Button';
import Reveal from './ui/Reveal';

const PricingSection: React.FC = () => {
  return (
    <section id="pricing" className="relative py-20">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-[hsl(var(--foreground))] mb-3">
              <GradientText>Simple, transparent pricing</GradientText>
            </h2>
            <p className="text-lg text-[hsl(var(--muted-foreground))]">
              One plan for every practice size. No hidden fees, no per-seat surprises.
            </p>
          </div>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pricingTiers.map((tier, i) => (
            <Reveal key={tier.name} delay={i * 0.08}>
              <div
                className={`relative flex flex-col justify-between h-full bg-[hsl(var(--card))] border rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 ${
                  tier.featured
                    ? 'border-cyan-500/50 shadow-lg shadow-cyan-500/10'
                    : 'border-[hsl(var(--border))] hover:border-[hsl(var(--border))]/80'
                }`}
              >
                {tier.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 px-3 py-1 text-xs font-semibold text-white">
                    Most popular
                  </div>
                )}
                <div>
                  <h3 className="text-lg font-semibold text-[hsl(var(--foreground))] mb-2">
                    {tier.name}
                  </h3>
                  <div className="flex items-end mb-6">
                    <span className="text-5xl font-bold text-[hsl(var(--foreground))]">
                      ${tier.price}
                    </span>
                    <span className="ml-2 mb-1 text-sm text-[hsl(var(--muted-foreground))]">/month</span>
                  </div>
                  <ul className="mb-8 space-y-3">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-[hsl(var(--foreground))]/90">
                        <Check className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Button
                  variant={tier.featured ? 'gradient' : 'outline'}
                  size="lg"
                  className="w-full mt-auto"
                >
                  {tier.cta}
                </Button>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
