export default function TagList({ items }) {
  return (
    <div className="mt-5 flex flex-wrap gap-2">
      {items.map((item) => (
        <span
          className="inline-flex min-h-8 items-center rounded-full border border-teal-700/15 bg-teal-50 px-3 text-sm font-bold text-teal-800 dark:border-teal-300/20 dark:bg-teal-300/10 dark:text-teal-200"
          key={item}
        >
          {item}
        </span>
      ))}
    </div>
  );
}
