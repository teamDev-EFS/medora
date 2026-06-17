import React from 'react';

export type IconProps = React.SVGProps<SVGSVGElement> & {
  name: 'stethoscope' | 'calendar' | 'shield' | 'chart' | 'users' | 'cloud';
  size?: number;
  className?: string;
};

const icons = {
  stethoscope: (
    <path
      d="M12 2v6a4 4 0 0 1-8 0V2m8 0h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2m-8 0H2a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h2m8 0a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  calendar: (
    <path
      d="M3 8h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm2 4v2m10-2v2"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  shield: (
    <path
      d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  chart: (
    <path
      d="M3 17v-2a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v2M16 3.13a4 4 0 0 1 0 7.75M8 3.13a4 4 0 0 0 0 7.75"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  users: (
    <path
      d="M17 21v-2a4 4 0 0 0-3-3.87M9 21v-2a4 4 0 0 1 3-3.87M7 7a4 4 0 1 1 8 0 4 4 0 0 1-8 0z"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  cloud: (
    <path
      d="M17.5 19a4.5 4.5 0 0 0 0-9 6.5 6.5 0 0 0-13 0A4.5 4.5 0 0 0 6.5 19h11z"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
};

const Icon: React.FC<IconProps> = ({ name, size = 28, className = '', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    {...props}
  >
    {icons[name]}
  </svg>
);

export default Icon;
