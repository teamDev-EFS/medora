import React from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, className, ...props }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 400, damping: 28 }}
      className={clsx(
        'px-5 py-2 rounded-lg font-semibold transition-all duration-200 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2',
        variant === 'primary'
          ? 'bg-primary text-white shadow hover:bg-secondary'
          : 'bg-surface-2 text-primary border border-primary hover:bg-primary/10',
        className
      )}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;
