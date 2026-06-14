import { ArrowUpRight } from 'lucide-react';
import { containerClass, sectionClass } from '../../config/layout';
import { achievements } from '../../data/achievements';
import SectionHeader from '../ui/SectionHeader';

export default function AchievementsSection() {
  return (
    <section id="achievements" className={`${sectionClass} bg-white/65 dark:bg-slate-950/40`}>
      <div className={containerClass}>
        <SectionHeader kicker="Achievements" title="Competitive programming profiles" description="Problem-solving milestones that support software engineering with strong algorithmic thinking." />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {achievements.map(({ title, detail, href, icon: Icon }) => (
            <a className="group rounded-lg border border-slate-200 bg-white p-6 shadow-xl shadow-slate-900/5 transition hover:-translate-y-1 dark:border-white/10 dark:bg-slate-900/80" key={title} href={href} target="_blank" rel="noreferrer">
              <div className="mb-5 inline-grid size-12 place-items-center rounded-full bg-slate-950 text-2xl text-white group-hover:bg-teal-700 dark:bg-white dark:text-slate-950"><Icon /></div>
              <h3 className="font-['Space_Grotesk'] text-2xl font-bold text-slate-950 dark:text-white">{title}</h3>
              <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">{detail}</p>
              <span className="mt-5 inline-flex items-center gap-2 font-bold text-teal-700 dark:text-teal-300">View Profile <ArrowUpRight size={16} /></span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
