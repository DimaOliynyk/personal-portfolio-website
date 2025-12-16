import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Ubuntu } from 'next/font/google'

import Providers from "./providers";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const ubuntu = Ubuntu({
  subsets: ['latin'],
  weight: ['400', '500', '700'], // optional, choose what you need
  variable: '--font-ubuntu',
  display: 'swap',
})




export const metadata: Metadata = {
  title: "Dima Oliinyk",
  description: "portfolio",
  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap" rel="stylesheet"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-plexmono  bg-[#292F36] min-h-screen overscroll-none m-auto`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
