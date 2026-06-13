import React, { useEffect, useMemo, useState } from 'react';
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  Database,
  Download,
  GraduationCap,
  Layers3,
  Mail,
  MapPin,
  Menu,
  Moon,
  Phone,
  Server,
  Sun,
  TerminalSquare,
  Wrench,
  X,
} from 'lucide-react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { SiCodechef, SiCodeforces, SiHackerrank, SiLeetcode } from 'react-icons/si';

const profile = {
  name: 'Mukund Tiwari',
  role: 'Software Engineer',
  tagline:
    'Software engineer building accessible Nuxt and Vue experiences alongside secure, scalable Spring Boot APIs.',
  location: 'Bengaluru, India',
  email: 'mukundtiwari251103@gmail.com',
  phone: '+91-721-771-7263',
  resume: '/mukund-tiwari-resume.pdf',
  socials: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/mukund-tiwari-06b433219/', icon: FaLinkedinIn },
    { label: 'GitHub', href: 'https://github.com/M-u-k-u-n-d', icon: FaGithub },
    { label: 'LeetCode', href: 'https://leetcode.com/u/Mukund_Tiwari/', icon: SiLeetcode },
  ],
};

const navItems = [
  ['about', 'Home'],
  ['experience', 'Experience'],
  ['projects', 'Projects'],
  ['skills', 'Skills'],
  ['education', 'Education'],
  ['achievements', 'Achievements'],
  ['contact', 'Contact'],
];

const heroHighlights = [
  { value: '25+', label: 'REST APIs delivered for enterprise workflows' },
  { value: '30%', label: 'API response-time improvement on large datasets' },
  { value: 'WCAG', label: '2.1 AA accessible frontend engineering' },
];

const frontendStack = ['Vue 3', 'Nuxt 3', 'TypeScript', 'Storybook', 'Spring Boot', 'REST APIs', 'Vitest'];

const experiences = [
  {
    title: 'Associate Software Engineer (Frontend Developer)',
    company: 'Tech Mahindra - VF Corporation Client',
    period: 'July 2025 - Present',
    location: 'Bengaluru, India',
    meta: 'Nuxt 3 SSR | Vue 3 | TypeScript | Accessibility',
    points: [
      'Built features on Canvas, a multi-brand Nuxt 3 SSR e-commerce platform for The North Face, Timberland, and Vans using domain-driven layered architecture with brand and region overrides.',
      'Developed reusable Vue 3 and TypeScript components following atomic design, documented with Storybook and API-mocked using MSW.',
      'Ensured WCAG 2.1 AA compliance through semantic HTML5, ARIA roles, keyboard navigation, and focus management.',
      'Integrated LaunchDarkly feature flags and consumed type-safe REST APIs from OpenAPI and Swagger-generated clients.',
      'Optimized performance through lazy hydration, Cloudinary images, and Akamai CDN caching.',
      'Enforced frontend quality using Vitest, ESLint, and SonarQube.',
    ],
    stack: ['Vue 3', 'Nuxt 3', 'TypeScript', 'Storybook', 'MSW', 'LaunchDarkly', 'WCAG 2.1 AA', 'Vitest'],
  },
  {
    title: 'Associate Software Engineer (Java Backend)',
    company: 'Tech Mahindra - Blue Shield of California Client',
    period: 'September 2024 - July 2025',
    location: 'Bengaluru, India',
    meta: 'Spring Boot | Microservices | REST APIs',
    points: [
      'Developed scalable Spring Boot microservices for a greenfield enterprise healthcare application.',
      'Designed and delivered 25+ RESTful APIs covering Audit, Contact Management, Role Types, and Eligibility workflows.',
      'Optimized SQL queries and indexing on datasets with 100K+ records, improving API response time by approximately 30%.',
      'Implemented JWT authentication and role-based authorization with Spring Security.',
      'Contributed to API documentation, unit testing, Agile sprint planning, and production-ready deliveries.',
    ],
    stack: ['Java', 'Spring Boot', 'Spring Security', 'Microservices', 'REST APIs', 'JWT', 'SQL'],
  },
  {
    title: 'Frontend Developer Intern',
    company: 'Ava Intern',
    period: 'January 2024 - March 2024',
    location: 'Remote',
    meta: 'React and JavaScript',
    points: [
      'Developed 15+ React applications using modern JavaScript and practical UI patterns.',
      'Implemented infinite scroll, debouncing, throttling, state optimization, and dynamic rendering techniques.',
      'Reduced component load time by 30% through state optimization techniques.',
      'Enhanced UX metrics by 25% through dynamic rendering strategies.',
    ],
    stack: ['React.js', 'JavaScript', 'Performance Optimization', 'Dynamic Rendering', 'UX Metrics'],
  },
];

