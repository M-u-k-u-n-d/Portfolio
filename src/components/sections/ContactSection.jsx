import { Mail, Phone } from 'lucide-react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { containerClass } from '../../config/layout';
import { profile } from '../../data/profile';

const contactLinks = [
  { label: profile.phone, href: `tel:${profile.phone.replaceAll('-', '')}`, icon: Phone },
  { label: profile.email, href: `mailto:${profile.email}`, icon: Mail },
  { label: 'linkedin.com/in/mukund-tiwari-06b433219', href: profile.socials[0].href, icon: FaLinkedinIn },
  { label: 'github.com/M-u-k-u-n-d', href: profile.socials[1].href, icon: FaGithub },
];

export default function ContactSection() {
  return (
    <section id="contact" className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className={`${containerClass} rounded-[1.75rem] bg-slate-950 p-6 text-white shadow-2xl dark:border dark:border-white/10 dark:bg-white/5 sm:p-10 lg:p-14`}>
        <div className="mb-10"><p className="mb-3 text-xs font-extrabold uppercase tracking-[0.18em] text-orange-300">Contact</p><h2 className="max-w-3xl font-['Space_Grotesk'] text-3xl font-bold sm:text-5xl">Let's build something useful</h2><p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">Open to software engineering roles spanning Vue/Nuxt frontend work, accessibility, and Java backend systems.</p></div>
        <div className="grid gap-3 md:grid-cols-2">{contactLinks.map(({ label, href, icon: Icon }) => <a className="flex min-h-16 items-center gap-3 rounded-lg border border-white/15 bg-white/10 p-4 font-bold" key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer"><Icon size={20} className="shrink-0" /><span className="break-words">{label}</span></a>)}</div>
      </div>
    </section>
  );
}
