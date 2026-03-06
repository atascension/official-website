import React, { useState, useEffect } from 'react';
import { useInView } from '../hooks/useInView';
import { Page } from '../App';

interface WebinarLandingProps {
  onNavigate: (page: Page) => void;
}

// ─── Shared Background ────────────────────────────────────────────────────────
// Applied to every section so the entire page is unified navy + gold grid.

const BG_GLOW = (
  <div
    aria-hidden="true"
    className="pointer-events-none absolute inset-0 opacity-[0.04]"
    style={{
      backgroundImage:
        'linear-gradient(#e0b344 1px, transparent 1px), linear-gradient(90deg, #e0b344 1px, transparent 1px)',
      backgroundSize: '60px 60px',
    }}
  />
);

// ─── Countdown Logic ──────────────────────────────────────────────────────────

const WEBINAR_DATE = new Date('2026-03-18T17:00:00Z'); // 12pm ET / 5pm UTC

function getTimeLeft() {
  const diff = WEBINAR_DATE.getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0, ended: true };
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff % 86400000) / 3600000),
    minutes: Math.floor((diff % 3600000) / 60000),
    seconds: Math.floor((diff % 60000) / 1000),
    ended: false,
  };
}

// ─── Countdown Unit Card ──────────────────────────────────────────────────────

const CountdownCard: React.FC<{ value: number; label: string }> = ({ value, label }) => (
  <div className="flex flex-col items-center">
    <div className="w-14 h-14 sm:w-20 sm:h-20 md:w-28 md:h-28 rounded-2xl bg-white/8 border border-brand-gold/30 flex items-center justify-center backdrop-blur-sm">
      <span className="font-heading text-2xl sm:text-3xl md:text-5xl text-brand-gold font-semibold tabular-nums leading-none">
        {String(value).padStart(2, '0')}
      </span>
    </div>
    <span className="mt-2 sm:mt-3 text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-white">
      {label}
    </span>
  </div>
);

// ─── Hero + Countdown Section ─────────────────────────────────────────────────

