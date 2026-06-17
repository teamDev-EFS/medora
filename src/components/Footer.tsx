import React from 'react';
import { Activity, Twitter, Linkedin, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 border-t border-[hsl(var(--border))]">
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-2 md:grid-cols-5 gap-8">
        <div className="col-span-2">
          <div className="flex items-center gap-2 mb-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500 to-purple-500">
              <Activity className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-lg text-white">Medora</span>
          </div>
          <p className="text-sm leading-relaxed max-w-xs">
            The modern operating system for medical practices. HIPAA-grade, cloud-native, clinician-first.
          </p>
          <div className="mt-5 flex gap-3">
            <a href="#twitter" aria-label="Twitter" className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400">
              <Twitter className="w-4 h-4" />
            </a>
            <a href="#linkedin" aria-label="LinkedIn" className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="#github" aria-label="GitHub" className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400">
              <Github className="w-4 h-4" />
            </a>
          </div>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-white mb-3">Product</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
            <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
            <li><a href="#changelog" className="hover:text-white transition-colors">Changelog</a></li>
            <li><a href="#integrations" className="hover:text-white transition-colors">Integrations</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-white mb-3">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
            <li><a href="#customers" className="hover:text-white transition-colors">Customers</a></li>
            <li><a href="#careers" className="hover:text-white transition-colors">Careers</a></li>
            <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-white mb-3">Legal</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#privacy" className="hover:text-white transition-colors">Privacy</a></li>
            <li><a href="#terms" className="hover:text-white transition-colors">Terms</a></li>
            <li><a href="#hipaa" className="hover:text-white transition-colors">HIPAA</a></li>
            <li><a href="#security" className="hover:text-white transition-colors">Security</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <span>© {new Date().getFullYear()} Medora Health Inc. All rights reserved.</span>
          <span>Made for clinicians, by clinicians.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
