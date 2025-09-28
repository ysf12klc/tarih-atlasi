export function Footer(){
  return (
    <footer className="border-t border-neutral-800/60 mt-12">
      <div className="container-max py-10 text-sm text-neutral-300 flex flex-col md:flex-row items-center justify-between gap-3">
        <p>© {new Date().getFullYear()} Tarih Atlası</p>
        <p className="text-neutral-400">“Binlerce yıl, tek atlas.”</p>
      </div>
    </footer>
  );
}
