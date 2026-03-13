import type { Metadata } from "next";
import { Oswald, Source_Sans_3 } from "next/font/google";
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
  title: "BBA Movers | Alabama Moving Company",
  description:
    "BBA Movers provides residential, commercial, and long-distance moving across Alabama and Georgia. Request a fast quote or call 334-912-2747.",
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
      </body>
    </html>
  );
}
