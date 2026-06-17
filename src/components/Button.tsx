import * as React from 'react';
import { Loader2 } from 'lucide-react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const variantClasses: Record<NonNullable<ButtonProps['variant']>, string> = {
  primary:
    'bg-[#06B6D4] text-white hover:bg-[#6366F1] focus-visible:ring-[#06B6D4]/50 shadow-sm',
  secondary:
    'bg-[#1F2937] text-[#F9FAFB] border border-[#374151] hover:bg-[#374151] focus-visible:ring-[#374151]/50',
  ghost:
    'bg-transparent text-[#9CA3AF] hover:text-[#F9FAFB] hover:bg-[#1F2937]/50 focus-visible:ring-[#1F2937]/50',
  danger:
    'bg-[#EF4444] text-white hover:bg-red-600 focus-visible:ring-[#EF4444]/50 shadow-sm',
};

const sizeClasses: Record<NonNullable<ButtonProps['size']>, string> = {
  sm: 'h-8 px-3 text-xs',
  md: 'h-9 px-4 text-sm',
  lg: 'h-11 px-6 text-sm',
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      isLoading = false,
      leftIcon,
      rightIcon,
      children,
      className = '',
      disabled,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={[
          'inline-flex items-center justify-center gap-2 rounded-md font-medium',
          'transition-[background-color,color,border-color,transform,box-shadow] duration-200 ease-[cubic-bezier(0.22,1,0.36,1)]',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0F1E]',
          'disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0',
          'hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]',
          variantClasses[variant],
          sizeClasses[size],
          className,
        ].join(' ')}
        {...props}
      >
        {isLoading && <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />}
        {!isLoading && leftIcon}
        {children}
        {!isLoading && rightIcon}
      </button>
    );
  }
);

Button.displayName = 'Button';
