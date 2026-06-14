import { ArrowUpRight } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { containerClass, sectionClass } from '../../config/layout';
import { projects } from '../../data/projects';
import SectionHeader from '../ui/SectionHeader';

export default function ProjectsSection() {
  return (
    <section id="projects" className={sectionClass}>
      <div className={containerClass}>
        <SectionHeader kicker="Projects" title="Projects built across frontend, backend, and full-stack systems" description="Selected work spanning accessible interfaces, secure APIs, authentication, SSR, performance optimization, and real-world product workflows." />
        <div className="grid gap-5 lg:grid-cols-2">
          {projects.map((project) => (
            <article className="flex min-h-full flex-col rounded-lg border border-slate-200 bg-white p-6 shadow-xl shadow-slate-900/5 dark:border-white/10 dark:bg-slate-900/80" key={project.title}>
              <div className="flex items-center justify-between gap-4"><span className="font-bold text-orange-700 dark:text-orange-300">{project.date}</span><ArrowUpRight size={18} className="text-slate-400" /></div>
              <h3 className="mt-7 font-['Space_Grotesk'] text-3xl font-bold text-slate-950 dark:text-white">{project.title}</h3>
              <p className="mt-2 leading-7 text-slate-600 dark:text-slate-300">{project.stack}</p>
              <ul className="mt-5 grid gap-3 pl-5 text-slate-700 marker:text-teal-700 dark:text-slate-200">{project.points.map((point) => <li className="list-disc leading-7" key={point}>{point}</li>)}</ul>
              <a className="mt-auto inline-flex w-fit items-center gap-2 pt-6 font-bold text-slate-950 hover:text-teal-700 dark:text-white" href={project.href} target="_blank" rel="noreferrer"><FaGithub /> GitHub</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
