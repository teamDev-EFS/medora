import { Lucide, UserPlus, Settings2, HeartPulse } from 'lucide-react';

export type HowItWorksStep = {
  icon: Lucide;
  title: string;
  description: string;
  step: number;
};

const howItWorks: HowItWorksStep[] = [
  {
    step: 1,
    icon: UserPlus,
    title: 'Sign up instantly',
    description: 'Create your Medora account in seconds. No credit card required, 14-day free trial.',
  },
  {
    step: 2,
    icon: Settings2,
    title: 'Set up your practice',
    description: 'Import patient data, customize your schedule, and invite your team in under 10 minutes.',
  },
  {
    step: 3,
    icon: HeartPulse,
    title: 'Deliver care',
    description: 'Start seeing patients, charting, and managing your practice with confidence and ease.',
  },
];

export { howItWorks };
export default howItWorks;
