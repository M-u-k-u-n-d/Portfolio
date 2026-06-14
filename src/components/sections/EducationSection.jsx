import { GraduationCap } from 'lucide-react';
import { containerClass, sectionClass } from '../../config/layout';
import { education } from '../../data/education';
import SectionHeader from '../ui/SectionHeader';

export default function EducationSection() {
  return (
    <section id="education" className={sectionClass}>
      <div className={containerClass}>
        <SectionHeader kicker="Education" title="Academic foundation" description="Formal education and core coursework supporting software engineering fundamentals." />
        {education.map((item) => (
          <article className="grid gap-4 rounded-lg border border-slate-200 bg-white p-6 shadow-xl shadow-slate-900/5 dark:border-white/10 dark:bg-slate-900/80 md:grid-cols-[auto_1fr]" key={item.title}>
            <div className="grid size-12 place-items-center rounded-full bg-slate-950 text-white dark:bg-white dark:text-slate-950"><GraduationCap size={22} /></div>
            <div><div className="flex flex-col gap-2 md:flex-row md:justify-between"><div><h3 className="font-['Space_Grotesk'] text-2xl font-bold text-slate-950 dark:text-white">{item.title}</h3><p className="mt-1 font-bold text-teal-700 dark:text-teal-300">{item.school}</p></div><span className="font-bold text-orange-700 dark:text-orange-300">{item.period}</span></div><p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">{item.location} | {item.score}</p><p className="mt-3 leading-7 text-slate-700 dark:text-slate-200">Coursework: {item.coursework}</p></div>
          </article>
        ))}
      </div>
    </section>
  );
}
