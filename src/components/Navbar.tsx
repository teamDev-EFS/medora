import { Link } from 'react-router-dom';
import { Activity, ArrowRight } from 'lucide-react';

const navLinks = [
  { name: 'Features', to: '#features' },
  { name: 'How it works', to: '#how-it-works' },
  { name: 'Pricing', to: '#pricing' },
  { name: 'Testimonials', to: '#testimonials' },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-30 w-full bg-[hsl(var(--background))]/70 backdrop-blur-xl border-b border-[hsl(var(--border))]">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 h-16">
        <Link to="/" className="group flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500 to-purple-500">
            <Activity className="w-4 h-4 text-white" />
          </div>
          <span className="font-bold text-lg tracking-tight text-[hsl(var(--foreground))]">Medora</span>
        </Link>
        <ul className="hidden md:flex items-center gap-7">
          {navLinks.map(link => (
            <li key={link.name}>
              <a
                href={link.to}
                className="text-sm text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] transition-colors font-medium"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          <a
            href="#login"
            className="hidden sm:inline-block text-sm font-medium text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] transition-colors"
          >
            Sign in
          </a>
          <a
            href="#pricing"
            className="group inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 px-4 py-1.5 text-sm font-semibold text-white shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:brightness-110 active:scale-[0.98] transition-all"
          >
            Get started
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      </nav>
    </header>
  );
}
