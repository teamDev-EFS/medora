import React from 'react';
import clsx from 'clsx';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

const Input: React.FC<InputProps> = ({ label, error, className, ...props }) => (
  <div className="mb-4">
    <label className="block text-xs font-medium text-textTertiary mb-1" htmlFor={props.id || props.name}>{label}</label>
    <input
      className={clsx(
        'w-full border border-border rounded-lg px-3 py-2 bg-surface-2 text-textPrimary placeholder:text-textTertiary focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all',
        error && 'border-danger',
        className
      )}
      {...props}
    />
    {error && <div className="text-danger text-xs mt-1">{error}</div>}
  </div>
);

export default Input;