const projects = [
  {
    title: 'QuickHire',
    date: 'Job Portal',
    stack: 'Spring Boot, MySQL, Thymeleaf, HTML, CSS, JavaScript',
    href: 'https://github.com/M-u-k-u-n-d/Jobportal',
    points: [
      'Developed a job portal with recruiter and job seeker roles, supporting registration, login, and dashboard-based operations.',
      'Enabled job posting, resume uploads, WFH and onsite job filters, and profile management with CRUD operations.',
      'Improved backend performance using optimized database queries and structured RESTful endpoints.',
    ],
  },
  {
    title: 'KitabSangrah',
    date: 'Library Management System',
    stack: 'Spring Boot, React.js, MySQL, Tailwind CSS, JWT',
    href: 'https://github.com/M-u-k-u-n-d/kitabsangrah-',
    points: [
      'Built a full-stack application to manage library books, issue tracking, user authentication, and admin controls.',
      'Implemented a dynamic React frontend with search, filters, and pagination, secured with JWT authentication.',
      'Used REST APIs for CRUD operations on books and student profiles, enhancing system usability.',
    ],
  },
  {
    title: 'NotesLock',
    date: 'Secure Notes Platform',
    stack: 'Spring Boot, React.js, JWT, Tailwind CSS, MySQL',
    href: 'https://github.com/M-u-k-u-n-d/notesLock',
    points: [
      'Built a secure note-taking application with JWT authentication and Spring Security.',
      'Implemented complete create, read, update, and delete workflows with a responsive React and Tailwind CSS interface.',
      'Added real-time feedback, global exception handling, validation, and pagination.',
      'Optimized MySQL queries and indexing, improving data retrieval performance by approximately 35%.',
    ],
  },
  {
    title: 'rideMarket',
    date: 'Aug 2025 - Sep 2025',
    stack: 'Nuxt 3, Supabase, Tailwind CSS, PostgreSQL',
    href: 'https://github.com/M-u-k-u-n-d/rideMarket',
    points: [
      'Designed and developed a car rental platform with dynamic filtering by city, make, and price using Nuxt 3.',
      'Integrated Supabase authentication with email/password and OAuth for secure user session management.',
      'Used PostgreSQL to store car details, images, and booking data with relational integrity.',
      'Implemented an image upload and retrieval pipeline to improve dashboard usability for admin users.',
      'Built a responsive Tailwind CSS interface achieving a 100% Lighthouse accessibility score.',
      'Deployed with SEO-friendly server-side rendering for faster page loads and better rankings.',
    ],
  },
  {
    title: 'StoneStore',
    date: 'Jun 2025 - Jul 2025',
    stack: 'Vue.js, Pinia, Firebase, Tailwind CSS, Cloudinary',
    href: 'https://github.com/M-u-k-u-n-d/stoneStore',
    points: [
      'Built a full-featured stone catalog platform with CRUD functionality for stone listings.',
      'Integrated Firebase for authentication, real-time database updates, and secure data storage.',
      'Used Cloudinary to store and deliver optimized images, reducing image load time by 35%.',
      'Managed global application state using Pinia, improving component reactivity and maintainability.',
      'Designed a responsive, mobile-friendly Tailwind CSS interface for a smooth experience across devices.',
      'Deployed with production-ready configuration for a seamless user experience.',
    ],
  },
];

const skillGroups = [
  {
    title: 'Languages',
    icon: Code2,
    skills: ['Java', 'JavaScript', 'TypeScript', 'C++', 'SQL', 'Python'],
  },
  {
    title: 'Frameworks and Tech',
    icon: Server,
    skills: ['Spring Boot', 'Spring Security', 'Vue 3', 'Nuxt 3', 'React.js', 'Pinia', 'Tailwind CSS', 'UnoCSS'],
  },
  {
    title: 'APIs and Data',
    icon: Database,
    skills: ['REST APIs', 'JWT', 'Microservices', 'SSR', 'MySQL', 'Supabase', 'Firebase'],
  },
  {
    title: 'Tools',
    icon: Wrench,
    skills: ['Git', 'Azure DevOps', 'LaunchDarkly', 'Postman', 'VS Code', 'Figma', 'SonarQube', 'ESLint'],
  },
  {
    title: 'Frontend Quality and Testing',
    icon: Layers3,
    skills: ['WCAG 2.1', 'SEO', 'Storybook', 'Vitest', 'MSW', 'CI/CD', 'Agile/Scrum'],
  },
  {
    title: 'Core Competencies',
    icon: TerminalSquare,
    skills: ['DSA', 'OOP', 'DBMS', 'Domain-Driven Design', 'Atomic Design', 'Accessibility'],
  },
];

