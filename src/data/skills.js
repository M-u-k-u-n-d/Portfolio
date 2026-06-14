import { Code2, Database, Layers3, Server, TerminalSquare, Wrench } from 'lucide-react';

export const skillGroups = [
  { title: 'Languages', icon: Code2, skills: ['Java', 'JavaScript', 'TypeScript', 'C++', 'SQL', 'Python'] },
  {
    title: 'Frameworks and Tech',
    icon: Server,
    skills: ['Spring Boot', 'Spring Security', 'Vue 3', 'Nuxt 3', 'React.js', 'Pinia', 'Tailwind CSS', 'UnoCSS'],
  },
  { title: 'APIs and Data', icon: Database, skills: ['REST APIs', 'JWT', 'Microservices', 'SSR', 'MySQL', 'Supabase', 'Firebase'] },
  { title: 'Tools', icon: Wrench, skills: ['Git', 'Azure DevOps', 'LaunchDarkly', 'Postman', 'VS Code', 'Figma', 'SonarQube', 'ESLint'] },
  { title: 'Frontend Quality and Testing', icon: Layers3, skills: ['WCAG 2.1', 'SEO', 'Storybook', 'Vitest', 'MSW', 'CI/CD', 'Agile/Scrum'] },
  { title: 'Core Competencies', icon: TerminalSquare, skills: ['DSA', 'OOP', 'DBMS', 'Domain-Driven Design', 'Atomic Design', 'Accessibility'] },
];
