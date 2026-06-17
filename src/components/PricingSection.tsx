import React, { useMemo, useState } from 'react';
import { Check, Shield, Sparkles, Zap } from 'lucide-react';

type PricingTier = {
  name: string;
  description: string;
  priceMonthly: number;
  badge?: string;
  highlighted?: boolean;
  icon: 'zap' | 'sparkles' | 'shield';
  features: string[];
  cta: {
    label: string;
    href: string;
  };
};

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ');
}

function formatUSD(amount: number) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(amount);
}

function IconForTier({ icon }: { icon: PricingTier['icon'] }) {
  const common = 'h-5 w-5';
  if (icon === 'zap') return <Zap className={common} aria-hidden="true" />;
  if (icon === 'sparkles') return <Sparkles className={common} aria-hidden="true" />;
  return <Shield className={common} aria-hidden="true" />;
}

function Price({ value }: { value: number }) {
  const formatted = useMemo(() => formatUSD(value), [value]);
  return (
    <div className="flex items-end gap-2">
      <span className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
        {formatted}
      </span>
      <span className="pb-1 text-sm text-muted-foreground">/ month</span>
    </div>
  );
}

export default function PricingSection(props: { children?: React.ReactNode } = {}) {
  const [seatCount, setSeatCount] = useState<number>(10);

  const tiers: PricingTier[] = useMemo(
    () => [
      {
        name: 'Starter',
        description: 'For small clinics getting to a clean, compliant workflow.',
        priceMonthly: 39,
        icon: 'zap',
        features: [
          'Smart intake + e-signature forms',
          'Appointment reminders (email/SMS)',
          'Basic analytics dashboard',
          'HIPAA-aligned access controls',
        ],
        cta: { label: 'Start Starter', href: '#contact' },
      },
      {
        name: 'Pro',
        description: 'Best for growing practices that need automation and visibility.',
        priceMonthly: 89,
        badge: 'Most popular',
        highlighted: true,
        icon: 'sparkles',
        features: [
          'Everything in Starter',
          'Automated charting helpers',
          'Referral + follow-up workflows',
          'Custom patient segments',
          'Priority support (same-day)',
        ],
        cta: { label: 'Choose Pro', href: '#contact' },
      },
      {
        name: 'Enterprise',
        description: 'For multi-site organizations with advanced security and controls.',
        priceMonthly: 169,
        icon: 'shield',
        features: [
          'Everything in Pro',
          'SSO + SCIM provisioning',
          'Audit logs + retention policies',
          'Dedicated success manager',
          'Custom BAA + procurement support',
        ],
        cta: { label: 'Talk to sales', href: '#contact' },
      },
    ],
    [],
  );

  const estimatedSavings = useMemo(() => {
    // Lightweight, purely illustrative estimator.
    // Assumption: each seat saves ~25 minutes/week of admin work.
    const minutesPerWeek = seatCount * 25;
    const hoursPerMonth = (minutesPerWeek * 4.33) / 60;
    return Math.max(0, Math.round(hoursPerMonth));
  }, [seatCount]);

  return (
    <section id="pricing" aria-labelledby="pricing-title" className="relative">
      {/* Background accents */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/10 blur-3xl" />
        <div className="absolute -bottom-24 left-[-120px] h-[420px] w-[420px] rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -top-24 right-[-120px] h-[420px] w-[420px] rounded-full bg-secondary/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/50 px-3 py-1 text-xs text-muted-foreground backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Transparent monthly pricing
          </div>
          <h2
            id="pricing-title"
            className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
          >
            Plans that scale with your practice
          </h2>
          <p className="mt-3 text-pretty text-sm leading-6 text-muted-foreground sm:text-base">
            Choose a tier that fits today — upgrade anytime. All plans include secure hosting, fast
            onboarding, and modern tooling designed for healthcare workflows.
          </p>
        </div>

        {/* Pricing grid */}
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {tiers.map((tier) => {
            const highlighted = !!tier.highlighted;
            return (
              <div
                key={tier.name}
                className={cn(
                  'group relative rounded-2xl border bg-card/60 p-6 shadow-sm backdrop-blur transition',
                  'hover:-translate-y-0.5 hover:border-border/80 hover:bg-card/75 hover:shadow-lg',
                  highlighted
                    ? 'border-border/90 ring-1 ring-primary/30'
                    : 'border-border/70',
                )}
              >
                {/* Top glow for highlighted */}
                {highlighted ? (
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-b from-primary/10 via-transparent to-transparent"
                  />
                ) : null}

                <div className="relative flex items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <span
                        className={cn(
                          'inline-flex h-9 w-9 items-center justify-center rounded-xl border',
                          highlighted
                            ? 'border-primary/30 bg-gradient-to-br from-primary/20 to-secondary/20 text-foreground'
                            : 'border-border/80 bg-muted/30 text-foreground',
                        )}
                      >
                        <IconForTier icon={tier.icon} />
                      </span>
                      <h3 className="text-lg font-semibold text-foreground">{tier.name}</h3>
                    </div>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">{tier.description}</p>
                  </div>

                  {tier.badge ? (
                    <div className="shrink-0">
                      <span className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-2.5 py-1 text-xs font-medium text-foreground">
                        {tier.badge}
                      </span>
                    </div>
                  ) : null}
                </div>

                <div className="relative mt-6">
                  <Price value={tier.priceMonthly} />
                  <p className="mt-2 text-xs text-muted-foreground">
                    Billed monthly. Cancel anytime.
                  </p>
                </div>

                <ul className="relative mt-6 space-y-3 text-sm">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-muted-foreground">
                      <span
                        className={cn(
                          'mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full border',
                          highlighted
                            ? 'border-primary/30 bg-primary/10 text-primary'
                            : 'border-border/80 bg-muted/30 text-foreground',
                        )}
                        aria-hidden="true"
                      >
                        <Check className="h-3.5 w-3.5" />
                      </span>
                      <span className="leading-6">{f}</span>
                    </li>
                  ))}
                </ul>

                <div className="relative mt-8">
                  <a
                    href={tier.cta.href}
                    className={cn(
                      'inline-flex w-full items-center justify-center rounded-xl px-4 py-2.5 text-sm font-semibold transition',
                      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
                      highlighted
                        ? 'bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:opacity-95'
                        : 'border border-border/80 bg-muted/30 text-foreground hover:border-border hover:bg-muted/40',
                    )}
                  >
                    {tier.cta.label}
                  </a>
                  <p className="mt-3 text-center text-xs text-muted-foreground">
                    No credit card required for Starter.
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom utility band */}
        <div className="mt-10 rounded-2xl border border-border/70 bg-card/50 p-6 backdrop-blur">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h3 className="text-sm font-semibold text-foreground">
                Estimate time saved with Medora automation
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                A quick, mock estimate based on your team size (no tracking, no backend).
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <label className="flex items-center gap-3 text-sm text-muted-foreground">
                <span className="min-w-[84px]">Team seats</span>
                <input
                  value={seatCount}
                  onChange={(e) => setSeatCount(Math.min(250, Math.max(1, Number(e.target.value) || 1)))}
                  inputMode="numeric"
                  className="h-10 w-28 rounded-xl border border-border/80 bg-background/40 px-3 text-sm text-foreground outline-none transition focus:border-border focus:ring-2 focus:ring-ring"
                  aria-label="Team seats"
                />
              </label>
              <div className="rounded-xl border border-border/80 bg-muted/30 px-4 py-2.5 text-sm">
                <span className="text-muted-foreground">Est. saved:</span>{' '}
                <span className="font-semibold text-foreground">{estimatedSavings} hrs/month</span>
              </div>
            </div>
          </div>
        </div>

        {props.children}
      </div>
    </section>
  );
}

export { PricingSection };
