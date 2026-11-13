import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { FloatingWhatsApp } from "@/components/floating-wa";
import { RevealObserver } from "@/components/reveal";
import { site } from "@/content/site";

const geist = Geist({ variable: "--font-geist", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Klinik & apotek di Gading Serpong, buka setiap hari`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  openGraph: {
    type: "website",
    locale: "id_ID",
    siteName: site.name,
    title: site.name,
    description: site.description,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  name: site.name,
  slogan: site.tagline,
  url: site.url,
  telephone: site.phoneTel,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.district,
    addressRegion: site.address.region,
    postalCode: site.address.postalCode,
    addressCountry: "ID",
  },
  geo: { "@type": "GeoCoordinates", latitude: site.geo.lat, longitude: site.geo.lng },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: site.hours.opens24,
    closes: site.hours.closes24,
  },
  aggregateRating: { "@type": "AggregateRating", ratingValue: 5, reviewCount: site.rating.count },
  paymentAccepted: site.payments.join(", "),
  sameAs: [site.social.instagram, site.social.tiktok, site.social.googleMaps],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="id" className={`${geist.variable} h-full antialiased`} suppressHydrationWarning>
      <head>
        {/* Aktifkan animasi reveal hanya bila JS berjalan, agar konten tetap terlihat tanpa JS. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js-reveal')" }} />
      </head>
      <body className="flex min-h-full flex-col font-sans">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <a
          href="#konten"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-[4px] focus:bg-white focus:px-4 focus:py-2 focus:text-ink-900 focus:shadow"
        >
          Lewati ke konten
        </a>
        <Header />
        <main id="konten" className="flex-1">
          {children}
        </main>
        <Footer />
        <FloatingWhatsApp />
        <RevealObserver />
      </body>
    </html>
  );
}
