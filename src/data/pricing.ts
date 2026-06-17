export type PricingTier = {
  name: string;
  price: string;
  features: string[];
  cta: string;
  featured?: boolean;
};

export const pricingTiers: PricingTier[] = [
  {
    name: 'Starter',
    price: '29',
    features: [
      'Unlimited patients',
      'Basic scheduling',
      'Secure messaging',
      'Email support',
    ],
    cta: 'Start Free',
  },
  {
    name: 'Professional',
    price: '69',
    features: [
      'Everything in Starter',
      'Advanced analytics',
      'Team collaboration',
      'Priority support',
    ],
    cta: 'Get Started',
    featured: true,
  },
  {
    name: 'Enterprise',
    price: '149',
    features: [
      'Everything in Professional',
      'Custom integrations',
      'Dedicated onboarding',
      '24/7 support',
    ],
    cta: 'Contact Sales',
  },
];
