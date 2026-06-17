import { features } from '../data/features';
import GradientText from './GradientText';
import Reveal from './ui/Reveal';

export default function FeatureSection() {
  return (
    <section id="features" className="w-full py-20">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="max-w-2xl mx-auto text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-[hsl(var(--foreground))]">
              <GradientText>Built for modern medical practices</GradientText>
            </h2>
            <p className="text-lg text-[hsl(var(--muted-foreground))]">
              Everything you need to power efficient, secure, and patient-first clinical workflows.
            </p>
          </div>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <Reveal key={feature.title} delay={i * 0.06}>
                <div className="group h-full bg-[hsl(var(--card))] rounded-xl shadow-sm p-6 border border-[hsl(var(--border))] hover:border-cyan-500/40 hover:-translate-y-0.5 transition-all duration-300">
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-white/5">
                    <Icon className="w-5 h-5 text-cyan-400" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2 text-[hsl(var(--foreground))]">{feature.title}</h3>
                  <p className="text-[hsl(var(--muted-foreground))] text-sm leading-relaxed">{feature.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
