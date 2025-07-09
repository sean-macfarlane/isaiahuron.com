import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Footer from "./components/footer";
import { metaData } from "./lib/config";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(metaData.baseUrl),
  title: {
    default: metaData.title,
    template: `%s | ${metaData.title}`,
  },
  description: metaData.description,
  openGraph: {
    images: metaData.ogImage,
    title: metaData.title,
    description: metaData.description,
    url: metaData.baseUrl,
    siteName: metaData.name,
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: metaData.name,
    card: "summary_large_image",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.className}`}>
      <head>
        {/*
────────────────────────────────────────────────────────────────────────────────────────────────────────────────        
Website created by fulldigitalll.com

███████╗██╗   ██╗██╗     ██╗         ██████╗ ██╗ ██████╗ ██╗████████╗ █████╗ ██╗     
██╔════╝██║   ██║██║     ██║         ██╔══██╗██║██╔     ╗██║╚══██╔══╝██╔══██╗██║     
█████╗  ██║   ██║██║     ██║         ██╔══██╗██║██║   ██║██║   ██║   ███████║██║     
██╔══╝  ██║   ██║██║     ██║         ██╔══██╗██║██║   ██║██║   ██║   ██╔══██║██║     
██║     ╚██████╔╝███████╗███████╗    ██████╔╝██║╚██████╔╝██║   ██║   ██║  ██║███████╗
╚═╝      ╚═════╝ ╚══════╝╚══════╝    ╚═╝     ╚═╝ ╚═════╝ ╚═╝   ╚═╝   ╚═╝  ╚═╝╚══════╝

      _______
     |       |
     | █████ |
     | █████ |
     | █████ |
     |_______|
      |     |
      |_____|

────────────────────────────────────────────────────────────────────────────────────────────────────────────────
        */}
        <link
          rel="alternate"
          type="application/rss+xml"
          href="/rss.xml"
          title="RSS Feed"
        />
        <link
          rel="alternate"
          type="application/atom+xml"
          href="/atom.xml"
          title="Atom Feed"
        />
        <link
          rel="alternate"
          type="application/feed+json"
          href="/feed.json"
          title="JSON Feed"
        />
      </head>
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
