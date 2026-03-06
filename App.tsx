import React, { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { LandingPage } from './components/LandingPage';
import { Privacy } from './components/Privacy';
import { Terms } from './components/Terms';
import { Refund } from './components/Refund';
import { SocialLinks } from './components/SocialLinks';
import { WebinarLanding } from './components/WebinarLanding';

export type Page = 'home' | 'privacy' | 'terms' | 'refund' | 'links' | 'webinar';

const App: React.FC = () => {
  const pageToPath: Record<Page, string> = {
    home: '/',
    privacy: '/privacy',
    terms: '/terms',
    refund: '/refund',
    links: '/links',
    webinar: '/webinar',
  };

  const normalizePath = (path: string) => {
    if (!path) return '/';
    const trimmed = path.replace(/\/+$/, '');
    return trimmed === '' ? '/' : trimmed;
  };

  const getPageFromPath = (): Page => {
    const currentPath = normalizePath(window.location.pathname);
    const match = (Object.entries(pageToPath) as [Page, string][]).find(
      ([, path]) => normalizePath(path) === currentPath
    );
    return match ? match[0] : 'home';
  };

  const [currentPage, setCurrentPage] = useState<Page>(() => getPageFromPath());

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  useEffect(() => {
    const url = new URL(window.location.href);
    const targetPath = pageToPath[currentPage];
    if (normalizePath(url.pathname) !== normalizePath(targetPath)) {
      url.pathname = targetPath;
      window.history.pushState({}, '', url.toString());
    }
  }, [currentPage, pageToPath]);

  useEffect(() => {
    const handlePopState = () => setCurrentPage(getPageFromPath());
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (page: Page) => setCurrentPage(page);

  const renderPage = () => {
    switch (currentPage) {
      case 'privacy':
        return <Privacy />;
      case 'terms':
        return <Terms />;
      case 'refund':
        return <Refund />;
      case 'links':
        return <SocialLinks onNavigate={navigateTo} />;
      case 'webinar':
        return <WebinarLanding onNavigate={navigateTo} />;
      default:
        return <LandingPage onNavigate={navigateTo} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#f5f5f5] selection:bg-brand-navy selection:text-white flex flex-col">
      {currentPage !== 'links' && <Navigation onNavigate={navigateTo} />}
      <main className="flex-grow">
        {renderPage()}
      </main>
    </div>
  );
};

export default App;
