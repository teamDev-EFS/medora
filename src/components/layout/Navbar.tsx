import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import clsx from 'clsx';

const navLinks = [
  { label: 'Features', to: '/features' },
  { label: 'How it works', to: '/how-it-works' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'Testimonials', to: '/testimonials' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 w-full z-40 backdrop-blur-xl bg-background/80 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-xl font-bold text-primary">
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-xl bg-primary/10">
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><rect width="24" height="24" rx="6" fill="#06B6D4"/><path d="M12 6v12M6 12h12" stroke="white" strokeWidth="2.2" strokeLinecap="round"/></svg>
          </span>
          Medora
        </Link>
        <div className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={clsx(
                'px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-150',
                location.pathname === link.to
                  ? 'text-primary bg-primary/10'
                  : 'text-textSecondary hover:text-primary hover:bg-primary/5'
              )}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/pricing">
            <button className="ml-4 px-5 py-2 rounded-full font-semibold bg-primary text-white shadow-[0_0_30px_rgba(6,182,212,0.15)] hover:bg-secondary transition-all duration-200 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">
              Get Started
            </button>
          </Link>
        </div>
        <button
          className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-primary hover:bg-primary/10 focus:outline-none"
          aria-label="Open menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
        {/* Mobile menu */}
        {open && (
          <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex flex-col">
            <div className="flex items-center justify-between px-6 h-16">
              <Link to="/" className="flex items-center gap-2 text-xl font-bold text-primary" onClick={() => setOpen(false)}>
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-xl bg-primary/10">
                  <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><rect width="24" height="24" rx="6" fill="#06B6D4"/><path d="M12 6v12M6 12h12" stroke="white" strokeWidth="2.2" strokeLinecap="round"/></svg>
                </span>
                Medora
              </Link>
              <button className="p-2 rounded-lg text-primary hover:bg-primary/10" onClick={() => setOpen(false)} aria-label="X menu">
                <X size={24} />
              </button>
            </div>
            <div className="flex flex-col gap-2 px-6 mt-4">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={clsx(
                    'block px-3 py-3 rounded-lg text-base font-medium transition-colors duration-150',
                    location.pathname === link.to
                      ? 'text-primary bg-primary/10'
                      : 'text-textSecondary hover:text-primary hover:bg-primary/5'
                  )}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link to="/pricing" onClick={() => setOpen(false)}>
                <button className="w-full mt-4 px-5 py-3 rounded-full font-semibold bg-primary text-white shadow-[0_0_30px_rgba(6,182,212,0.15)] hover:bg-secondary transition-all duration-200 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">
                  Get Started
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
