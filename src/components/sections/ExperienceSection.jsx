import { containerClass, sectionClass } from '../../config/layout';
import { experiences } from '../../data/experience';
import SectionHeader from '../ui/SectionHeader';
import TagList from '../ui/TagList';

export default function ExperienceSection() {
  return (
    <section id="experience" className={`${sectionClass} bg-white/65 dark:bg-slate-950/40`}>
      <div className={containerClass}>
        <SectionHeader kicker="Experience" title="Engineering across accessible commerce and enterprise APIs" description="A focused timeline of Nuxt and Vue storefront development, accessibility, Spring Boot microservices, and performance work." />
        <div className="grid gap-5 lg:grid-cols-2">
          {experiences.map((item) => (
            <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-xl shadow-slate-900/5 dark:border-white/10 dark:bg-slate-900/80" key={`${item.company}-${item.title}`}>
              <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                <div><h3 className="font-['Space_Grotesk'] text-2xl font-bold text-slate-950 dark:text-white">{item.title}</h3><p className="mt-1 font-bold text-teal-700 dark:text-teal-300">{item.company}</p></div>
                <span className="font-bold text-orange-700 dark:text-orange-300">{item.period}</span>
              </div>
              <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">{item.location} | {item.meta}</p>
              <ul className="mt-5 grid gap-3 pl-5 text-slate-700 marker:text-teal-700 dark:text-slate-200">{item.points.map((point) => <li className="list-disc leading-7" key={point}>{point}</li>)}</ul>
              <TagList items={item.stack} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
