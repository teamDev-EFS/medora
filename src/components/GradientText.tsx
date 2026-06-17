import React from 'react';

const GradientText: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <span
    className={`bg-gradient-to-tr from-cyan-400 to-purple-500 bg-clip-text text-transparent ${className}`}
  >
    {children}
  </span>
);

export default GradientText;