const education = [
  {
    title: 'Bachelor of Technology in Computer Science',
    school: 'Dr. A.P.J. Abdul Kalam Technical University',
    period: '2020 - 2024',
    location: 'Ajay Kumar Garg Engineering College',
    score: 'CGPA: 8.0',
    coursework: 'Data Structures and Algorithms, OOPS, DBMS, Operating Systems, Computer Networks',
  },
];

const achievements = [
  {
    title: 'LeetCode (Knight)',
    detail: 'Maximum rating 1892, top 6% among 5M+ users.',
    href: 'https://leetcode.com/u/Mukund_Tiwari/',
    icon: SiLeetcode,
  },
  {
    title: 'Codeforces (Pupil)',
    detail: 'Maximum rating 1365, top 15% global rank.',
    href: 'https://codeforces.com/profile/thrive_01',
    icon: SiCodeforces,
  },
  {
    title: 'CodeChef (3-Star)',
    detail: 'Maximum rating 1698 on CodeChef.',
    href: 'https://www.codechef.com/users/thrive_01',
    icon: SiCodechef,
  },
  {
    title: 'HackerRank',
    detail: 'Achieved 5⭐ in Java and Problem Solving.',
    href: 'https://www.hackerrank.com/profile/Mukund2012056',
    icon: SiHackerrank,
  },
];

const sectionClass = 'scroll-mt-24 px-4 py-20 sm:px-6 lg:px-8 lg:py-28';
const containerClass = 'mx-auto w-full max-w-6xl';

