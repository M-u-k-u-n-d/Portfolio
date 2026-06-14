export default function SectionHeader({ kicker, title, description }) {
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
