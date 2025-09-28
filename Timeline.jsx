export function Timeline({ items = [] }){
  return (
    <ol className="relative border-s border-neutral-800/70 ml-3">
      {items.map((it, idx) => (
        <li key={idx} className="mb-8 ms-6">
          <span className="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full border border-neutral-700 bg-neutral-900">
            <span className="h-2 w-2 rounded-full bg-[var(--accent)]"></span>
          </span>
          <h4 className="text-lg font-semibold">{it.title} <span className="text-neutral-400 font-normal">{it.year}</span></h4>
          {it.subtitle && <p className="text-neutral-300">{it.subtitle}</p>}
          {it.content && <p className="mt-2 text-neutral-200">{it.content}</p>}
        </li>
      ))}
    </ol>
  );
}
