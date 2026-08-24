import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import ThemeProvider from "@/components/ThemeProvider";
import SmoothScroll from "@/components/SmoothScroll";

const siteUrl = "https://radheyradheybloodcentre.in";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Radhey Radhey Charitable Blood Bank | Best Blood Bank in Gorakhpur",
    template: "%s | Radhey Radhey Charitable Blood Bank",
  },
  description:
    "Radhey Radhey Charitable Blood & Component Centre - Best blood bank in Gorakhpur, Uttar Pradesh. 24/7 blood availability, safe blood donation, all blood groups. Located in Sikariganj, Imlidih Bujurg. Blood donation camps and charitable services.",
  keywords: [
    "blood bank gorakhpur",
    "best blood bank gorakhpur",
    "blood donation gorakhpur",
    "charitable blood bank",
    "radhey radhey blood bank",
    "blood bank sikariganj",
    "blood donation",
    "blood components gorakhpur",
    "emergency blood gorakhpur",
    "blood bank near me gorakhpur",
    "24 hours blood bank gorakhpur",
    "blood donation camp gorakhpur",
    "platelet donation gorakhpur",
    "plasma donation gorakhpur",
  ],
  authors: [{ name: "Radhey Radhey Charitable Blood & Component Centre" }],
  creator: "Radhey Radhey Charitable Blood & Component Centre",
  publisher: "Radhey Radhey Charitable Blood & Component Centre",
  formatDetection: { email: false, address: false, telephone: false },
  manifest: "/manifest.webmanifest",
  category: "health",
  applicationName: "Radhey Radhey Charitable Blood & Component Centre",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "48x48", type: "image/x-icon" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "Radhey Radhey Charitable Blood Bank",
    title: "Radhey Radhey Charitable Blood Bank | Best Blood Bank in Gorakhpur",
    description: "Best blood bank in Gorakhpur. 24/7 safe blood availability, all blood groups, charitable services.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Radhey Radhey Charitable Blood Bank Gorakhpur" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Radhey Radhey Charitable Blood Bank | Best Blood Bank in Gorakhpur",
    description: "Best blood bank in Gorakhpur. 24/7 safe blood availability, all blood groups, charitable services.",
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 } },
  alternates: { canonical: siteUrl },
  verification: { google: "your-google-verification-code" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BloodBank",
    name: "Radhey Radhey Charitable Blood & Component Centre",
    alternateName: "Radhey Radhey Blood Bank",
    description: "Best blood bank in Gorakhpur offering 24/7 blood availability, safe blood donation, all blood groups, and charitable blood services.",
    url: siteUrl,
    telephone: "+919140990376",
    address: { "@type": "PostalAddress", streetAddress: "Sikariganj, Jaddupatti, Sikariganj", addressLocality: "Imlidih Bujurg", addressRegion: "Uttar Pradesh", postalCode: "273213", addressCountry: "IN" },
    geo: { "@type": "GeoCoordinates", latitude: 26.7509, longitude: 83.3783 },
    openingHoursSpecification: [{ "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], opens: "00:00", closes: "23:59" }],
    priceRange: "₹",
    aggregateRating: { "@type": "AggregateRating", ratingValue: "5.0", reviewCount: "1" },
    sameAs: ["https://share.google/OL2mYs8Lt4GIWGmo3"],
  };

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#DC2626" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="geo.region" content="IN-UP" />
        <meta name="geo.placename" content="Gorakhpur, Uttar Pradesh, India" />
        <meta name="ICBM" content="26.7509, 83.3783" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className="min-h-screen flex flex-col antialiased bg-white dark:bg-[#0a0a0a] text-gray-900 dark:text-gray-100 transition-colors" style={{ fontFamily: "'Poppins', Arial, Helvetica, sans-serif" }}>
        <ThemeProvider>
          <SmoothScroll />
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <FloatingButtons />
        </ThemeProvider>
      </body>
    </html>
  );
}
