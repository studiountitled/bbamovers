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
    default:
      "BBA Movers | Alabama Movers for Residential, Commercial & Long Distance Moves",
    template: `%s | ${businessName}`,
  },
  description:
    "BBA Movers provides residential, commercial, piano, movers-only, and long-distance moving services across Alabama and Georgia. Request a fast quote or call 334-912-2747.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title:
      "BBA Movers | Alabama Movers for Residential, Commercial & Long Distance Moves",
    description:
      "Local and long-distance movers serving Alabama and Georgia with truck packages, movers-only loading help, piano moving, and same-day quote support.",
    url: "/",
    siteName: businessName,
    images: [
      {
        url: "/hero-move.jpg",
        width: 1400,
        height: 720,
        alt: "BBA Movers team helping a customer move in Alabama",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "BBA Movers | Alabama Movers for Residential, Commercial & Long Distance Moves",
    description:
      "Residential, commercial, piano, movers-only, and long-distance moving across Alabama and Georgia.",
    images: ["/hero-move.jpg"],
  },
  icons: {
    icon: "/logo.png",
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
