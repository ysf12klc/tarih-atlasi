# Tarih Atlası — Next.js Ansiklopedi

Modern, hızlı ve SEO-dostu bir tarih arşivi/ansiklopedisi.  
**Teknoloji:** Next.js (App Router) + TailwindCSS

## Özellikler
- İmparatorluklar, Savaşlar, Zaman Tüneli, Videolar, Hakkında sayfaları
- Hızlı arama (istemci tarafı)
- Mobil uyumlu, koyu tema
- YouTube video gömme
- Basit JSON veri modeli (kolay içerik ekleme)

## Başlangıç
```bash
npm install
npm run dev
# http://localhost:3000
```

## İçerik Ekleme
- İmparatorluk eklemek için: `data/imparatorluklar.json`
- Savaş eklemek için: `data/savaslar.json`
- Video eklemek için: `data/videolar.json`

## Yapı
- `app/` — sayfalar (app router)
- `components/` — tekrar kullanılabilir bileşenler
- `data/` — içerik JSON'ları
- `styles/globals.css` — Tailwind ve tema

## Dağıtım
- Vercel'e doğrudan import edebilirsiniz.
- Alternatif: herhangi bir Node.js barındırıcısı `npm run build && npm start`

## Slogan
**Binlerce yıl, tek atlas.**
