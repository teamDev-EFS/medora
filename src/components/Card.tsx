import React from 'react';
import clsx from 'clsx';

export type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  className?: string;
  children: React.ReactNode;
};

const Card: React.FC<CardProps> = ({ className = '', children, ...props }) => {
  return (
    <div
      className={clsx(
        'rounded-2xl bg-[hsl(var(--card))] border border-[hsl(var(--border))] shadow-sm transition-all',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
