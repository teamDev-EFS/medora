export interface Feature {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export const features: Feature[] = [
  {
    id: '1',
    icon: 'Stethoscope',
    title: 'Patient Management',
    description: 'Centralize patient records, appointments, and notes in a secure, intuitive dashboard.',
  },
  {
    id: '2',
    icon: 'CalendarCheck2',
    title: 'Automated Scheduling',
    description: 'Reduce no-shows with smart reminders and seamless calendar integration for your team.',
  },
  {
    id: '3',
    icon: 'ShieldCheck',
    title: 'HIPAA-Grade Security',
    description: 'All data is encrypted at rest and in transit, meeting the highest compliance standards.',
  },
];
