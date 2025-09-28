import Link from "next/link";
import { SectionCard } from "@/components/SectionCard";
import { SearchBar } from "@/components/SearchBar";
import imparatorluklar from "@/data/imparatorluklar.json";
import savaslar from "@/data/savaslar.json";
import videolar from "@/data/videolar.json";

export default function Page(){
  const all = [
    ...imparatorluklar.map(x=>({...x, category:"İmparatorluk"})),
    ...savaslar.map(x=>({...x, category:"Savaş"})),
    ...videolar.map(x=>({...x, category:"Video"})),
  ];

  return (
    <div className="space-y-10">
      <section className="text-center pt-4">
        <h1 className="font-display text-4xl md:text-6xl tracking-tight">Tarih Atlası</h1>
        <p className="mt-3 text-[var(--muted)]">Binlerce yıl, tek atlas.</p>
        <div className="mt-6 max-w-xl mx-auto">
          <SearchBar data={all} onSelect={(item)=>{
            if(item.category === "İmparatorluk") window.location.href = `/imparatorluklar#${item.slug}`;
            else if(item.category === "Savaş") window.location.href = `/savaslar#${item.slug}`;
            else window.location.href = `/videolar#${item.slug}`;
          }} />
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-6">
        <SectionCard title="İmparatorluklar" description="Yükseliş, genişleme ve çöküş hikâyeleri." href="/imparatorluklar" />
        <SectionCard title="Savaşlar" description="Dünyayı şekillendiren dönüm noktaları." href="/savaslar" />
        <SectionCard title="Zaman Tüneli" description="Tarihi kronolojik bir akışta keşfet." href="/zaman-tuneli" />
      </section>

      <section className="card">
        <h2 className="text-2xl font-semibold mb-4">Videolar</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {videolar.map(v => (
            <article key={v.slug} id={v.slug} className="space-y-2">
              <h3 className="text-lg font-semibold">{v.title}</h3>
              <p className="text-neutral-300">{v.summary}</p>
              <div className="aspect-video w-full rounded-xl overflow-hidden">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${v.youtubeId}`}
                  title={v.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
