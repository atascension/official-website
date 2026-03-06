import React, { useState, useEffect } from 'react';
import { useInView } from '../hooks/useInView';
import { Page } from '../App';

interface WebinarLandingProps {
  onNavigate: (page: Page) => void;
}

// ─── Shared Background ────────────────────────────────────────────────────────

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

// ─── Scroll CTA Helper ────────────────────────────────────────────────────────

function scrollToRegister(e: React.MouseEvent) {
  e.preventDefault();
  document.getElementById('register')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

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
              Free Live Webinar &bull; March 18, 2026
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
            onClick={scrollToRegister}
          >
            Reserve Your Free Spot
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <p className="mt-4 text-xs text-white tracking-wide">100% Free &bull; No credit card required</p>
        </div>
      </div>

      {/* Scroll hint */}
      <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="flex flex-col items-center gap-2 text-white">
          <span className="text-[10px] uppercase tracking-widest font-semibold">Scroll to learn more</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </section>
  );
};

// ─── Problem Section ──────────────────────────────────────────────────────────

const PAIN_POINTS = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    headline: 'Developers quoted you thousands',
    body: 'You reached out to a web agency or freelancer, and the estimate came back at $5,000, $10,000, or more, for a basic site. So you shelved the idea.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    headline: 'DIY builders left you frustrated',
    body: 'You tried Wix, Squarespace, or a WordPress template. You spent a weekend on it. The result looked generic, not like your business, and you couldn\'t figure out how to fix it.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    headline: 'You\'ve been "about to start" for months',
    body: 'Every week you tell yourself: "I\'ll figure this out soon." But between running your business and the overwhelm of where to even begin, it keeps getting pushed to next week.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2h-2" />
      </svg>
    ),
    headline: 'You don\'t know where AI actually fits in',
    body: 'Everyone\'s talking about AI, but you haven\'t found a clear, practical answer to: "Can I actually use this to build my website? And how?" So you\'re still waiting for someone to show you.',
  },
];

