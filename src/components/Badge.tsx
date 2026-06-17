import React from 'react';
import clsx from 'clsx';

interface BadgeProps {
  children: React.ReactNode;
  color?: 'success' | 'warning' | 'danger' | 'info' | 'neutral';
  className?: string;
}

const colorMap = {
  success: 'bg-emerald-100 text-emerald-700',
  warning: 'bg-amber-100 text-amber-700',
  danger: 'bg-red-100 text-red-700',
  info: 'bg-blue-100 text-blue-700',
  neutral: 'bg-slate-100 text-slate-600',
};

const Badge: React.FC<BadgeProps> = ({ children, color = 'neutral', className }) => (
  <span className={clsx('rounded-full px-2.5 py-0.5 text-xs font-medium', colorMap[color], className)}>
    {children}
  </span>
);

export default Badge;
