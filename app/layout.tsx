import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Oswald, Source_Sans_3 } from "next/font/google";
import { businessName, siteUrl } from "@/lib/seo";
import "./globals.css";

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Movers in Montgomery, AL | BBA Movers",
    template: `%s | ${businessName}`,
  },
  description:
    "Montgomery movers for residential, commercial, piano, movers-only, and long-distance moves across Alabama and Georgia. Call 334-912-2747 for a quote.",
  applicationName: businessName,
  authors: [{ name: businessName }],
  creator: businessName,
  publisher: businessName,
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Movers in Montgomery, AL | BBA Movers",
    description:
      "Montgomery-based movers serving Alabama and Georgia with truck packages, movers-only loading help, piano moving, and long-distance routes.",
    url: "/",
    siteName: businessName,
    images: [
      {
        url: "/hero-move.jpg",
        width: 1000,
        height: 1332,
        alt: "BBA Movers team loading furniture for a move",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Movers in Montgomery, AL | BBA Movers",
    description:
      "Residential, commercial, piano, movers-only, and long-distance moving across Alabama and Georgia.",
    images: ["/hero-move.jpg"],
  },
  icons: {
    icon: "/logo.png",
  },
  formatDetection: {
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sourceSans.variable} ${oswald.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
