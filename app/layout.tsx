import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Engenhando Serviços",
  description: "Cursos básicos profissionais 2026",
  themeColor: "#f97316", // cor laranja
  icons: {
    // favicon padrão
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-512x512.png", sizes: "512x512", type: "image/png" }, // para PWA/alta resolução
    ],
    // apple touch icon
    apple: "/apple-touch-icon.png",
    // manifest PWA
    other: [
      { rel: "manifest", url: "/site.webmanifest" },
    ],
  },
  metadataBase: new URL("landing-page-4j36.vercel.app"), // substitua pelo seu domínio real
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 text-gray-900`}
      >
        {children}
      </body>
    </html>
  );
}
