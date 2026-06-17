import * as React from 'react';

export type BadgeVariant = 'default' | 'success' | 'warning' | 'danger' | 'info' | 'neutral';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  children: React.ReactNode;
}

const variantClasses: Record<BadgeVariant, string> = {
  default: 'bg-[#06B6D4]/10 text-[#06B6D4] border-[#06B6D4]/20',
  success: 'bg-[#10B981]/10 text-[#10B981] border-[#10B981]/20',
  warning: 'bg-[#F59E0B]/10 text-[#F59E0B] border-[#F59E0B]/20',
  danger: 'bg-[#EF4444]/10 text-[#EF4444] border-[#EF4444]/20',
  info: 'bg-[#6366F1]/10 text-[#6366F1] border-[#6366F1]/20',
  neutral: 'bg-[#1F2937] text-[#9CA3AF] border-[#374151]',
};

export const Badge: React.FC<BadgeProps> = ({ variant = 'default', children, className = '', ...props }) => {
  return (
    <span
      className={[
        'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium',
        'transition-colors duration-200',
        variantClasses[variant],
        className,
      ].join(' ')}
      {...props}
    >
      {children}
    </span>
  );
};
