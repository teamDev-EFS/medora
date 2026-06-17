import { Lucide, Stethoscope, CalendarClock, ShieldCheck, BarChart3, Users, Cloud } from 'lucide-react';

export type Feature = {
  icon: Lucide;
  title: string;
  description: string;
};

const features: Feature[] = [
  {
    icon: Stethoscope,
    title: 'Clinical efficiency',
    description: 'Streamline patient workflows and reduce admin time with intuitive, fast charting and scheduling.',
  },
  {
    icon: CalendarClock,
    title: 'Smart scheduling',
    description: 'Automated reminders, online bookings, and calendar sync keep your practice running smoothly.',
  },
  {
    icon: ShieldCheck,
    title: 'HIPAA-grade security',
    description: 'End-to-end encryption and robust access controls keep patient data safe and compliant.',
  },
  {
    icon: BarChart3,
    title: 'Practice analytics',
    description: 'Real-time dashboards on revenue, no-shows, and patient outcomes — no spreadsheet exports needed.',
  },
  {
    icon: Users,
    title: 'Team collaboration',
    description: 'Role-based access, shared notes, and internal messaging built for clinical teams.',
  },
  {
    icon: Cloud,
    title: 'Cloud-native',
    description: 'Access charts from any device. Automatic backups, 99.99% uptime, zero on-prem hardware.',
  },
];

export { features };
export default features;
