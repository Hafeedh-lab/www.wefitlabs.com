import React from 'react';
import { navigationLinks } from '../data/navigationData';

const SCROLL_OFFSET = 96;

function isExternalLink(href: string) {
  return href.startsWith('http');
}

function normalizeHash(href: string) {
  return href.replace('./', '').replace('#', '');
}

export function Navigation() {
  const handleAnchorNavigation = React.useCallback((hash: string) => {
    const targetId = normalizeHash(hash);
    if (!targetId) {
      return;
    }
    const element = document.getElementById(targetId);

    if (element) {
      const elementTop = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementTop - SCROLL_OFFSET,
        behavior: 'smooth'
      });
    }
  }, []);

  const handleNavClick = React.useCallback(
    (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      if (isExternalLink(href)) {
        return;
      }

      event.preventDefault();
      handleAnchorNavigation(href);
    },
    [handleAnchorNavigation]
  );

  const handleWaitlistClick = React.useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      handleAnchorNavigation('#waitlist');
    },
    [handleAnchorNavigation]
  );

  return (
    <header className="pointer-events-none fixed inset-x-0 top-6 z-50 flex w-full justify-center px-4">
      <nav className="pointer-events-auto flex w-full max-w-5xl items-center justify-between rounded-2xl border border-neutral-800 bg-black/90 px-5 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.45)] backdrop-blur md:px-8">
        <a
          href="#home"
          onClick={(event) => handleNavClick(event, '#home')}
          className="flex items-center gap-3"
        >
          <img
            src="https://c.animaapp.com/mfqo4zaxsuDsQ0/assets/icon-1.svg"
            alt="WeFit Labs logo"
            className="h-8 w-auto"
          />
        </a>
        <ul className="flex flex-wrap items-center gap-5 text-xs md:gap-7 md:text-sm">
          {navigationLinks.map((link) => (
            <li key={link.id}>
              <a
                href={link.href}
                onClick={(event) => handleNavClick(event, link.href)}
                className="px-2 font-poppins font-medium text-white transition-colors duration-200 hover:text-emerald-400 md:px-3"
                rel={isExternalLink(link.href) ? 'noreferrer noopener' : undefined}
                target={isExternalLink(link.href) ? '_blank' : undefined}
              >
                {link.text}
              </a>
            </li>
          ))}
        </ul>
        <button
          type="button"
          onClick={handleWaitlistClick}
          className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-5 py-2 font-unbounded text-sm font-semibold text-black transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(16,185,129,0.45)]"
        >
          Join Waitlist
        </button>
      </nav>
    </header>
  );
}
