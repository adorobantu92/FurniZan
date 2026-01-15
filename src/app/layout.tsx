import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { CartProvider } from "@/lib/cart-context";
import { CartIndicator } from "@/components/cart-indicator";
import { NavDropdown } from "@/components/nav-dropdown";

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
        <CartProvider>
          {/* Premium Sticky Header */}
          <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
            <div className="mx-auto max-w-6xl px-6 sm:px-8 md:px-12 lg:px-16 h-16 flex items-center justify-between">
              {/* Logo - Left */}
              <Link
                href="/"
                className="group flex items-center gap-2"
              >
                <span className="text-xl font-bold tracking-tight text-gray-900 transition-colors group-hover:text-blue-600 sm:text-2xl">
                  FurniZan
                </span>
              </Link>
              
              {/* Navigation Dropdown + Cart - Right */}
              <div className="flex items-center gap-3">
                <NavDropdown />
                <CartIndicator />
              </div>
            </div>
          </header>
          {/* Spacer for fixed header */}
          <div className="h-16" />
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
