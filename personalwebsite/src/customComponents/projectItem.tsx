export function ProjectItem({
  title,
  link,
  desc,
  tag,
  hackwin,
}: {
  title: string;
  link?: string;
  desc: string;
  tag: string;
  hackwin?: boolean;
}) {
  return (
    <div className="relative group">
      {/* Timeline Dot */}

      <div className="absolute -left-[39px] top-0 bottom-0 w-0.5 bg-neutral-800 group-hover:bg-orange-500 transition-colors"></div>
      <div className="absolute -left-[43px] top-1 h-3 w-3 rounded-full bg-neutral-900 border border-neutral-700 group-hover:border-orange-500 transition-colors" />
      {/* Title & Link */}
      <div className="flex flex-wrap items-baseline gap-3 mb-2">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className={`text-xl font-semibold text-neutral-100 transition-colors ${link ? "hover:text-orange-400 cursor-none" : "cursor-default"}`}
        >
          {title}
          <span>
            <img
              src="pop.svg"
              className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-neutral-400 h-4 w-4 inline-block ml-2"
            />
          </span>
        </a>
        <span className="text-xs font-mono text-neutral-500 border border-neutral-800 px-2 py-0.5 rounded bg-neutral-900/50">
          {tag}
        </span>
      </div>

      {/* Description */}
      <p className="text-neutral-400 leading-relaxed">{desc}</p>
    </div>
  );
}
