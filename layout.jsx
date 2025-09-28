import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Tarih Atlası — Ansiklopedi",
  description: "İmparatorluklar, savaşlar, haritalar ve zaman tünelleriyle yaşayan bir tarih ansiklopedisi.",
  openGraph: {
    title: "Tarih Atlası — Ansiklopedi",
    description: "Haritalarla anlatılan tarih arşivi.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 container-max py-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
