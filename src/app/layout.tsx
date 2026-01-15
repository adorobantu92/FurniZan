import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FurniZan - Mobilă pe dimensiuni",
  description: "Mobilă pe dimensiuni exacte. Măsori, noi producem, tu montezi.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro" className="light">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-gray-900`}
      >
        <header className="border-b border-gray-200">
          <div className="mx-auto max-w-6xl px-6 sm:px-8 md:px-12 lg:px-16 h-16 flex items-center">
            <Link
              href="/"
              className="text-lg font-semibold tracking-tight text-gray-900 hover:text-blue-700 transition-colors"
            >
              FurniZan
            </Link>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