function Header({ theme, onToggleTheme }) {
  const [activeSection, setActiveSection] = useState('about');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target?.id) {
          setActiveSection(visible.target.id);
        }
      },
      { rootMargin: '-35% 0px -45% 0px', threshold: [0.1, 0.35, 0.65] },
    );

    document.querySelectorAll('section[id]').forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-900/10 bg-white/90 px-4 py-3 font-['Inter'] shadow-sm backdrop-blur-xl transition-colors dark:border-white/10 dark:bg-slate-950/90 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl grid-cols-[auto_auto_auto_auto] items-center gap-3 lg:grid-cols-[auto_1fr_auto_auto] lg:gap-6">
        <button
          type="button"
          className="flex items-center gap-3 text-left font-['Space_Grotesk'] text-base font-bold text-slate-950 transition-colors dark:text-white"
          onClick={() => scrollToSection('about')}
        >
          <span className="grid size-10 place-items-center rounded-full bg-slate-950 text-sm font-bold text-white dark:bg-white dark:text-slate-950">
            MT
          </span>
          <span className="hidden sm:inline">{profile.name}</span>
        </button>

        <nav
          className={`absolute left-4 right-4 top-[calc(100%+0.5rem)] rounded-xl border border-slate-200 bg-white p-2 shadow-2xl shadow-slate-900/10 transition-colors dark:border-white/10 dark:bg-slate-900 dark:shadow-black/30 lg:static lg:flex lg:justify-center lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none lg:dark:bg-transparent ${
            menuOpen ? 'grid' : 'hidden'
          }`}
          aria-label="Primary navigation"
        >
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
          className="ml-auto inline-flex size-10 items-center justify-center rounded-full bg-teal-700 font-bold text-white shadow-lg shadow-teal-700/20 transition hover:bg-teal-800 sm:w-auto sm:px-4 sm:gap-2"
          href={profile.resume}
          target="_blank"
          rel="noreferrer"
        >
          <Download size={17} />
          <span className="hidden sm:inline">Resume</span>
        </a>

        <button
          className="inline-flex size-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-slate-300 hover:bg-slate-50 dark:border-white/10 dark:bg-white/10 dark:text-slate-100 dark:hover:bg-white/15"
          type="button"
          aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          onClick={onToggleTheme}
        >
          {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
        </button>
        
        <button
          className="grid size-10 place-items-center rounded-full border border-slate-200 text-slate-700 transition-colors dark:border-white/15 dark:text-slate-200 lg:hidden"
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setMenuOpen((value) => !value)}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="about" className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className={`${containerClass} grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center`}>
        <div>
          <p className="mb-5 text-xs font-extrabold uppercase tracking-[0.18em] text-orange-700">
            Software Engineer | Nuxt | Vue | Spring Boot
          </p>
          <h1 className="max-w-4xl font-['Space_Grotesk'] text-5xl font-bold leading-[0.96] tracking-normal text-slate-950 transition-colors dark:text-white sm:text-6xl lg:text-7xl">
            Building accessible storefronts and scalable enterprise APIs.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">{profile.tagline}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-teal-700 px-5 font-bold text-white shadow-xl shadow-teal-700/20 transition hover:bg-teal-800"
              href={`mailto:${profile.email}`}
            >
              <Mail size={18} />
              Contact Me
            </a>
            <button
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-5 font-bold text-slate-950 transition hover:border-slate-300 hover:bg-slate-50 dark:border-white/10 dark:bg-white/10 dark:text-white dark:hover:bg-white/15"
              type="button"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <BriefcaseBusiness size={18} />
              View Work
            </button>
          </div>

          <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm font-bold text-slate-600 dark:text-slate-300">
            <span className="inline-flex items-center gap-2">
              <MapPin size={16} />
              {profile.location}
            </span>
            <span className="inline-flex items-center gap-2">
              <Server size={16} />
              Nuxt 3, Vue 3, TypeScript, Spring Boot
            </span>
          </div>
        </div>

        <div className="rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-2xl shadow-slate-900/10 transition-colors dark:border-white/10 dark:bg-white/5 dark:shadow-black/30">
          <div className="rounded-2xl bg-slate-950 p-5 font-['JetBrains_Mono'] text-sm text-slate-200 ring-1 ring-white/10">
            <div className="mb-4 flex gap-2">
              <span className="size-3 rounded-full bg-red-400" />
              <span className="size-3 rounded-full bg-amber-300" />
              <span className="size-3 rounded-full bg-emerald-400" />
            </div>
            <p className="text-teal-300">frontend.focus()</p>
            <p className="mt-3 text-slate-400">stack = [</p>
            {frontendStack.map((item) => (
              <p key={item} className="pl-5">
                "{item}",
              </p>
            ))}
            <p className="text-slate-400">]</p>
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
            {heroHighlights.map((item) => (
              <div key={item.value} className="rounded-xl border border-slate-200 bg-slate-50 p-4 transition-colors dark:border-white/10 dark:bg-slate-900/70">
                <strong className="font-['Space_Grotesk'] text-3xl text-slate-950 dark:text-white">{item.value}</strong>
                <p className="mt-2 text-sm leading-5 text-slate-600 dark:text-slate-300">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionHeader({ kicker, title, description }) {
  return (
    <div className="mb-10">
      <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.18em] text-orange-700 dark:text-orange-300">{kicker}</p>
      <h2 className="max-w-3xl font-['Space_Grotesk'] text-3xl font-bold leading-tight text-slate-950 dark:text-white sm:text-5xl">
        {title}
      </h2>
      {description ? <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">{description}</p> : null}
    </div>
  );
}

function ExperienceSection() {
  return (
    <section id="experience" className={`${sectionClass} bg-white/65 dark:bg-slate-950/40`}>
      <div className={containerClass}>
        <SectionHeader
          kicker="Experience"
          title="Engineering across accessible commerce and enterprise APIs"
          description="A focused timeline of Nuxt and Vue storefront development, accessibility, Spring Boot microservices, and performance work."
        />
        <div className="grid gap-5 lg:grid-cols-2">
          {experiences.map((item) => (
            <article
              className="rounded-lg border border-slate-200 bg-white p-6 shadow-xl shadow-slate-900/5 transition-colors dark:border-white/10 dark:bg-slate-900/80 dark:shadow-black/20"
              key={`${item.company}-${item.title}`}
            >
              <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                <div>
                  <h3 className="font-['Space_Grotesk'] text-2xl font-bold text-slate-950 dark:text-white">{item.title}</h3>
                  <p className="mt-1 font-bold text-teal-700 dark:text-teal-300">{item.company}</p>
                </div>
                <span className="font-bold text-orange-700 dark:text-orange-300">{item.period}</span>
              </div>
              <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">
                {item.location} | {item.meta}
              </p>
              <ul className="mt-5 grid gap-3 pl-5 text-slate-700 marker:text-teal-700 dark:text-slate-200 dark:marker:text-teal-300">
                {item.points.map((point) => (
                  <li className="list-disc leading-7" key={point}>
                    {point}
                  </li>
                ))}
              </ul>
              <TagList items={item.stack} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectsSection() {
  return (
    <section id="projects" className={sectionClass}>
      <div className={containerClass}>
        <SectionHeader
          kicker="Projects"
          title="Projects built across frontend, backend, and full-stack systems"
          description="Selected work spanning accessible interfaces, secure APIs, authentication, SSR, performance optimization, and real-world product workflows."
        />
        <div className="grid gap-5">
          {projects.map((project) => (
            <article
              className="flex min-h-full flex-col rounded-lg border border-slate-200 bg-white p-6 shadow-xl shadow-slate-900/5 transition-colors dark:border-white/10 dark:bg-slate-900/80 dark:shadow-black/20"
              key={project.title}
            >
              <div className="flex items-center justify-between gap-4">
                <span className="font-bold text-orange-700 dark:text-orange-300">{project.date}</span>
                <ArrowUpRight size={18} className="text-slate-400 dark:text-slate-500" />
              </div>
              <h3 className="mt-7 font-['Space_Grotesk'] text-3xl font-bold text-slate-950 dark:text-white">{project.title}</h3>
              <p className="mt-2 leading-7 text-slate-600 dark:text-slate-300">{project.stack}</p>
              <ul className="mt-5 grid gap-3 pl-5 text-slate-700 marker:text-teal-700 dark:text-slate-200 dark:marker:text-teal-300">
                {project.points.map((point) => (
                  <li className="list-disc leading-7" key={point}>
                    {point}
                  </li>
                ))}
              </ul>
              <a
                className="mt-auto inline-flex w-fit items-center gap-2 pt-6 font-bold text-slate-950 transition hover:text-teal-700 dark:text-white dark:hover:text-teal-300"
                href={project.href}
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
                GitHub
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillsSection() {
  return (
    <section id="skills" className={`${sectionClass} bg-white/65 dark:bg-slate-950/40`}>
      <div className={containerClass}>
        <SectionHeader
          kicker="Skills"
          title="A balanced frontend and backend engineering toolkit"
          description="Technologies and competencies from accessible UI engineering through secure microservice development."
        />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map(({ title, icon: Icon, skills }) => (
            <article className="rounded-lg border border-slate-200 bg-white p-5 shadow-xl shadow-slate-900/5 transition-colors dark:border-white/10 dark:bg-slate-900/80 dark:shadow-black/20" key={title}>
              <div className="mb-4 flex items-center gap-3 text-orange-700 dark:text-orange-300">
                <Icon size={22} />
                <h3 className="font-['Space_Grotesk'] text-xl font-bold text-slate-950 dark:text-white">{title}</h3>
              </div>
              <TagList items={skills} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function EducationSection() {
  return (
    <section id="education" className={sectionClass}>
      <div className={containerClass}>
        <SectionHeader
          kicker="Education"
          title="Academic foundation"
          description="Formal education and core coursework supporting software engineering fundamentals."
        />
        <div className="grid gap-5">
          {education.map((item) => (
            <article
              className="grid gap-4 rounded-lg border border-slate-200 bg-white p-6 shadow-xl shadow-slate-900/5 transition-colors dark:border-white/10 dark:bg-slate-900/80 dark:shadow-black/20 md:grid-cols-[auto_1fr]"
              key={item.title}
            >
              <div className="grid size-12 place-items-center rounded-full bg-slate-950 text-white dark:bg-white dark:text-slate-950">
                <GraduationCap size={22} />
              </div>
              <div>
                <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h3 className="font-['Space_Grotesk'] text-2xl font-bold text-slate-950 dark:text-white">{item.title}</h3>
                    <p className="mt-1 font-bold text-teal-700 dark:text-teal-300">{item.school}</p>
                  </div>
                  <span className="font-bold text-orange-700 dark:text-orange-300">{item.period}</span>
                </div>
                <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">
                  {item.location} | {item.score}
                </p>
                <p className="mt-3 leading-7 text-slate-700 dark:text-slate-200">Coursework: {item.coursework}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function AchievementsSection() {
  return (
    <section id="achievements" className={`${sectionClass} bg-white/65 dark:bg-slate-950/40`}>
      <div className={containerClass}>
        <SectionHeader
          kicker="Achievements"
          title="Competitive programming profiles"
          description="Problem-solving milestones that support frontend engineering with strong algorithmic thinking."
        />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {achievements.map(({ title, detail, href, icon: Icon }) => (
            <a
              className="group rounded-lg border border-slate-200 bg-white p-6 shadow-xl shadow-slate-900/5 transition hover:-translate-y-1 hover:border-teal-200 hover:shadow-2xl hover:shadow-teal-900/10 dark:border-white/10 dark:bg-slate-900/80 dark:shadow-black/20 dark:hover:border-teal-300/40"
              key={title}
              href={href}
              target="_blank"
              rel="noreferrer"
            >
              <div className="mb-5 inline-grid size-12 place-items-center rounded-full bg-slate-950 text-2xl text-white transition group-hover:bg-teal-700 dark:bg-white dark:text-slate-950 dark:group-hover:bg-teal-300">
                <Icon />
              </div>
              <h3 className="font-['Space_Grotesk'] text-2xl font-bold text-slate-950 dark:text-white">{title}</h3>
              <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">{detail}</p>
              <span className="mt-5 inline-flex items-center gap-2 font-bold text-teal-700 dark:text-teal-300">
                View Profile
                <ArrowUpRight size={16} />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const contactLinks = useMemo(
    () => [
      { label: profile.phone, href: `tel:${profile.phone.replaceAll('-', '')}`, icon: Phone },
      { label: profile.email, href: `mailto:${profile.email}`, icon: Mail },
      { label: 'linkedin.com/in/mukund-tiwari-06b433219', href: profile.socials[0].href, icon: FaLinkedinIn },
      { label: 'github.com/M-u-k-u-n-d', href: profile.socials[1].href, icon: FaGithub },
    ],
    [],
  );

  return (
    <section id="contact" className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className={`${containerClass} rounded-[1.75rem] bg-slate-950 p-6 text-white shadow-2xl shadow-slate-950/15 dark:border dark:border-white/10 dark:bg-white/5 sm:p-10 lg:p-14`}>
        <div className="mb-10">
          <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.18em] text-orange-300">Contact</p>
          <h2 className="max-w-3xl font-['Space_Grotesk'] text-3xl font-bold leading-tight text-white sm:text-5xl">
            Let's build something useful
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">
            Open to software engineering roles spanning Vue/Nuxt frontend work, accessibility, and Java backend systems.
          </p>
        </div>
        <div className="grid gap-3 md:grid-cols-2">
          {contactLinks.map(({ label, href, icon: Icon }) => (
            <a
              className="flex min-h-16 items-center gap-3 overflow-hidden rounded-lg border border-white/15 bg-white/10 p-4 font-bold text-white transition hover:bg-white/15 dark:bg-white/[0.07] dark:hover:bg-white/12"
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
            >
              <Icon size={20} className="shrink-0" />
              <span className="break-words">{label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function TagList({ items }) {
  return (
    <div className="mt-5 flex flex-wrap gap-2">
      {items.map((item) => (
        <span
          className="inline-flex min-h-8 items-center rounded-full border border-teal-700/15 bg-teal-50 px-3 text-sm font-bold text-teal-800 dark:border-teal-300/20 dark:bg-teal-300/10 dark:text-teal-200"
          key={item}
        >
          {item}
        </span>
      ))}
    </div>
  );
}

function App() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') {
      return 'light';
    }

    return localStorage.getItem('theme') || 'light';
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-teal-50/35 to-slate-50 font-['Inter'] text-slate-950 transition-colors dark:from-slate-950 dark:via-slate-950 dark:to-slate-900 dark:text-slate-100">
      <Header theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Hero />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <EducationSection />
        <AchievementsSection />
        <ContactSection />
      </main>
      <footer className="bg-slate-950 px-4 py-6 text-center text-sm text-white/70 dark:border-t dark:border-white/10">
        <span>© {new Date().getFullYear()} Mukund Tiwari. All rights reserved.</span>
      </footer>
    </div>
  );
}

export default App;