const HeroSection: React.FC = () => {
  const { ref, isVisible } = useInView({ threshold: 0.1 });
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const id = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      ref={ref}
      className="relative min-h-screen bg-brand-navy flex flex-col items-center justify-center pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden"
    >
      {BG_GLOW}

      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 text-center w-full">

        {/* Live badge */}
        <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-gold/40 bg-brand-gold/10 mb-8">
            <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse" />
            <span className="text-xs font-semibold text-brand-gold tracking-widest uppercase">
              Free Live Webinar - March 18, 2026
            </span>
          </div>
        </div>

        {/* Headline */}
        <h1
          className={`font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-semibold tracking-tight leading-[1.05] mb-6 transition-all duration-700 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          The <span className="text-brand-gold">5-Step AI</span>
          <br />Website Building
          <br />Framework
        </h1>

        {/* Subheadline */}
        <p
          className={`text-lg sm:text-xl text-white max-w-2xl mx-auto mb-12 leading-relaxed transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          Learn how to build professional, client-ready websites using AI, faster than ever before.
          Join us live and walk away with a repeatable system you can use immediately.
        </p>

        {/* Countdown */}
        <div className={`transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          {timeLeft.ended ? (
            <p className="text-brand-gold font-heading text-2xl">The webinar has started!</p>
          ) : (
            <div className="flex items-start justify-center gap-1.5 sm:gap-4 md:gap-8">
              <CountdownCard value={timeLeft.days} label="Days" />
              <div className="text-brand-gold/40 font-heading text-2xl sm:text-4xl md:text-5xl mt-3 sm:mt-5">:</div>
              <CountdownCard value={timeLeft.hours} label="Hours" />
              <div className="text-brand-gold/40 font-heading text-2xl sm:text-4xl md:text-5xl mt-3 sm:mt-5">:</div>
              <CountdownCard value={timeLeft.minutes} label="Minutes" />
              <div className="text-brand-gold/40 font-heading text-2xl sm:text-4xl md:text-5xl mt-3 sm:mt-5">:</div>
              <CountdownCard value={timeLeft.seconds} label="Seconds" />
            </div>
          )}
        </div>

        {/* CTA */}
        <div className={`mt-12 transition-all duration-700 delay-[400ms] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <a
            href="#register"
            className="inline-flex items-center gap-3 px-8 py-4 bg-brand-gold text-brand-navy font-heading text-base font-semibold rounded-full hover:brightness-105 transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-brand-gold focus:ring-offset-2 focus:ring-offset-brand-navy"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('register')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
          >
            Reserve Your Free Spot
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <p className="mt-4 text-xs text-white/60 tracking-wide">100% Free &bull; No credit card required</p>
        </div>
      </div>
    </section>
  );
};

// ─── What You'll Learn ────────────────────────────────────────────────────────

const STEPS = [
  {
    number: '01',
    title: 'Define Your Website\'s Vision',
    description:
      'Get crystal clear on who your site is for, what it needs to say, and what you want visitors to do. A sharp vision is what separates a website that works from one that just exists.',
  },
  {
    number: '02',
    title: 'Turn That Vision Into an AI Prompt',
    description:
      'Learn how to translate your ideas into a prompt that tells AI exactly what to build. The right prompt is the difference between a generic template and a site that actually sounds like your business.',
  },
  {
    number: '03',
    title: 'Generate the First Version of Your Website',
    description:
      'Watch your website come to life in seconds: real pages, real copy, real design. You\'ll have a working first draft before most people finish writing a brief.',
  },
  {
    number: '04',
    title: 'Review, Refine, and Iterate Section by Section',
    description:
      'Go through your site piece by piece and dial it in. You\'ll know exactly what to adjust and how to guide AI to get it right. No guessing, no wasted revisions.',
  },
  {
    number: '05',
    title: 'Deploy Your Website',
    description:
      'Take your finished site live with a few clicks. Professional, polished, and ready to bring in customers, without touching a line of code.',
  },
];

const WhatYoullLearnSection: React.FC = () => {
  const { ref, isVisible } = useInView({ threshold: 0.1 });

  return (
    <section ref={ref} className="relative py-20 md:py-28 bg-brand-navy overflow-hidden">
      {BG_GLOW}
      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12">

        {/* Heading */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-gold/30 bg-brand-gold/10 mb-5">
            <span className="text-xs font-semibold text-brand-gold tracking-wider uppercase">
              The 5-Step Framework
            </span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-white font-semibold tracking-tight leading-tight">
            From Idea to Live Website:<br className="hidden sm:block" /> Five Steps, Zero Code
          </h2>
          <p className="mt-4 text-base sm:text-lg text-white max-w-xl mx-auto leading-relaxed">
            No developers. No design tools. No months of back-and-forth. Just a clear system that takes you from blank page to live site, and we walk through every step together.
          </p>
        </div>

        {/* Steps */}
        <div className="flex flex-col gap-4">
          {STEPS.map((step, i) => (
            <div
              key={step.number}
              className={`group flex gap-6 items-start bg-white/6 border border-white/10 hover:border-brand-gold/30 rounded-2xl p-6 md:p-8 backdrop-blur-sm transition-all duration-300 cursor-default ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: isVisible ? `${i * 80}ms` : '0ms', transitionProperty: 'opacity, transform, border-color' }}
            >
              <span className="font-heading text-4xl md:text-5xl text-brand-gold font-semibold leading-none select-none shrink-0 mt-1 transition-colors duration-300">
                {step.number}
              </span>
              <div>
                <h3 className="font-heading text-lg md:text-xl text-white font-semibold mb-2">
                  {step.title}
                </h3>
                <p className="text-white text-sm md:text-base leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── Host Section ─────────────────────────────────────────────────────────────

const HostSection: React.FC = () => {
  const { ref, isVisible } = useInView({ threshold: 0.1 });

  return (
    <section ref={ref} className="relative py-20 md:py-28 bg-brand-navy overflow-hidden">
      {BG_GLOW}
      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12">
        <div
          className={`flex flex-col md:flex-row items-center gap-10 md:gap-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          {/* Profile photo */}
          <div className="shrink-0">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-3xl border-2 border-brand-gray/50 overflow-hidden bg-white">
              <img
                src={`${import.meta.env.BASE_URL}img/headshot.svg`}
                alt="Robert Morgan"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Copy */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-gold/30 bg-brand-gold/10 mb-5">
              <span className="text-xs font-semibold text-brand-gold tracking-wider uppercase">
                Hosted By
              </span>
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl text-white font-semibold mb-4 leading-tight">
              Robert Morgan
            </h2>
            <p className="text-white text-sm md:text-base leading-relaxed max-w-lg">
              Robert is an entrepreneur with a degree in Information Technology from the University of South Florida, giving him a natural edge when it comes to picking up new tools and technologies. His mission is to equip this generation with the knowledge and skills to confidently adapt and thrive in today's rapidly evolving AI landscape.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {['AI Strategy', 'Web Development', 'Business Systems', 'Automation'].map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-semibold px-3 py-1.5 rounded-full border border-brand-gold/40 text-brand-gold bg-brand-gold/10"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ─── Register CTA Section ─────────────────────────────────────────────────────

const RegisterSection: React.FC = () => {
  const { ref, isVisible } = useInView({ threshold: 0.1 });

  return (
    <section id="register" ref={ref} className="relative py-20 md:py-28 bg-brand-navy overflow-hidden">
      {BG_GLOW}

      <div className={`relative z-10 max-w-2xl mx-auto px-6 md:px-12 text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-gold/40 bg-brand-gold/10 mb-8">
          <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse" />
          <span className="text-xs font-semibold text-brand-gold tracking-widest uppercase">
            Free Registration - March 18, 2026
          </span>
        </div>

        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-white font-semibold leading-tight mb-6">
          Ready to Build Smarter?
        </h2>
        <p className="text-white text-base sm:text-lg leading-relaxed mb-10">
          Secure your free spot today. Seats are limited, so don't miss your chance to get the
          complete 5-step system live.
        </p>

        {/* Placeholder CTA - swap href with your real registration link */}
        <a
          href="#"
          aria-label="Reserve your free webinar spot (registration link coming soon)"
          className="inline-flex items-center gap-3 px-8 py-4 bg-brand-gold text-brand-navy font-heading text-base font-semibold rounded-full hover:brightness-105 transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-brand-gold focus:ring-offset-2 focus:ring-offset-brand-navy"
          onClick={(e) => e.preventDefault()}
        >
          Reserve Your Free Spot
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
        <p className="mt-4 text-xs text-white/60 tracking-wide">100% Free &bull; No credit card required</p>
      </div>
    </section>
  );
};

// ─── Page Footer ──────────────────────────────────────────────────────────────

const WebinarFooter: React.FC<{ onNavigate: (page: Page) => void }> = ({ onNavigate }) => (
  <footer className="relative bg-brand-navy py-10 overflow-hidden">
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 opacity-[0.03]"
      style={{
        backgroundImage:
          'linear-gradient(#e0b344 1px, transparent 1px), linear-gradient(90deg, #e0b344 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }}
    />
    <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
      <button
        onClick={() => { onNavigate('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
        className="cursor-pointer focus:outline-none"
      >
        <img
          src={`${import.meta.env.BASE_URL}img/Brand-Logo-With-title.svg`}
          alt="Architech Ascension"
          className="h-10 w-auto object-contain opacity-40 hover:opacity-80 transition-opacity duration-200 brightness-0 invert"
        />
      </button>
      <p className="text-xs text-white/60 text-center md:text-center">
        &copy; {new Date().getFullYear()} Architech Ascension. All rights reserved.
      </p>
      <div className="flex items-center gap-5">
        {(['privacy', 'terms', 'refund'] as Page[]).map((p) => (
          <button
            key={p}
            onClick={() => onNavigate(p)}
            className="text-xs text-white/60 hover:text-white transition-colors duration-200 capitalize cursor-pointer focus:outline-none"
          >
            {p === 'refund' ? 'Refund Policy' : p.charAt(0).toUpperCase() + p.slice(1)}
          </button>
        ))}
      </div>
    </div>
  </footer>
);

// ─── Main Export ──────────────────────────────────────────────────────────────

export const WebinarLanding: React.FC<WebinarLandingProps> = ({ onNavigate }) => (
  <div className="min-h-screen flex flex-col">
    <HeroSection />
    <WhatYoullLearnSection />
    <HostSection />
    <RegisterSection />
    <WebinarFooter onNavigate={onNavigate} />
  </div>
);
