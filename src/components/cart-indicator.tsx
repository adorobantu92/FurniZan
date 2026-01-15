"use client";

import Link from "next/link";
import { useCart } from "@/lib/cart-context";

export function CartIndicator() {
  const { totalItems } = useCart();

  return (
    <Link
      href="/cart"
      className="text-sm font-medium text-gray-600 hover:text-blue-700 transition-colors sm:text-base"
    >
      {totalItems > 0 ? `Coș (${totalItems})` : "Coș"}
    </Link>
  );
}
