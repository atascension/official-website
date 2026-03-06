import React from 'react';
import { Page } from '../App';

type SocialItem = {
  name: string;
  href: string;
  icon: React.ReactNode;
};

type LinkItem = {
  title: string;
  description?: string;
  href?: string;
  page?: Page;
};

interface SocialLinksProps {
  onNavigate: (page: Page) => void;
}

export const SocialLinks: React.FC<SocialLinksProps> = ({ onNavigate }) => {
  const socialItems: SocialItem[] = [
    {
      name: 'TikTok',
      href: 'https://tiktok.com/@architechascension',
      icon: <img src={`${import.meta.env.BASE_URL}img/tiktok-logo.svg`} alt="TikTok" className="h-5 w-5" />,
    },
    {
      name: 'Instagram',
      href: 'https://instagram.com/architechascension',
      icon: <img src={`${import.meta.env.BASE_URL}img/instagram-logo.svg`} alt="Instagram" className="h-5 w-5" />,
    },
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/atascension',
      icon: <img src={`${import.meta.env.BASE_URL}img/facebook-logo.svg`} alt="Facebook" className="h-5 w-5" />,
    },
    {
      name: 'Threads',
      href: 'https://www.threads.com/@architechascension',
      icon: <img src={`${import.meta.env.BASE_URL}img/threads-logo.svg`} alt="Threads" className="h-5 w-5" />,
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/robert-morgan-920512383',
      icon: <img src={`${import.meta.env.BASE_URL}img/linkedin-logo.svg`} alt="LinkedIn" className="h-5 w-5" />,
    },
  ];

  const importantLinks: LinkItem[] = [
    {
      title: 'Book a Free Call',
      description: 'Schedule a free call for web development or AI consulting.',
      href: 'https://cal.com/atascension/consultation',
    },
    {
      title: 'Join My Newsletter',
      description: 'Weekly insights on AI tools, web development, and building online.',
      href: 'https://architech-ascension.kit.com/',
    },
    {
      title: 'My Services',
      description: 'Web Development & AI Consulting, done for you or done with you.',
      page: 'home',
    },
    {
      title: 'Courses',
      description: 'Learn to build with AI: courses, templates, and training.',
      href: 'https://architech-ascension.kit.com/products/idea-to-execution',
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-b from-[#f5f5f5] via-white to-[#f5f5f5] pt-28 pb-16 px-6 md:px-8 flex items-center overflow-hidden">
      <div className="relative w-full max-w-xl mx-auto">
        <div className="absolute inset-0 -z-10 bg-brand-gold/15 blur-3xl rounded-[36px]" />
        <div className="absolute -top-16 -left-10 h-32 w-32 bg-brand-navy/5 blur-2xl rounded-full -z-10" />
        <div className="absolute -bottom-20 right-0 h-36 w-36 bg-brand-navy/10 blur-[90px] rounded-full -z-10" />

        <div className="rounded-[32px] border border-brand-navy/10 bg-white/80 backdrop-blur-md shadow-premium px-7 py-8 md:px-9 md:py-10 flex flex-col items-center gap-7">
          <div className="h-24 w-24 rounded-full bg-brand-navy/5 border border-brand-navy/10 shadow-inner overflow-hidden flex items-center justify-center">
            <img
              src={`${import.meta.env.BASE_URL}img/logo.png`}
              alt="Architech Ascension logo"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="text-center space-y-2">
            <h1 className="font-heading text-2xl text-brand-navy tracking-tight">Architech Ascension</h1>
            <p className="text-sm text-brand-navy/70">
              Web Developer &amp; AI Educator<br />
              I build professional websites and teach entrepreneurs how to grow with AI.<br />
              Book a free call below.
            </p>
          </div>

          <div className="flex items-center justify-center gap-3 w-full">
            {socialItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                aria-label={item.name}
                className="group h-11 w-11 rounded-full border border-brand-navy/20 bg-white/70 flex items-center justify-center text-brand-navy transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-navy hover:text-brand-navy"
              >
                {item.icon}
              </a>
            ))}
          </div>

          <div className="w-full space-y-4">
            {importantLinks.map((link) =>
              link.href ? (
                <a
                  key={link.title}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="block w-full text-center rounded-2xl border border-brand-navy/30 bg-white/60 px-6 py-4 text-brand-navy shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-navy hover:shadow-premium focus:outline-none"
                >
                  <div className="font-semibold tracking-tight">{link.title}</div>
                  {link.description && (
                    <div className="text-sm text-brand-navy/70 mt-1">{link.description}</div>
                  )}
                </a>
              ) : (
                <button
                  key={link.title}
                  type="button"
                  onClick={() => link.page && onNavigate(link.page)}
                  className="w-full text-center rounded-2xl border border-brand-navy/30 bg-white/60 px-6 py-4 text-brand-navy shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-navy hover:shadow-premium focus:outline-none"
                >
                  <div className="font-semibold tracking-tight">{link.title}</div>
                  {link.description && (
                    <div className="text-sm text-brand-navy/70 mt-1">{link.description}</div>
                  )}
                </button>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