const ProblemSection: React.FC = () => {
  const { ref, isVisible } = useInView({ threshold: 0.1 });

  return (
    <section ref={ref} className="relative py-20 md:py-28 bg-brand-navy overflow-hidden">
      {BG_GLOW}
      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12">

        {/* Heading */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <p className="text-brand-gold font-semibold text-sm uppercase tracking-widest mb-4">Sound Familiar?</p>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-white font-semibold tracking-tight leading-tight">
            You Already Know You Need<br className="hidden sm:block" /> a Website. So Why Don't You Have One?
          </h2>
          <p className="mt-5 text-base sm:text-lg text-white max-w-2xl mx-auto leading-relaxed">
            Most people who need a website aren't failing because they lack effort or intelligence. They're stuck because no one has ever shown them a clear, affordable path from idea to live site.
          </p>
        </div>

        {/* Pain point cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {PAIN_POINTS.map((point, i) => (
            <div
              key={i}
              className={`flex gap-5 items-start bg-white/5 border border-white/10 rounded-2xl p-6 md:p-7 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: isVisible ? `${i * 80}ms` : '0ms' }}
            >
              <div className="shrink-0 w-10 h-10 rounded-xl bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center text-brand-gold mt-0.5">
                {point.icon}
              </div>
              <div>
                <h3 className="font-heading text-base md:text-lg text-white font-semibold mb-2">{point.headline}</h3>
                <p className="text-white text-sm md:text-base leading-relaxed">{point.body}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Agitate callout */}
        <div className={`mt-12 rounded-2xl border border-brand-gold/20 bg-brand-gold/5 p-7 md:p-10 text-center transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <p className="text-white text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            Meanwhile, your competitors, some with less experience and fewer skills than you, have polished websites that are bringing in customers{' '}
            <span className="text-brand-gold font-semibold">right now.</span>{' '}
            Every day without a website is a day customers can't find you.
          </p>
        </div>
      </div>
    </section>
  );
};

// ─── Solution Bridge Section ──────────────────────────────────────────────────

const SolutionBridgeSection: React.FC = () => {
  const { ref, isVisible } = useInView({ threshold: 0.1 });

  return (
    <section ref={ref} className="relative py-20 md:py-28 bg-brand-navy overflow-hidden">
      {BG_GLOW}

      {/* Decorative glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full opacity-10"
        style={{ background: 'radial-gradient(ellipse at center, #e0b344 0%, transparent 70%)' }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 text-center">

        <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-gold/40 bg-brand-gold/10 mb-8">
            <span className="text-xs font-semibold text-brand-gold tracking-widest uppercase">
              There Is a Better Way
            </span>
          </div>
        </div>

        <h2 className={`font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-semibold tracking-tight leading-tight mb-6 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          What If You Could Go From{' '}
          <span className="text-brand-gold">Blank Page to Live Website</span>{' '}
          Without Writing a Single Line of Code?
        </h2>

        <p className={`text-base sm:text-lg md:text-xl text-white max-w-2xl mx-auto leading-relaxed mb-10 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          AI has changed what's possible. You no longer need a developer, a design degree, or months of your life. You need a clear framework, and someone who's done it to walk you through it step by step.
        </p>

        <div className={`transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <p className="font-heading text-xl sm:text-2xl text-brand-gold font-semibold mb-10">
            That's exactly what this free live webinar delivers.
          </p>

          {/* Three value props */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 text-left">
            {[
              { stat: 'Free', label: 'No cost. No catch. No credit card.' },
              { stat: 'Live', label: 'Ask questions in real time and get real answers.' },
              { stat: '1 Session', label: 'One 90-minute training. One clear system.' },
            ].map((item) => (
              <div key={item.stat} className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
                <p className="font-heading text-3xl md:text-4xl text-brand-gold font-semibold mb-2">{item.stat}</p>
                <p className="text-white text-sm leading-relaxed">{item.label}</p>
              </div>
            ))}
          </div>
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

// ─── Who This Is For ──────────────────────────────────────────────────────────

const WHO_FOR = [
  'You\'re a small business owner, freelancer, or entrepreneur who needs a professional online presence but doesn\'t have a big budget.',
  'You\'ve been quoted thousands for a website and refused to pay it, or you paid it and weren\'t happy with what you got.',
  'You\'ve tried a website builder before and ended up with something that looked amateur or didn\'t represent your brand.',
  'You have no technical background and the idea of "code" makes you want to close the tab.',
  'You\'ve been meaning to build your website for longer than you\'d like to admit, and you\'re ready to actually get it done.',
  'You\'re curious about AI but haven\'t found a practical, grounded way to apply it to something real.',
];

const WHO_NOT_FOR = [
  'You already have a professional website and aren\'t looking to improve it.',
  'You\'re an experienced developer looking for a technical deep-dive.',
  'You\'re not willing to invest 90 minutes in a live session.',
];

const WhoItIsForSection: React.FC = () => {
  const { ref, isVisible } = useInView({ threshold: 0.1 });

  return (
    <section ref={ref} className="relative py-20 md:py-28 bg-brand-navy overflow-hidden">
      {BG_GLOW}
      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12">

        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-gold/30 bg-brand-gold/10 mb-5">
            <span className="text-xs font-semibold text-brand-gold tracking-wider uppercase">
              Is This For You?
            </span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-white font-semibold tracking-tight leading-tight">
            This Webinar Is Built for People<br className="hidden sm:block" /> Who Are Done Waiting
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

          {/* This IS for you */}
          <div className={`transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-full bg-brand-gold/20 border border-brand-gold/40 flex items-center justify-center shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-brand-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-heading text-lg text-white font-semibold">This IS for you if...</h3>
            </div>
            <div className="flex flex-col gap-3">
              {WHO_FOR.map((item, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-brand-gold mt-1 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-white text-sm md:text-base leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* This is NOT for you */}
          <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <h3 className="font-heading text-lg text-white font-semibold">This is NOT for you if...</h3>
            </div>
            <div className="flex flex-col gap-3 mb-10">
              {WHO_NOT_FOR.map((item, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-white mt-1 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <p className="text-white text-sm md:text-base leading-relaxed">{item}</p>
                </div>
              ))}
            </div>

            {/* Identification mirror */}
            <div className="rounded-2xl border border-brand-gold/20 bg-brand-gold/5 p-6">
              <p className="text-white text-sm md:text-base leading-relaxed">
                <span className="text-brand-gold font-semibold">If the "IS for you" list sounds like your life right now</span>, this session was built specifically for you. We\'ve taken everything that\'s confusing, expensive, and time-consuming about getting a website up, and replaced it with a single, repeatable framework that works.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

// ─── What You Get ─────────────────────────────────────────────────────────────

const DELIVERABLES = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.069A1 1 0 0121 8.876V15.5a1 1 0 01-1.447.894L15 14M3 8.5A1.5 1.5 0 014.5 7h7A1.5 1.5 0 0113 8.5v7a1.5 1.5 0 01-1.5 1.5h-7A1.5 1.5 0 013 15.5v-7z" />
      </svg>
    ),
    title: 'Full Live Training Session',
    description: 'A 90-minute live walkthrough of the complete 5-step AI website building framework, from defining your vision to going live.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: 'Ready-to-Use AI Prompts',
    description: 'The exact prompts we use to generate professional websites. Copy, customize, and deploy, no writing from scratch.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Live Q&A Session',
    description: 'Get your specific questions answered in real time. Walk away with clarity on your exact next steps, not just general advice.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    title: 'A Clear Action Plan',
    description: 'Leave with a defined roadmap: what to do the same day, what to finish in your first week, and what "done" looks like for your specific site.',
  },
];

const WhatYouGetSection: React.FC = () => {
  const { ref, isVisible } = useInView({ threshold: 0.1 });

  return (
    <section ref={ref} className="relative py-20 md:py-28 bg-brand-navy overflow-hidden">
      {BG_GLOW}
      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12">

        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-gold/30 bg-brand-gold/10 mb-5">
            <span className="text-xs font-semibold text-brand-gold tracking-wider uppercase">
              What You Walk Away With
            </span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-white font-semibold tracking-tight leading-tight">
            Everything You Need to Build<br className="hidden sm:block" /> Your Website in One Session
          </h2>
          <p className="mt-4 text-base sm:text-lg text-white max-w-xl mx-auto leading-relaxed">
            This isn't a 30-second highlight reel. It's a complete, hands-on training that gives you the framework, the tools, and the confidence to take action.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {DELIVERABLES.map((item, i) => (
            <div
              key={i}
              className={`flex gap-5 items-start bg-white/5 border border-brand-gold/15 hover:border-brand-gold/35 rounded-2xl p-6 md:p-7 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: isVisible ? `${i * 80}ms` : '0ms' }}
            >
              <div className="shrink-0 w-10 h-10 rounded-xl bg-brand-gold/10 border border-brand-gold/25 flex items-center justify-center text-brand-gold mt-0.5">
                {item.icon}
              </div>
              <div>
                <h3 className="font-heading text-base md:text-lg text-white font-semibold mb-2">{item.title}</h3>
                <p className="text-white text-sm md:text-base leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Value callout */}
        <div className={`mt-10 rounded-2xl bg-brand-gold text-brand-navy p-7 md:p-10 text-center transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <p className="font-heading text-xl sm:text-2xl font-semibold leading-snug">
            People pay hundreds of dollars for courses that teach parts of this.<br className="hidden sm:block" />
            You're getting the full framework, live, for free.
          </p>
          <p className="mt-3 text-brand-navy/70 text-sm">March 18, 2026 &bull; 12:00 PM ET &bull; One Live Session Only</p>
        </div>

      </div>
    </section>
  );
};

// ─── Social Proof / Trust Section ─────────────────────────────────────────────

const TRUST_STATS = [
  { value: 'March 18', label: 'One live date, no reruns' },
  { value: 'Free', label: 'No cost to attend' },
  { value: '90 Min', label: 'Focused, practical training' },
  { value: 'Live Q&A', label: 'Your questions answered in real time' },
];

const SocialProofSection: React.FC = () => {
  const { ref, isVisible } = useInView({ threshold: 0.1 });

  return (
    <section ref={ref} className="relative py-20 md:py-28 bg-brand-navy overflow-hidden">
      {BG_GLOW}
      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12">

        {/* Stats row */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-5 mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          {TRUST_STATS.map((stat, i) => (
            <div
              key={i}
              className="text-center bg-white/5 border border-white/10 rounded-2xl p-6"
              style={{ transitionDelay: isVisible ? `${i * 80}ms` : '0ms' }}
            >
              <p className="font-heading text-2xl md:text-3xl text-brand-gold font-semibold mb-2">{stat.value}</p>
              <p className="text-white text-xs md:text-sm leading-relaxed">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Testimonial-style pull quotes */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-5 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          {[
            {
              quote: 'I had no idea AI could actually do this. I always thought building a website meant either paying a developer or settling for something that looked cheap. This changes everything.',
              name: 'Small Business Owner',
              context: 'Service-based business, no prior tech experience',
            },
            {
              quote: 'I kept putting my website off because every time I looked into it, I felt more overwhelmed than when I started. Having a clear, step-by-step system is exactly what I needed.',
              name: 'Independent Consultant',
              context: 'Freelancer, solo operator',
            },
            {
              quote: 'Finally something that actually shows you how to use AI in a practical way. Not theory, not hype, just a real framework you can follow and actually use the same day.',
              name: 'Entrepreneur',
              context: 'Early-stage business owner',
            },
          ].map((item, i) => (
            <div
              key={i}
              className="flex flex-col justify-between gap-5 bg-white/5 border border-white/10 rounded-2xl p-6 md:p-7"
              style={{ transitionDelay: isVisible ? `${(i + 4) * 80}ms` : '0ms' }}
            >
              {/* Stars */}
              <div className="flex gap-1">
                {[...Array(5)].map((_, s) => (
                  <svg key={s} xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-brand-gold" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-white text-sm md:text-base leading-relaxed flex-1">"{item.quote}"</p>
              <div>
                <p className="text-white font-semibold text-sm">{item.name}</p>
                <p className="text-white text-xs">{item.context}</p>
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

// ─── FAQ Section ──────────────────────────────────────────────────────────────

const FAQS = [
  {
    q: 'Do I need any technical skills or coding knowledge?',
    a: 'None at all. If you can type and click, you have everything you need to follow along. The entire framework is designed for people with zero technical background.',
  },
  {
    q: 'What AI tools will we be using?',
    a: 'We\'ll use widely available AI tools that are either free or have a generous free tier. You don\'t need to purchase any software before attending.',
  },
  {
    q: 'How long is the webinar?',
    a: 'The live session runs approximately 90 minutes, including a dedicated Q&A period at the end. We keep it focused and practical, no filler.',
  },
  {
    q: 'Will there be a replay if I can\'t attend live?',
    a: 'We plan to make a limited-time replay available for registered attendees only. However, attending live is strongly recommended, you\'ll be able to ask questions in real time and get answers specific to your situation.',
  },
  {
    q: 'Is this actually free? What\'s the catch?',
    a: 'Yes, completely free. No hidden costs, no surprise upsells during the webinar, and no credit card required to register. We built this because we believe more people deserve access to this kind of practical, applicable training.',
  },
  {
    q: 'I already have a website. Is this still worth attending?',
    a: 'Almost certainly. The AI framework can be used to rebuild or significantly improve an existing site, often in a fraction of the time it took to create the original. Many attendees come in looking to upgrade a site they\'re not happy with.',
  },
  {
    q: 'What if I have a specific kind of business, will this still apply?',
    a: 'Yes. The 5-step framework works for service businesses, freelancers, coaches, consultants, retail, restaurants, creative professionals, and more. During the session, we cover how to adapt each step to your specific type of business.',
  },
];

const FAQItem: React.FC<{ q: string; a: string; index: number; isVisible: boolean }> = ({ q, a, index, isVisible }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`border border-white/10 rounded-2xl overflow-hidden transition-all duration-500 ${open ? 'border-brand-gold/30' : 'hover:border-white/20'} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
      style={{ transitionDelay: isVisible ? `${index * 60}ms` : '0ms', transitionProperty: 'opacity, transform, border-color' }}
    >
      <button
        className="w-full flex items-center justify-between gap-4 text-left px-6 py-5 cursor-pointer focus:outline-none"
        onClick={() => setOpen((v: boolean) => !v)}
        aria-expanded={open}
      >
        <span className="font-heading text-base md:text-lg text-white font-semibold leading-snug">{q}</span>
        <span className={`shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${open ? 'border-brand-gold bg-brand-gold/10 text-brand-gold rotate-45' : 'border-white/20 text-white'}`}>
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
        </span>
      </button>
      {open && (
        <div className="px-6 pb-5">
          <p className="text-white text-sm md:text-base leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
};

const FAQSection: React.FC = () => {
  const { ref, isVisible } = useInView({ threshold: 0.05 });

  return (
    <section ref={ref} className="relative py-20 md:py-28 bg-brand-navy overflow-hidden">
      {BG_GLOW}
      <div className="relative z-10 max-w-3xl mx-auto px-6 md:px-12">

        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-gold/30 bg-brand-gold/10 mb-5">
            <span className="text-xs font-semibold text-brand-gold tracking-wider uppercase">
              Questions Answered
            </span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl text-white font-semibold tracking-tight leading-tight">
            Everything You Might Be Wondering
          </h2>
        </div>

        <div className="flex flex-col gap-3">
          {FAQS.map((faq, i) => (
            <FAQItem key={i} q={faq.q} a={faq.a} index={i} isVisible={isVisible} />
          ))}
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

      {/* Decorative glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full opacity-10"
        style={{ background: 'radial-gradient(ellipse at center, #e0b344 0%, transparent 70%)' }}
      />

      <div className={`relative z-10 max-w-2xl mx-auto px-6 md:px-12 text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>

        {/* Urgency badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-gold/40 bg-brand-gold/10 mb-8">
          <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse" />
          <span className="text-xs font-semibold text-brand-gold tracking-widest uppercase">
            Free Registration &bull; March 18, 2026
          </span>
        </div>

        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-white font-semibold leading-tight mb-6">
          Your Website Isn't Going to Build Itself.{' '}
          <span className="text-brand-gold">This Session Will.</span>
        </h2>

        <p className="text-white text-base sm:text-lg leading-relaxed mb-8">
          You've been putting this off. Every week without a website is another week customers can't find you, another week your competitors have the edge, and another week you're telling yourself "soon."
        </p>

        <p className="text-white text-base sm:text-lg leading-relaxed mb-10 font-medium">
          March 18 is your line in the sand. One free session. One complete framework. One clear next step.
        </p>

        {/* Trust checklist */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10 text-sm text-white">
          {[
            '100% Free',
            'No technical skills needed',
            'Live Q&A included',
            'Seats are limited',
          ].map((item) => (
            <div key={item} className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-brand-gold shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>{item}</span>
            </div>
          ))}
        </div>

        {/* CTA button */}
        <a
          href="#"
          aria-label="Reserve your free webinar spot (registration link coming soon)"
          className="inline-flex items-center gap-3 px-10 py-5 bg-brand-gold text-brand-navy font-heading text-lg font-semibold rounded-full hover:brightness-105 hover:scale-[1.02] transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-brand-gold focus:ring-offset-2 focus:ring-offset-brand-navy shadow-premium"
          onClick={(e: React.MouseEvent) => e.preventDefault()}
        >
          Reserve My Free Spot
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>

        <p className="mt-5 text-xs text-white tracking-wide">
          No credit card required &bull; Instant confirmation &bull; One-time live session
        </p>

        {/* Loss aversion closing line */}
        <p className="mt-8 text-white text-sm leading-relaxed max-w-md mx-auto">
          Seats are capped to keep the Q&A valuable. Once we hit capacity, registration closes. Don't let this be the thing you meant to sign up for.
        </p>
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
      <p className="text-xs text-white text-center md:text-center">
        &copy; {new Date().getFullYear()} Architech Ascension. All rights reserved.
      </p>
      <div className="flex items-center gap-5">
        {(['privacy', 'terms', 'refund'] as Page[]).map((p) => (
          <button
            key={p}
            onClick={() => onNavigate(p)}
            className="text-xs text-white hover:text-white transition-colors duration-200 capitalize cursor-pointer focus:outline-none"
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
    <ProblemSection />
    <SolutionBridgeSection />
    <WhatYoullLearnSection />
    <WhoItIsForSection />
    <WhatYouGetSection />
    <SocialProofSection />
    <HostSection />
    <FAQSection />
    <RegisterSection />
    <WebinarFooter onNavigate={onNavigate} />
  </div>
);
