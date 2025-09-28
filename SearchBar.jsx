"use client";
import { useState, useMemo } from "react";

export function SearchBar({ placeholder = "Arşivde ara...", data = [], onSelect }){
  const [q, setQ] = useState("");
  const filtered = useMemo(()=>{
    if(!q.trim()) return [];
    const k = q.toLowerCase();
    return data.filter(item => (item.title || item.name || "").toLowerCase().includes(k));
  }, [q, data]);

  return (
    <div className="relative">
      <input
        value={q}
        onChange={e=>setQ(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-xl border border-neutral-800 bg-neutral-900 px-4 py-3 outline-none focus:ring-2 ring-[var(--accent)]"
      />
      {q && (
        <div className="absolute mt-2 w-full bg-neutral-950 border border-neutral-800 rounded-xl max-h-64 overflow-auto">
          {filtered.length === 0 ? (
            <div className="p-3 text-neutral-400">Sonuç bulunamadı.</div>
          ) : filtered.map((item) => (
            <button
              key={item.slug}
              className="w-full text-left p-3 hover:bg-neutral-900"
              onClick={()=> onSelect?.(item)}
            >
              {(item.title || item.name)} <span className="text-neutral-400 text-sm">— {item.category}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
