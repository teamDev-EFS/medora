import * as React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, helperText, leftIcon, rightIcon, className = '', id, ...props }, ref) => {
    const reactId = React.useId();
    const inputId = id || reactId;

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={inputId}
            className="mb-1.5 block text-sm font-medium text-[#F9FAFB]"
          >
            {label}
          </label>
        )}
        <div className="relative">
          {leftIcon && (
            <div className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#6B7280]">
              {leftIcon}
            </div>
          )}
          <input
            ref={ref}
            id={inputId}
            aria-invalid={error ? true : undefined}
            aria-describedby={error ? `${inputId}-error` : helperText ? `${inputId}-helper` : undefined}
            className={[
              'w-full rounded-md border bg-[#111827] text-[#F9FAFB] placeholder:text-[#6B7280]',
              'transition-colors duration-200 ease-[cubic-bezier(0.22,1,0.36,1)]',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#06B6D4]/50 focus-visible:border-[#06B6D4]',
              'disabled:cursor-not-allowed disabled:opacity-50',
              error
                ? 'border-[#EF4444] focus-visible:ring-[#EF4444]/30 focus-visible:border-[#EF4444]'
                : 'border-[#1F2937] hover:border-[#374151]',
              leftIcon ? 'pl-10' : 'pl-3',
              rightIcon ? 'pr-10' : 'pr-3',
              'py-2 text-sm',
              className,
            ].join(' ')}
            {...props}
          />
          {rightIcon && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6B7280]">
              {rightIcon}
            </div>
          )}
        </div>
        {error && <p id={`${inputId}-error`} className="mt-1.5 text-xs text-[#EF4444]">{error}</p>}
        {helperText && !error && (
          <p id={`${inputId}-helper`} className="mt-1.5 text-xs text-[#6B7280]">{helperText}</p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
