import { BriefcaseBusiness, Mail, MapPin, Server } from 'lucide-react';
import { containerClass } from '../../config/layout';
import { featuredStack, heroHighlights, profile } from '../../data/profile';

export default function Hero() {
  return (
    <section id="about" className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className={`${containerClass} grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center`}>
        <div>
          <p className="mb-5 text-xs font-extrabold uppercase tracking-[0.18em] text-orange-700">Software Engineer | Nuxt | Vue | Spring Boot</p>
          <h1 className="max-w-4xl font-['Space_Grotesk'] text-5xl font-bold leading-[0.96] text-slate-950 dark:text-white sm:text-6xl lg:text-7xl">
            Building accessible storefronts and scalable enterprise APIs.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">{profile.tagline}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a className="inline-flex min-h-11 items-center gap-2 rounded-full bg-teal-700 px-5 font-bold text-white shadow-xl shadow-teal-700/20" href={`mailto:${profile.email}`}>
              <Mail size={18} /> Contact Me
            </a>
            <button className="inline-flex min-h-11 items-center gap-2 rounded-full border border-slate-200 bg-white px-5 font-bold text-slate-950 dark:border-white/10 dark:bg-white/10 dark:text-white" type="button" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
              <BriefcaseBusiness size={18} /> View Work
            </button>
          </div>
          <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm font-bold text-slate-600 dark:text-slate-300">
            <span className="inline-flex items-center gap-2"><MapPin size={16} />{profile.location}</span>
            <span className="inline-flex items-center gap-2"><Server size={16} />Nuxt 3, Vue 3, TypeScript, Spring Boot</span>
          </div>
        </div>

        <div className="rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-2xl shadow-slate-900/10 dark:border-white/10 dark:bg-white/5">
          <div className="rounded-2xl bg-slate-950 p-5 font-['JetBrains_Mono'] text-sm text-slate-200 ring-1 ring-white/10">
            <div className="mb-4 flex gap-2"><span className="size-3 rounded-full bg-red-400" /><span className="size-3 rounded-full bg-amber-300" /><span className="size-3 rounded-full bg-emerald-400" /></div>
            <p className="text-teal-300">engineering.focus()</p>
            <p className="mt-3 text-slate-400">stack = [</p>
            {featuredStack.map((item) => <p key={item} className="pl-5">"{item}",</p>)}
            <p className="text-slate-400">]</p>
          </div>
          <div className="mt-5 grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
            {heroHighlights.map((item) => (
              <div key={item.value} className="rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-white/10 dark:bg-slate-900/70">
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
