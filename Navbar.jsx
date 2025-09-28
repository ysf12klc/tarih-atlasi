"use client";
import Link from "next/link";
import { Menu } from "lucide-react";
import { useState } from "react";

export function Navbar(){
  const [open, setOpen] = useState(false);
  const nav = [
    {href: "/", label:"Ana Sayfa"},
    {href: "/imparatorluklar", label:"İmparatorluklar"},
    {href: "/savaslar", label:"Savaşlar"},
    {href: "/zaman-tuneli", label:"Zaman Tüneli"},
    {href: "/videolar", label:"Videolar"},
    {href: "/hakkinda", label:"Hakkında"},
  ];

  return (
    <header className="border-b border-neutral-800/60 sticky top-0 z-40 backdrop-blur bg-black/40">
      <div className="container-max flex items-center justify-between py-4">
        <Link href="/" className="flex items-baseline gap-2">
          <span className="text-2xl font-bold tracking-tight">Tarih Atlası</span>
          <span className="text-sm text-[var(--muted)]">ansiklopedi</span>
        </Link>
        <nav className="hidden md:flex gap-6">
          {nav.map(n => (
            <Link key={n.href} href={n.href} className="hover:text-[var(--accent)] transition-colors">{n.label}</Link>
          ))}
        </nav>
        <button className="md:hidden" onClick={()=>setOpen(!open)} aria-label="menü">
          <Menu />
        </button>
      </div>
      {open && (
        <div className="md:hidden container-max pb-4">
          <div className="flex flex-col gap-3">
            {nav.map(n => (
              <Link key={n.href} href={n.href} className="hover:text-[var(--accent)]" onClick={()=>setOpen(false)}>{n.label}</Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
