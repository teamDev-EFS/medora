export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  quote: string;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Dr. Sarah Mitchell',
    role: 'Family Physician, Oakwood Clinic',
    avatar: 'https://i.pravatar.cc/150?img=12',
    quote: 'Medora has transformed how we manage our clinic. The automation features save us hours every week.',
  },
  {
    id: '2',
    name: 'Dr. Ravi Patel',
    role: 'Pediatrician, Sunrise Pediatrics',
    avatar: 'https://i.pravatar.cc/150?img=23',
    quote: 'The onboarding was seamless, and the support team is outstanding. Highly recommended for any practice.',
  },
  {
    id: '3',
    name: 'Dr. Emily Chen',
    role: 'Dermatologist, City Skin Center',
    avatar: 'https://i.pravatar.cc/150?img=34',
    quote: 'Our patients love the appointment reminders, and we love the peace of mind from Medora’s security.',
  },
];
