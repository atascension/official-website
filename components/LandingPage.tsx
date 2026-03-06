import React, { useEffect, useRef } from 'react';
import { useInView } from '../hooks/useInView';
import { Page } from '../App';

const SENJA_SCRIPT = 'https://widget.senja.io/widget/bc2b7672-a088-4e54-9a97-3f45975894df/platform.js';
const SENJA_WALL_ID = 'bc2b7672-a088-4e54-9a97-3f45975894df';

interface LandingPageProps {
  onNavigate: (page: Page) => void;
}

const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

// ─── Hero ────────────────────────────────────────────────────────────────────

const HeroSection: React.FC = () => {
  const { ref, isVisible } = useInView({ threshold: 0.1 });

  return (
    <section
      id="hero"
      ref={ref}
      className="min-h-screen bg-gradient-to-b from-[#f5f5f5] via-white to-[#f5f5f5] flex items-center pt-28 pb-20 md:pt-36 md:pb-28"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left - Copy */}
          <div>
            <div
              className={`transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: isVisible ? '0ms' : '0ms' }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-navy/5 border border-brand-navy/10 mb-6">
                <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse"></span>
                <span className="text-xs font-semibold text-brand-navy tracking-wider uppercase">
                  Web Developer &amp; AI Educator
                </span>
              </div>
            </div>

            <h1
              className={`font-heading text-4xl sm:text-5xl md:text-6xl text-brand-navy font-semibold tracking-tight leading-[1.1] mb-6 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: isVisible ? '100ms' : '0ms' }}
            >
              Establishing Your Online <span className="text-brand-gold">Presence</span>{' '}
              While Equipping You for the <span className="text-brand-gold">Future</span>
            </h1>

            <p
              className={`font-sans text-lg md:text-xl text-brand-navy/70 leading-relaxed mb-10 max-w-lg transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: isVisible ? '220ms' : '0ms' }}
            >
              Whether you need a professional website built for your business or you're ready to learn how to use AI as an entrepreneur, I offer hands-on help that gets real results. Let's start with a free call.
            </p>

            <div
              className={`transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: isVisible ? '340ms' : '0ms' }}
            >
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => scrollToSection('connect')}
                  className="px-8 py-4 bg-brand-navy text-white rounded-full font-semibold shadow-premium hover:shadow-premium-hover hover:bg-opacity-95 transition-all transform hover:-translate-y-1 text-center inline-flex items-center justify-center gap-2"
                >
                  Book My Free Strategy Call
                  <svg width="14" height="14" fill="none" viewBox="0 0 14 14"><path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </button>
                <button
                  onClick={() => scrollToSection('solutions')}
                  className="px-8 py-4 bg-transparent border border-brand-navy/20 text-brand-navy rounded-full font-medium hover:bg-brand-navy/5 transition-colors text-center inline-flex items-center justify-center gap-2"
                >
                  See What I Offer
                  <svg width="13" height="13" fill="none" viewBox="0 0 13 13"><path d="M1 6.5h11M6.5 1l5.5 5.5-5.5 5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </button>
              </div>
              <p className="font-sans text-xs text-brand-navy/45 mt-4 tracking-wide">
                No pitch &nbsp;·&nbsp; 30 minutes &nbsp;·&nbsp; Completely free
              </p>
            </div>
          </div>

          {/* Right - Visual */}
          <div
            className={`transition-all duration-700 delay-200 relative flex justify-center items-end self-stretch min-h-[480px] ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <img
              src={`${import.meta.env.BASE_URL}img/headshot.svg`}
              alt="Headshot"
              className="absolute inset-0 w-full h-full object-contain object-bottom animate-soft-float"
            />
            {/* Fade bottom edge into section background */}
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#f5f5f5] to-transparent pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
};

// ─── Solutions ───────────────────────────────────────────────────────────────

const SolutionsSection: React.FC = () => {
  const { ref, isVisible } = useInView({ threshold: 0.15 });

  const cards = [
    {
      eyebrow: 'Done For You',
      heading: 'Website Design & Development',
      body: 'I design and build professional, high-converting websites from scratch, tailored to your brand and optimized to turn visitors into clients. No templates. No handoffs to a team you\'ve never met.',
      tags: ['Web Design', 'Custom Development', 'Conversion Optimization'],
      cta: 'Start My Website Project',
      ctaAction: () => scrollToSection('connect'),
    },
    {
      eyebrow: 'Done With You',
      heading: 'AI Consulting & Education',
      body: 'Want to build and grow your business with AI but don\'t know where to start? I offer one-on-one consulting and training sessions that give you real, usable skills, not theory.',
      tags: ['1-on-1 Consulting', 'AI Tools Training', 'Practical Workshops'],
      cta: 'Book an AI Session',
      ctaAction: () => scrollToSection('connect'),
    },
  ];

  return (
    <section id="solutions" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Header */}
        <div
          ref={ref}
          className={`mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <p className="text-xs font-semibold text-brand-gold uppercase tracking-wider mb-3">
            What I Do
          </p>
          <h2 className="font-heading text-3xl md:text-4xl text-brand-navy font-semibold tracking-tight mb-4">
            Two Ways I Can Help Your Business
          </h2>
          <p className="font-sans text-base md:text-lg text-brand-navy/70 max-w-2xl">
            Whether you want it done for you or want to learn to do it yourself, there's a clear path forward.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cards.map((card, i) => (
            <div
              key={i}
              className={`rounded-2xl border border-brand-gray/20 shadow-premium bg-[#f5f5f5] p-8 md:p-10 flex flex-col justify-between hover:shadow-premium-hover transition-all duration-500 hover:-translate-y-1 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: isVisible ? `${120 + i * 80}ms` : '0ms' }}
            >
              <div>
                <p className="text-xs font-semibold text-brand-gold uppercase tracking-wider mb-3">
                  {card.eyebrow}
                </p>
                <h3 className="font-heading text-2xl md:text-3xl text-brand-navy font-semibold tracking-tight mb-4">
                  {card.heading}
                </h3>
                <p className="font-sans text-brand-navy/70 leading-relaxed mb-6">
                  {card.body}
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {card.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 text-xs font-medium bg-white border border-brand-navy/10 text-brand-navy rounded-full transition-transform duration-200 hover:scale-105"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <button
                onClick={card.ctaAction}
                className="inline-flex items-center gap-2 px-6 py-3 bg-brand-navy text-white text-sm font-semibold rounded-full shadow-md hover:shadow-premium-hover hover:bg-opacity-90 transition-all self-start hover:-translate-y-0.5 transform"
              >
                {card.cta}
                <svg width="14" height="14" fill="none" viewBox="0 0 14 14"><path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── Benefits ────────────────────────────────────────────────────────────────

const BenefitsSection: React.FC = () => {
  const { ref, isVisible } = useInView({ threshold: 0.12 });

  const benefits = [
    {
      number: '01',
      heading: 'Custom, Not Cookie-Cutter',
      body: 'Every website I build starts with understanding your business, your audience, and your goals, not a template dropped into a drag-and-drop editor.',
    },
    {
      number: '02',
      heading: 'Practical AI Skills You\'ll Actually Use',
      body: 'My consulting sessions are hands-on. You walk away knowing how to use AI tools in your workflow, not just what AI is.',
    },
    {
      number: '03',
      heading: 'One Person, Full Stack',
      body: 'You work directly with me from first call to final launch. No account managers, no outsourcing. You always know who\'s responsible.',
    },
    {
      number: '04',
      heading: 'It Starts with a Conversation',
      body: 'I don\'t do one-size-fits-all pricing or proposals. Every engagement starts with a free call so I can understand what you actually need.',
    },
  ];

  return (
    <section id="benefits" className="py-24 md:py-32 bg-gradient-to-b from-[#f5f5f5] via-white to-[#f5f5f5]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Header */}
        <div
          ref={ref}
          className={`mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <h2 className="font-heading text-3xl md:text-4xl text-brand-navy font-semibold tracking-tight mb-4">
            Why Work with Me
          </h2>
          <p className="font-sans text-base md:text-lg text-brand-navy/70 max-w-2xl">
            You get one person who knows both web development and AI inside out. No project managers, no middlemen.
          </p>
        </div>

        {/* 2×2 Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
          {benefits.map((b, i) => (
            <div
              key={i}
              className={`rounded-2xl border border-brand-gray/20 shadow-premium bg-white p-8 hover:shadow-premium-hover transition-all duration-500 hover:-translate-y-1 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: isVisible ? `${100 + i * 80}ms` : '0ms' }}
            >
              <span className="font-heading text-4xl font-semibold text-brand-gold/40 mb-4 block">
                {b.number}
              </span>
              <h3 className="font-heading text-xl text-brand-navy font-semibold tracking-tight mb-3">
                {b.heading}
              </h3>
              <p className="font-sans text-brand-navy/70 leading-relaxed text-sm md:text-base">
                {b.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── How It Works ─────────────────────────────────────────────────────────────

const HowItWorksSection: React.FC = () => {
  const { ref, isVisible } = useInView({ threshold: 0.12 });

  const steps = [
    {
      step: '01',
      heading: 'Book a Free Call',
      body: 'We talk through what you\'re building, what you need, and what success looks like. No pitch. No pressure.',
    },
    {
      step: '02',
      heading: 'I Scope the Work',
      body: 'Based on our call, I put together a clear proposal covering scope, timeline, and investment, so there are no surprises.',
    },
    {
      step: '03',
      heading: 'We Build or Learn Together',
      body: 'For web projects: I design, build, and keep you in the loop at every milestone. For consulting: we work through your goals session by session.',
    },
    {
      step: '04',
      heading: 'You Launch with Confidence',
      body: 'Your site goes live (and I stick around for support), or you finish your consulting journey with skills you can use immediately.',
    },
  ];

  return (
    <section id="how-it-works" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Header */}
        <div
          ref={ref}
          className={`mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <p className="text-xs font-semibold text-brand-gold uppercase tracking-wider mb-3">
            The Process
          </p>
          <h2 className="font-heading text-3xl md:text-4xl text-brand-navy font-semibold tracking-tight mb-4">
            How We Get Started
          </h2>
          <p className="font-sans text-base md:text-lg text-brand-navy/70 max-w-2xl">
            A simple, clear process, whether you're here for a website or for AI consulting.
          </p>
        </div>

        {/* Step Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <div
              key={i}
              className={`relative rounded-2xl border border-brand-gray/20 shadow-premium bg-[#f5f5f5] p-7 hover:shadow-premium-hover transition-all duration-500 hover:-translate-y-1 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: isVisible ? `${80 + i * 80}ms` : '0ms' }}
            >
              {/* Connector arrow between cards (desktop only) */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-3.5 top-1/2 -translate-y-1/2 z-10">
                  <svg width="7" height="12" viewBox="0 0 7 12" fill="none">
                    <path d="M1 1l5 5-5 5" stroke="#e0b344" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              )}
              <span className="font-heading text-3xl font-semibold text-brand-gold mb-4 block">
                {s.step}
              </span>
              <h3 className="font-heading text-lg text-brand-navy font-semibold tracking-tight mb-3">
                {s.heading}
              </h3>
              <p className="font-sans text-sm text-brand-navy/70 leading-relaxed">
                {s.body}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className={`mt-14 text-center transition-all duration-700 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <button
            onClick={() => scrollToSection('connect')}
            className="px-8 py-4 bg-brand-navy text-white rounded-full font-semibold shadow-premium hover:shadow-premium-hover hover:bg-opacity-95 transition-all transform hover:-translate-y-1 inline-flex items-center gap-2.5"
          >
            <svg width="16" height="16" fill="none" viewBox="0 0 16 16"><rect x="1" y="3" width="14" height="12" rx="2" stroke="currentColor" strokeWidth="1.4"/><path d="M1 7h14M5 1v4M11 1v4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></svg>
            Claim My Free Call
          </button>
          <p className="font-sans text-xs text-brand-navy/45 mt-3 tracking-wide">
            30 minutes to get the ball rolling
          </p>
        </div>
      </div>
    </section>
  );
};

// ─── Testimonials ─────────────────────────────────────────────────────────────

const TestimonialsSection: React.FC = () => {
  const { ref, isVisible } = useInView({ threshold: 0.15 });

  useEffect(() => {
    if (!document.querySelector(`script[src="${SENJA_SCRIPT}"]`)) {
      const script = document.createElement('script');
      script.src = SENJA_SCRIPT;
      script.async = true;
      script.type = 'text/javascript';
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section
      id="testimonials"
      ref={ref}
      className={`py-24 md:py-32 bg-gradient-to-b from-[#f5f5f5] via-white to-[#f5f5f5] transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-8">

        <div
          className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          style={{ transitionDelay: isVisible ? '80ms' : '0ms' }}
        >
          <p className="text-xs font-semibold text-brand-gold uppercase tracking-wider mb-3">
            Client Results
          </p>
          <h2 className="font-heading text-3xl md:text-4xl text-brand-navy font-semibold tracking-tight mb-4">
            Real Results from Real Clients
          </h2>
          <p className="font-sans text-base md:text-lg text-brand-navy/70 max-w-2xl">
            Don't take my word for it. Here's what the people I've worked with have to say.
          </p>
        </div>

        <div
          className={`rounded-2xl bg-brand-white border border-brand-gray/20 shadow-premium p-4 md:p-8 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          style={{ transitionDelay: isVisible ? '140ms' : '0ms' }}
        >
          <div
            className="senja-embed"
            data-id={SENJA_WALL_ID}
            data-mode="shadow"
            data-lazyload="false"
            style={{ display: 'block', width: '100%' }}
          />
        </div>
      </div>
    </section>
  );
};

// ─── Let's Connect ────────────────────────────────────────────────────────────

const ConnectSection: React.FC = () => {
  const { ref, isVisible } = useInView({ threshold: 0.1 });
  const calendarContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const container = calendarContainerRef.current;
    if (!container) return;

    container.innerHTML = '';
    const inlineScript = document.createElement('script');
    inlineScript.type = 'text/javascript';
    inlineScript.dataset.calEmbed = 'consultation';
    inlineScript.innerHTML = `
      (function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if(typeof namespace === "string"){cal.ns[namespace] = cal.ns[namespace] || api;p(cal.ns[namespace], ar);p(cal, ["initNamespace", namespace]);} else p(cal, ar); return;} p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
      Cal("init", "consultation", {origin:"https://app.cal.com"});
      Cal.ns.consultation("inline", {
        elementOrSelector:"#my-cal-inline-consultation",
        config: {"layout":"month_view","useSlotsViewOnSmallScreen":"true","theme":"light"},
        calLink: "atascension/consultation",
      });
      Cal.ns.consultation("ui", {"theme":"light","cssVarsPerTheme":{"light":{"cal-brand":"#0b234b"}},"hideEventTypeDetails":false,"layout":"month_view"});
    `;
    document.body.appendChild(inlineScript);

    return () => {
      inlineScript.remove();
      container.innerHTML = '';
    };
  }, []);

  return (
    <section id="connect" className="py-24 md:py-32 bg-white">
      <div className="max-w-5xl mx-auto px-6 md:px-10 space-y-10">

        <div
          ref={ref}
          className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div>
            <h2 className="font-heading text-4xl md:text-5xl text-brand-navy font-semibold tracking-tight leading-tight mb-4">
              Book a Free Call
            </h2>
            <p className="font-sans text-base md:text-lg text-brand-navy/70 max-w-xl">
              Tell me what you're working on. We'll figure out the best way I can help.
            </p>
          </div>
        </div>

        <div className="bg-white border border-brand-gray/20 rounded-2xl p-4 shadow-premium">
          <div
            id="my-cal-inline-consultation"
            ref={calendarContainerRef}
            style={{ width: '100%', height: '100%', overflow: 'scroll' }}
          />
        </div>
      </div>
    </section>
  );
};

// ─── Minimal Footer ───────────────────────────────────────────────────────────

const LandingFooter: React.FC<{ onNavigate: (page: Page) => void }> = ({ onNavigate }) => {
  const { ref, isVisible } = useInView({ threshold: 0.1 });

  return (
    <footer className="bg-brand-white border-t border-brand-gray/10 py-10">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        <span className="font-heading font-bold text-brand-navy text-lg tracking-tight">
          Architech Ascension
        </span>

        <div className="flex flex-wrap justify-center gap-6">
          <button
            onClick={() => onNavigate('privacy')}
            className="text-sm text-gray-400 hover:text-brand-navy transition-colors"
          >
            Privacy Policy
          </button>
          <button
            onClick={() => onNavigate('terms')}
            className="text-sm text-gray-400 hover:text-brand-navy transition-colors"
          >
            Terms &amp; Conditions
          </button>
          <button
            onClick={() => onNavigate('refund')}
            className="text-sm text-gray-400 hover:text-brand-navy transition-colors"
          >
            Refund Policy
          </button>
          <button
            onClick={() => onNavigate('links')}
            className="text-sm text-gray-400 hover:text-brand-navy transition-colors"
          >
            Social Media &amp; More
          </button>
        </div>

        <span className="text-xs text-brand-gray/60">
          © {new Date().getFullYear()} Architech Ascension. All rights reserved.
        </span>
      </div>
    </footer>
  );
};

// ─── Landing Page Root ────────────────────────────────────────────────────────

export const LandingPage: React.FC<LandingPageProps> = ({ onNavigate }) => {
  return (
    <>
      <HeroSection />
      <SolutionsSection />
      <BenefitsSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <ConnectSection />
      <LandingFooter onNavigate={onNavigate} />
    </>
  );
};
