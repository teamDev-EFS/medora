import { howItWorks } from '../data/howItWorks';
import GradientText from './GradientText';
import Reveal from './ui/Reveal';

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="w-full py-20">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="max-w-2xl mx-auto text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-[hsl(var(--foreground))]">
              <GradientText>How it works</GradientText>
            </h2>
            <p className="text-lg text-[hsl(var(--muted-foreground))]">
              Get your practice running on Medora in three simple steps.
            </p>
          </div>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {howItWorks.map((step, i) => {
            const Icon = step.icon;
            return (
              <Reveal key={step.title} delay={i * 0.08}>
                <div className="relative h-full bg-[hsl(var(--card))] rounded-xl shadow-sm p-6 border border-[hsl(var(--border))] hover:border-cyan-500/40 transition-colors duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-white/5">
                      <Icon className="w-5 h-5 text-cyan-400" />
                    </div>
                    <span className="text-xs font-semibold tracking-wider text-cyan-400/80">STEP {String(step.step).padStart(2, '0')}</span>
                  </div>
                  <h3 className="font-semibold text-lg mb-2 text-[hsl(var(--foreground))]">{step.title}</h3>
                  <p className="text-[hsl(var(--muted-foreground))] text-sm leading-relaxed">{step.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
