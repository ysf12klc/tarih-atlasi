import Link from "next/link";

export function SectionCard({title, description, href}){
  return (
    <Link href={href} className="block card hover:shadow-2xl hover:shadow-black/40 transition-shadow">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-neutral-300">{description}</p>
    </Link>
  );
}
