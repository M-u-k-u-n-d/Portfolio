import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

export const profile = {
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

export const navItems = [
  ['about', 'Home'],
  ['experience', 'Experience'],
  ['projects', 'Projects'],
  ['skills', 'Skills'],
  ['education', 'Education'],
  ['achievements', 'Achievements'],
  ['contact', 'Contact'],
];

export const heroHighlights = [
  { value: '25+', label: 'REST APIs delivered for enterprise workflows' },
  { value: '30%', label: 'API response-time improvement on large datasets' },
  { value: 'WCAG', label: '2.1 AA accessible frontend engineering' },
];

export const featuredStack = ['Vue 3', 'Nuxt 3', 'TypeScript', 'Storybook', 'Spring Boot', 'REST APIs', 'Vitest'];
