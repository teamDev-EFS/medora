import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  BadgeCheck,
  Building2,
  CalendarDays,
  Clock,
  Headphones,
  HelpCircle,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Shield,
} from 'lucide-react';

type FormState = {
  name: string;
  email: string;
  company: string;
  role: string;
  topic: 'Sales' | 'Support' | 'Security' | 'Partnerships';
  message: string;
  consent: boolean;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

function classNames(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ');
}

function validateEmail(value: string) {
  const v = value.trim();
  if (!v) return false;
  // Lightweight email validation (frontend-only).
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

export default function Contact(props: { children?: React.ReactNode } = {}) {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    company: '',
    role: '',
    topic: 'Sales',
    message: '',
    consent: true,
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const topicOptions = useMemo<FormState['topic'][]>(
    () => ['Sales', 'Support', 'Security', 'Partnerships'],
    []
  );

  const contactCards = useMemo(
    () => [
      {
        title: 'Sales',
        description: 'Talk to an expert about pilots, pricing, and rollout timelines.',
        icon: <MessageSquare className="h-5 w-5" />,
        meta: 'Typical reply in <24h',
        href: 'mailto:sales@medora.example',
        cta: 'Mail sales',
      },
      {
        title: 'Support',
        description: 'Get help with onboarding, integrations, or day-to-day use.',
        icon: <Headphones className="h-5 w-5" />,
        meta: 'Mon–Fri, 9am–6pm',
        href: 'mailto:support@medora.example',
        cta: 'Contact support',
      },
      {
        title: 'Security',
        description: 'Request our security overview and compliance documentation.',
        icon: <Shield className="h-5 w-5" />,
        meta: 'HIPAA-ready posture',
        href: 'mailto:security@medora.example',
        cta: 'Mail security',
      },
    ],
    []
  );

  const faqs = useMemo(
    () => [
      {
        q: 'Do you support single sign-on (SSO)?',
        a: 'Yes. Medora supports SSO (SAML/OIDC) on the Growth and Enterprise plans with admin controls and audit logs.',
      },
      {
        q: 'Can we run a pilot before committing?',
        a: 'Absolutely. We offer a time-boxed pilot with guided onboarding and success criteria aligned to your workflows.',
      },
      {
        q: 'Is this a backend form? Where does the message go?',
        a: 'This is a frontend-only demo. Submissions are mocked locally—no network request is made.',
      },
    ],
    []
  );

  function setField<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => {
      if (!prev[key]) return prev;
      const next = { ...prev };
      delete next[key];
      return next;
    });
  }

  function validate(current: FormState): FormErrors {
    const next: FormErrors = {};
    if (!current.name.trim()) next.name = 'Please enter your name.';
    if (!validateEmail(current.email)) next.email = 'Please enter a valid email address.';
    if (!current.company.trim()) next.company = 'Please enter your organization.';
    if (!current.message.trim() || current.message.trim().length < 10) {
      next.message = 'Please add a short message (at least 10 characters).';
    }
    if (!current.consent) next.consent = 'Please confirm you agree to be contacted.';
    return next;
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(false);

    const nextErrors = validate(form);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setSubmitting(true);
    // Frontend-only mock delay.
    await new Promise((r) => setTimeout(r, 650));
    setSubmitting(false);
    setSubmitted(true);

    setForm({
      name: '',
      email: '',
      company: '',
      role: '',
      topic: 'Sales',
      message: '',
      consent: true,
    });
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Background effects */}
      <div aria-hidden className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[980px] -translate-x-1/2 rounded-full bg-gradient-to-r from-primary/20 via-secondary/15 to-primary/10 blur-3xl" />
        <div className="absolute top-[45%] left-[-10%] h-[420px] w-[420px] rounded-full bg-secondary/15 blur-3xl" />
        <div className="absolute bottom-[-20%] right-[-10%] h-[520px] w-[520px] rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.18] [background-image:radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:18px_18px]" />
      </div>

      <main className="relative pt-24">
        <header className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-12">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-3 py-1 text-xs text-muted-foreground backdrop-blur">
                <BadgeCheck className="h-4 w-4 text-primary" />
                <span>Contact Medora</span>
              </div>
              <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                Let’s talk about safer, faster clinical workflows.
              </h1>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                Questions about pricing, onboarding, or security? Send a note and we’ll route you to the right
                team. This page is frontend-only with mock submission behavior.
              </p>

              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-border bg-card/40 p-4 backdrop-blur">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Mail className="h-5 w-5" />
                    </span>
                    <div>
                      <div className="text-sm font-semibold">Mail</div>
                      <a
                        className="text-sm text-muted-foreground hover:text-foreground"
                        href="mailto:hello@medora.example"
                      >
                        hello@medora.example
                      </a>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-border bg-card/40 p-4 backdrop-blur">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-secondary/10 text-secondary">
                      <Phone className="h-5 w-5" />
                    </span>
                    <div>
                      <div className="text-sm font-semibold">Phone</div>
                      <a className="text-sm text-muted-foreground hover:text-foreground" href="tel:+15551234567">
                        +1 (555) 123-4567
                      </a>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-border bg-card/40 p-4 backdrop-blur">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <CalendarDays className="h-5 w-5" />
                    </span>
                    <div>
                      <div className="text-sm font-semibold">Schedule</div>
                      <div className="text-sm text-muted-foreground">Book a 20-min demo</div>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-border bg-card/40 p-4 backdrop-blur">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-secondary/10 text-secondary">
                      <MapPin className="h-5 w-5" />
                    </span>
                    <div>
                      <div className="text-sm font-semibold">Office</div>
                      <div className="text-sm text-muted-foreground">Remote-first • US / EU</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link
                  to="/pricing"
                  className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-[0_0_30px_rgba(6,182,212,0.18)] transition-colors hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  View pricing
                </Link>
                <Link
                  to="/features"
                  className="inline-flex items-center justify-center rounded-full border border-border bg-card/40 px-5 py-2.5 text-sm font-semibold text-foreground backdrop-blur transition-colors hover:bg-card/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  Explore features
                </Link>
              </div>
            </div>

            {/* Form */}
            <div className="relative">
              <div className="rounded-3xl border border-border bg-card/50 p-6 backdrop-blur sm:p-8">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h2 className="text-lg font-bold">Send a message</h2>
                    <p className="mt-1 text-sm text-muted-foreground">We’ll get back within one business day.</p>
                  </div>
                  <div className="hidden sm:flex items-center gap-2 rounded-full border border-border bg-background/30 px-3 py-1 text-xs text-muted-foreground">
                    <Clock className="h-4 w-4 text-primary" />
                    <span>Avg response: 3h</span>
                  </div>
                </div>

                {submitted && (
                  <div className="mt-5 rounded-2xl border border-border bg-primary/10 p-4 text-sm">
                    <div className="flex items-start gap-3">
                      <span className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-xl bg-primary/15 text-primary">
                        <BadgeCheck className="h-5 w-5" />
                      </span>
                      <div>
                        <div className="font-semibold">Message sent (mock)</div>
                        <div className="mt-1 text-muted-foreground">
                          Thanks — we’ve captured your message locally for the demo.
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                <form onSubmit={onSubmit} className="mt-6 grid grid-cols-1 gap-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className="text-xs font-semibold text-muted-foreground">Name</label>
                      <input
                        value={form.name}
                        onChange={(e) => setField('name', e.target.value)}
                        className={classNames(
                          'mt-2 w-full rounded-xl border bg-background/40 px-4 py-3 text-sm outline-none transition focus:border-primary/60 focus:ring-2 focus:ring-primary/20',
                          errors.name ? 'border-destructive' : 'border-border'
                        )}
                        placeholder="Dr. Alex Chen"
                        autoComplete="name"
                      />
                      {errors.name && <p className="mt-2 text-xs text-destructive">{errors.name}</p>}
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-muted-foreground">Work email</label>
                      <input
                        value={form.email}
                        onChange={(e) => setField('email', e.target.value)}
                        className={classNames(
                          'mt-2 w-full rounded-xl border bg-background/40 px-4 py-3 text-sm outline-none transition focus:border-primary/60 focus:ring-2 focus:ring-primary/20',
                          errors.email ? 'border-destructive' : 'border-border'
                        )}
                        placeholder="alex@hospital.org"
                        autoComplete="email"
                        inputMode="email"
                      />
                      {errors.email && <p className="mt-2 text-xs text-destructive">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className="text-xs font-semibold text-muted-foreground">Organization</label>
                      <div className="relative">
                        <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                          <Building2 className="h-4 w-4" />
                        </span>
                        <input
                          value={form.company}
                          onChange={(e) => setField('company', e.target.value)}
                          className={classNames(
                            'mt-2 w-full rounded-xl border bg-background/40 py-3 pl-10 pr-4 text-sm outline-none transition focus:border-primary/60 focus:ring-2 focus:ring-primary/20',
                            errors.company ? 'border-destructive' : 'border-border'
                          )}
                          placeholder="Medora Health"
                          autoComplete="organization"
                        />
                      </div>
                      {errors.company && <p className="mt-2 text-xs text-destructive">{errors.company}</p>}
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-muted-foreground">Topic</label>
                      <select
                        value={form.topic}
                        onChange={(e) => setField('topic', e.target.value as FormState['topic'])}
                        className="mt-2 w-full rounded-xl border border-border bg-background/40 px-4 py-3 text-sm outline-none transition focus:border-primary/60 focus:ring-2 focus:ring-primary/20"
                      >
                        {topicOptions.map((t) => (
                          <option key={t} value={t}>
                            {t}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-muted-foreground">Role (optional)</label>
                    <input
                      value={form.role}
                      onChange={(e) => setField('role', e.target.value)}
                      className="mt-2 w-full rounded-xl border border-border bg-background/40 px-4 py-3 text-sm outline-none transition focus:border-primary/60 focus:ring-2 focus:ring-primary/20"
                      placeholder="Clinical Ops, IT, Compliance…"
                      autoComplete="organization-title"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-muted-foreground">Message</label>
                    <textarea
                      value={form.message}
                      onChange={(e) => setField('message', e.target.value)}
                      className={classNames(
                        'mt-2 min-h-[120px] w-full resize-none rounded-xl border bg-background/40 px-4 py-3 text-sm outline-none transition focus:border-primary/60 focus:ring-2 focus:ring-primary/20',
                        errors.message ? 'border-destructive' : 'border-border'
                      )}
                      placeholder="Tell us what you’re trying to solve — integrations, timeline, number of clinics, etc."
                    />
                    {errors.message && <p className="mt-2 text-xs text-destructive">{errors.message}</p>}
                  </div>

                  <div>
                    <label className="flex items-start gap-3 rounded-2xl border border-border bg-background/30 p-4 text-sm">
                      <input
                        type="checkbox"
                        checked={form.consent}
                        onChange={(e) => setField('consent', e.target.checked)}
                        className="mt-1 h-4 w-4 rounded border-border bg-background/50 accent-primary"
                      />
                      <span className="text-muted-foreground">
                        I agree to be contacted by Medora about this request.
                        <span className="block text-xs text-muted-foreground/80">
                          No backend here — this is demo UI only.
                        </span>
                      </span>
                    </label>
                    {errors.consent && <p className="mt-2 text-xs text-destructive">{errors.consent}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className={classNames(
                      'mt-2 inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold text-white shadow-[0_0_30px_rgba(6,182,212,0.18)] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background',
                      submitting ? 'bg-primary/60' : 'bg-primary hover:bg-secondary'
                    )}
                  >
                    {submitting ? 'Sending…' : 'Send message'}
                  </button>

                  <p className="text-xs text-muted-foreground">
                    Prefer email? Write us at{' '}
                    <a className="text-foreground hover:text-primary" href="mailto:hello@medora.example">
                      hello@medora.example
                    </a>
                    .
                  </p>
                </form>
              </div>

              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
                {contactCards.map((card) => (
                  <a
                    key={card.title}
                    href={card.href}
                    className="group rounded-2xl border border-border bg-card/30 p-4 backdrop-blur transition hover:-translate-y-0.5 hover:border-border/80 hover:bg-card/45"
                  >
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary transition group-hover:bg-primary/15">
                        {card.icon}
                      </span>
                      <div>
                        <div className="text-sm font-semibold">{card.title}</div>
                        <div className="text-xs text-muted-foreground">{card.meta}</div>
                      </div>
                    </div>
                    <p className="mt-3 text-sm text-muted-foreground">{card.description}</p>
                    <div className="mt-3 text-xs font-semibold text-foreground group-hover:text-primary">
                      {card.cta} →
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </header>

        <section className="mx-auto mt-16 max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            <div className="rounded-3xl border border-border bg-card/35 p-6 backdrop-blur">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <HelpCircle className="h-5 w-5" />
                </span>
                <h3 className="text-base font-bold">FAQ</h3>
              </div>
              <div className="mt-4 space-y-4">
                {faqs.map((item) => (
                  <div key={item.q} className="rounded-2xl border border-border bg-background/25 p-4">
                    <div className="text-sm font-semibold">{item.q}</div>
                    <div className="mt-1 text-sm text-muted-foreground">{item.a}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-border bg-card/35 p-6 backdrop-blur lg:col-span-2">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-base font-bold">What to expect</h3>
                  <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
                    Medora is designed to feel clinical, calm, and fast — with modern controls for compliance
                    and operational scale.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/25 px-3 py-1 text-xs text-muted-foreground">
                    <Shield className="h-4 w-4 text-primary" />
                    Security-first
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/25 px-3 py-1 text-xs text-muted-foreground">
                    <BadgeCheck className="h-4 w-4 text-primary" />
                    Audit-friendly
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/25 px-3 py-1 text-xs text-muted-foreground">
                    <Clock className="h-4 w-4 text-primary" />
                    Rapid onboarding
                  </span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
                {[
                  {
                    title: 'Fast routing',
                    body: 'Your message lands with the right team — sales, support, or security.',
                  },
                  {
                    title: 'Clear next steps',
                    body: 'We’ll propose a demo, pilot plan, or documentation package as needed.',
                  },
                  {
                    title: 'No pressure',
                    body: 'We keep it simple: value, fit, and a safe path to production.​',
                  },
                ].map((x) => (
                  <div key={x.title} className="rounded-2xl border border-border bg-background/25 p-5">
                    <div className="text-sm font-semibold">{x.title}</div>
                    <div className="mt-2 text-sm text-muted-foreground">{x.body}</div>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-col items-start gap-3 rounded-2xl border border-border bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/5 p-5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <div className="text-sm font-semibold">Need something immediately?</div>
                  <div className="mt-1 text-sm text-muted-foreground">For urgent issues, email support directly.</div>
                </div>
                <a
                  href="mailto:support@medora.example"
                  className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  Mail support
                </a>
              </div>
            </div>
          </div>
        </section>

        <footer className="mx-auto mt-16 max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-border bg-card/30 p-6 backdrop-blur sm:p-8">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="text-sm font-semibold">Medora</div>
                <div className="mt-1 text-sm text-muted-foreground">
                  Modern medical SaaS — built for trust, speed, and clarity.
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <Link
                  to="/"
                  className="rounded-full border border-border bg-background/25 px-4 py-2 text-sm font-semibold text-foreground transition hover:bg-background/35"
                >
                  Home
                </Link>
                <Link
                  to="/pricing"
                  className="rounded-full border border-border bg-background/25 px-4 py-2 text-sm font-semibold text-foreground transition hover:bg-background/35"
                >
                  Pricing
                </Link>
                <Link
                  to="/about"
                  className="rounded-full border border-border bg-background/25 px-4 py-2 text-sm font-semibold text-foreground transition hover:bg-background/35"
                >
                  About
                </Link>
              </div>
            </div>
            <div className="mt-6 border-t border-border pt-6 text-xs text-muted-foreground">
              © {new Date().getFullYear()} Medora. Frontend demo — no backend.
            </div>
          </div>
          {props.children}
        </footer>
      </main>
    </div>
  );
}

export { Contact };
