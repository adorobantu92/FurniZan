"use client";

import Link from "next/link";
import { useCart } from "@/lib/cart-context";

export function CartIndicator() {
  const { totalItems } = useCart();

  return (
    <Link
      href="/cart"
      className="group relative flex items-center gap-2 rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 transition-all hover:bg-gray-200 hover:text-gray-900"
    >
      {/* Cart Icon */}
      <svg 
        className="h-5 w-5 transition-transform group-hover:scale-110" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={1.5} 
          d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" 
        />
      </svg>
      <span className="hidden sm:inline">Coș</span>
      {/* Item Count Badge */}
      {totalItems > 0 && (
        <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white shadow-md">
          {totalItems > 9 ? "9+" : totalItems}
        </span>
      )}
    </Link>
  );
}
