import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-surface-2 border-t border-border text-textSecondary py-12 mt-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2 text-xl font-bold text-primary mb-2">
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-xl bg-primary/10">
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><rect width="24" height="24" rx="6" fill="#06B6D4"/><path d="M12 6v12M6 12h12" stroke="white" strokeWidth="2.2" strokeLinecap="round"/></svg>
            </span>
            Medora
          </div>
          <p className="text-sm text-textTertiary max-w-xs mt-2">Modern SaaS for medical practices. Streamline, secure, and grow your clinic with Medora.</p>
        </div>
        <div>
          <div className="font-semibold text-textPrimary mb-2 text-sm">Product</div>
          <ul className="space-y-1 text-sm">
            <li><a href="/features" className="hover:text-primary transition-colors">Features</a></li>
            <li><a href="/pricing" className="hover:text-primary transition-colors">Pricing</a></li>
            <li><a href="/how-it-works" className="hover:text-primary transition-colors">How it works</a></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold text-textPrimary mb-2 text-sm">Company</div>
          <ul className="space-y-1 text-sm">
            <li><a href="/about" className="hover:text-primary transition-colors">About</a></li>
            <li><a href="/testimonials" className="hover:text-primary transition-colors">Testimonials</a></li>
            <li><a href="/contact" className="hover:text-primary transition-colors">Contact</a></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold text-textPrimary mb-2 text-sm">Legal</div>
          <ul className="space-y-1 text-sm">
            <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
          </ul>
        </div>
      </div>
      <div className="mt-10 text-center text-xs text-textTertiary">
        &copy; {new Date().getFullYear()} Medora. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
