export type Testimonial = {
  name: string;
  role: string;
  quote: string;
  avatar: string;
};

export const testimonials: Testimonial[] = [
  {
    name: 'Dr. Emily Carter',
    role: 'Family Physician · Carter Family Health',
    quote:
      'Medora cut our charting time by 40% in the first month. My staff finally stopped complaining about the EHR — that alone was worth the switch.',
    avatar: 'https://i.pravatar.cc/120?img=47',
  },
  {
    name: 'Dr. Raj Patel',
    role: 'Pediatrician · Bright Kids Clinic',
    quote:
      'Scheduling, charting, and billing in one place. I see 6 more patients a day without feeling rushed. It just works.',
    avatar: 'https://i.pravatar.cc/120?img=12',
  },
  {
    name: 'Dr. Lisa Nguyen',
    role: 'Owner · Nguyen Internal Medicine',
    quote:
      'Onboarding took two days, not two months. The analytics dashboard alone helped us recover $48K in missed billing last quarter.',
    avatar: 'https://i.pravatar.cc/120?img=32',
  },
];
