import React from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className }) => {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.02, boxShadow: '0 20px 40px -12px rgba(0,0,0,0.25)' }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 400, damping: 28 }}
      className={clsx(
        'rounded-2xl border border-border bg-surface-1 shadow-md p-6 transition-all duration-300',
        className
      )}
    >
      {children}
    </motion.div>
  );
};

export default Card;
