import type { Metadata, Viewport } from "next";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";

import "./globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})
 
export const viewport: Viewport = {
  themeColor: '#e11d48',
}

export const metadata: Metadata = {
  title: "Иди на хуй",
  description: "Иди на хуй сегодня",
  generator: 'Next.js',
  applicationName: 'Иди на хуй',
  referrer: 'origin-when-cross-origin',
  keywords: [
    'Иди на хуй', 'Fuck you', 'Fuck u',
    'Иди на хуй сегодня', 'Fuck you today', 'Fuck u today',
    'Иди на хуй лол', 'Fuck you lol', 'Fuck u lol',
  ],
  authors: [
    { name: 'Nikita Kononenko (aka jadnast)', url: 'https://github.com/jadnast' },
    { name: 'Nikolai Konovalov (aka li0ard)', url: 'https://github.com/li0ard'}
  ],
  creator: 'The Infinity Way',
  publisher: 'The Infinity Way',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Иди на хуй',
    description: 'Иди на хуй сегодня',
    siteName: 'Иди на хуй',
    locale: 'ru_RU',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
  icons: {
    icon: 'brand/favicon-32x32.png',
    shortcut: 'brand/favicon.ico',
    apple: 'brand/apple-touch-icon.png',
    other: {
      rel: 'android-chrome',
      url: 'brand/android-chrome-192x192.png',
    },
  },
  manifest: 'brand/site.webmanifest',
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={cn("min-h-screen bg-background font-sans antialiased shadow-kononenko",fontSans.variable)}>
        {children}
        <div className="noise-bg"></div>
      </body>
    </html>
  )
}