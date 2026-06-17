export interface PricingTier {
  id: string;
  name: string;
  price: string;
  description: string;
  features: string[];
  bestValue?: boolean;
}

export const pricingTiers: PricingTier[] = [
  {
    id: 'starter',
    name: 'Starter',
    price: '$49/mo',
    description: 'For solo practitioners and small clinics getting started.',
    features: [
      'Up to 2 providers',
      'Patient management',
      'Basic scheduling',
      'Email support',
    ],
  },
  {
    id: 'growth',
    name: 'Growth',
    price: '$129/mo',
    description: 'For growing practices needing advanced automation.',
    features: [
      'Up to 10 providers',
      'Automated reminders',
      'Analytics dashboard',
      'Priority support',
    ],
    bestValue: true,
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: 'Custom',
    description: 'For large clinics and healthcare networks.',
    features: [
      'Unlimited providers',
      'Custom integrations',
      'Dedicated account manager',
      '24/7 support',
    ],
  },
];
