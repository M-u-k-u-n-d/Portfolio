import { useEffect, useState } from 'react';
import { Download, Menu, Moon, Sun, X } from 'lucide-react';
import { navItems, profile } from '../../data/profile';

export default function Header({ theme, onToggleTheme }) {
  const [activeSection, setActiveSection] = useState('about');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) setActiveSection(visible.target.id);
      },
      { rootMargin: '-35% 0px -45% 0px', threshold: [0.1, 0.35, 0.65] },
    );

    document.querySelectorAll('section[id]').forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!menuOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };

    window.addEventListener('keydown', closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', closeOnEscape);
    };
  }, [menuOpen]);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    const header = document.querySelector('[data-site-header]');

    if (section) {
      const headerHeight = header?.getBoundingClientRect().height ?? 0;
      const sectionTop = section.getBoundingClientRect().top + window.scrollY;

      window.scrollTo({
        top: sectionTop - headerHeight,
        behavior: 'smooth',
      });
    }

    setMenuOpen(false);
  };

  return (
    <>
      <header
        data-site-header
        className="sticky top-0 z-50 border-b border-slate-900/10 bg-white/90 px-4 py-3 font-['Inter'] shadow-sm backdrop-blur-xl transition-colors dark:border-white/10 dark:bg-slate-950/90 sm:px-6 lg:px-8"
      >
        <div className="mx-auto grid max-w-6xl grid-cols-[auto_1fr_auto_auto] items-center gap-3 lg:gap-6">
        <button
          type="button"
          className="flex items-center gap-3 text-left font-['Space_Grotesk'] text-base font-bold text-slate-950 dark:text-white"
          onClick={() => scrollToSection('about')}
        >
          <span className="grid size-10 place-items-center rounded-full bg-slate-950 text-sm text-white dark:bg-white dark:text-slate-950">MT</span>
          <span className="hidden sm:inline">{profile.name}</span>
        </button>

        <nav className="hidden justify-center lg:flex" aria-label="Primary navigation">
          {navItems.map(([id, label]) => (
            <button
              key={id}
              className={`rounded-full px-4 py-2 text-left text-sm font-bold transition ${
                activeSection === id
                  ? 'bg-teal-50 text-teal-700 dark:bg-teal-400/15 dark:text-teal-300'
                  : 'text-slate-600 hover:bg-slate-100 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white'
              }`}
              type="button"
              onClick={() => scrollToSection(id)}
            >
              {label}
            </button>
          ))}
        </nav>

        <a
          className="inline-flex size-10 items-center justify-center rounded-full bg-teal-700 font-bold text-white shadow-lg shadow-teal-700/20 transition hover:bg-teal-800 sm:w-auto sm:gap-2 sm:px-4"
          href={profile.resume}
          target="_blank"
          rel="noreferrer"
        >
          <Download size={17} />
          <span className="hidden sm:inline">Resume</span>
        </a>

        <button
          className="inline-flex size-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition dark:border-white/10 dark:bg-white/10 dark:text-slate-100"
          type="button"
          aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          onClick={onToggleTheme}
        >
          {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
        </button>

        <button
          className="absolute left-1/2 grid size-10 -translate-x-1/2 place-items-center rounded-full border border-slate-200 text-slate-700 dark:border-white/15 dark:text-slate-200 lg:hidden"
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setMenuOpen((value) => !value)}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
        </div>
      </header>

      {menuOpen ? (
        <div
          className="fixed inset-0 z-[100] flex min-h-dvh items-center justify-center bg-slate-950/80 p-5 backdrop-blur-md lg:hidden"
          role="presentation"
          onClick={() => setMenuOpen(false)}
        >
          <nav
            className="relative grid w-full max-w-sm gap-2 rounded-2xl border border-white/15 bg-white p-5 shadow-2xl dark:bg-slate-900"
            aria-label="Mobile navigation"
            aria-modal="true"
            role="dialog"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-3 flex items-center justify-between">
              <div>
                <span className="font-['Space_Grotesk'] text-lg font-bold text-slate-950 dark:text-white">
                  {profile.name}
                </span>
                <p className="text-sm text-slate-500 dark:text-slate-400">{profile.role}</p>
              </div>
              <button
                className="grid size-10 place-items-center rounded-full border border-slate-200 text-slate-700 dark:border-white/15 dark:text-slate-200"
                type="button"
                aria-label="Close navigation menu"
                onClick={() => setMenuOpen(false)}
              >
                <X size={20} />
              </button>
            </div>

            {navItems.map(([id, label]) => (
              <button
                key={id}
                className={`rounded-lg px-4 py-3 text-left text-base font-bold transition ${
                  activeSection === id
                    ? 'bg-teal-50 text-teal-700 dark:bg-teal-400/15 dark:text-teal-300'
                    : 'text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-white/10'
                }`}
                type="button"
                onClick={() => scrollToSection(id)}
              >
                {label}
              </button>
            ))}
          </nav>
        </div>
      ) : null}
    </>
  );
}
