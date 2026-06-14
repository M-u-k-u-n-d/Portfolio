import { containerClass, sectionClass } from '../../config/layout';
import { skillGroups } from '../../data/skills';
import SectionHeader from '../ui/SectionHeader';
import TagList from '../ui/TagList';

export default function SkillsSection() {
  return (
    <section id="skills" className={`${sectionClass} bg-white/65 dark:bg-slate-950/40`}>
      <div className={containerClass}>
        <SectionHeader kicker="Skills" title="A balanced frontend and backend engineering toolkit" description="Technologies and competencies from accessible UI engineering through secure microservice development." />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map(({ title, icon: Icon, skills }) => (
            <article className="rounded-lg border border-slate-200 bg-white p-5 shadow-xl shadow-slate-900/5 dark:border-white/10 dark:bg-slate-900/80" key={title}>
              <div className="mb-4 flex items-center gap-3 text-orange-700 dark:text-orange-300"><Icon size={22} /><h3 className="font-['Space_Grotesk'] text-xl font-bold text-slate-950 dark:text-white">{title}</h3></div>
              <TagList items={skills} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
