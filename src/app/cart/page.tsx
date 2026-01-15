"use client";

import { useCart } from "@/lib/cart-context";
import Link from "next/link";

export default function CartPage() {
  const { items, removeItem, updateQuantity, totalPrice, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <main className="min-h-screen bg-stone-50 text-gray-900">
        <div className="mx-auto max-w-6xl px-6 sm:px-8 md:px-12 lg:px-16">
          <section className="flex min-h-[50vh] flex-col justify-center py-12 sm:py-16 md:py-20">
            <div className="border-l-2 border-gray-300 pl-6 sm:pl-8 md:pl-10">
              <h1 className="mb-4 text-3xl font-extrabold tracking-tight sm:mb-6 md:text-4xl lg:text-5xl">
                Coșul tău
              </h1>
              <p className="mb-8 text-base text-gray-600 sm:mb-10 md:text-lg">
                Nu ai niciun produs în coș.
              </p>
              <Link
                href="/shop"
                className="inline-block bg-blue-600 px-8 py-3 text-base font-bold text-white transition-colors hover:bg-blue-700 sm:px-10 sm:py-4 sm:text-lg"
              >
                Vezi produsele
              </Link>
            </div>
          </section>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-stone-50 text-gray-900">
      <div className="mx-auto max-w-6xl px-6 sm:px-8 md:px-12 lg:px-16">
        {/* HEADER */}
        <section className="py-10 sm:py-14 md:py-16">
          <div className="border-l-2 border-gray-900 pl-6 sm:pl-8 md:pl-10">
            <h1 className="text-3xl font-extrabold tracking-tight md:text-4xl lg:text-5xl">
              Coșul tău
            </h1>
          </div>
        </section>

        <hr className="border-gray-300" />

        {/* CART ITEMS */}
        <section className="py-8 sm:py-10 md:py-12">
          <div className="space-y-0">
            {items.map((item) => (
              <div
                key={item.id}
                className="border-l-2 border-gray-300 py-6 pl-6 sm:py-8 sm:pl-8 md:pl-10"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex-1">
                    <Link
                      href={`/shop/${item.slug}`}
                      className="text-base font-bold hover:text-blue-600 transition-colors sm:text-lg md:text-xl"
                    >
                      {item.name}
                    </Link>
                    <p className="mt-1 text-sm text-gray-500 sm:text-base">
                      {item.price} lei / bucată
                    </p>
                  </div>

                  <div className="flex items-center gap-4 sm:gap-6">
                    {/* QUANTITY CONTROLS */}
                    <div className="flex items-center border border-gray-300">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        className="px-3 py-1 text-base font-bold text-gray-600 hover:bg-gray-100 transition-colors sm:px-4 sm:py-2"
                        aria-label="Scade cantitate"
                      >
                        −
                      </button>
                      <span className="min-w-[2.5rem] px-2 py-1 text-center text-sm font-medium sm:min-w-[3rem] sm:py-2 sm:text-base">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        className="px-3 py-1 text-base font-bold text-gray-600 hover:bg-gray-100 transition-colors sm:px-4 sm:py-2"
                        aria-label="Crește cantitate"
                      >
                        +
                      </button>
                    </div>

                    {/* ITEM TOTAL */}
                    <span className="min-w-[5rem] text-right text-base font-bold sm:min-w-[6rem] sm:text-lg">
                      {item.price * item.quantity} lei
                    </span>

                    {/* REMOVE */}
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-sm text-gray-400 underline underline-offset-2 hover:text-gray-900 transition-colors"
                      aria-label="Șterge produs"
                    >
                      Șterge
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <hr className="border-gray-300" />

        {/* TOTAL */}
        <section className="py-8 sm:py-10 md:py-12">
          <div className="border-l-2 border-gray-900 pl-6 sm:pl-8 md:pl-10">
            <div className="flex items-center justify-between max-w-md">
              <span className="text-lg font-bold sm:text-xl md:text-2xl">
                Total
              </span>
              <span className="text-xl font-extrabold sm:text-2xl md:text-3xl">
                {totalPrice} lei
              </span>
            </div>
          </div>
        </section>

        <hr className="border-gray-300" />

        {/* ACTIONS */}
        <section className="py-10 sm:py-14 md:py-16">
          <div className="border-l-2 border-blue-600 pl-6 sm:pl-8 md:pl-10">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
              <Link
                href="/checkout"
                className="inline-block bg-blue-600 px-8 py-3 text-center text-base font-bold text-white transition-colors hover:bg-blue-700 sm:px-10 sm:py-4 sm:text-lg"
              >
                Continuă spre checkout
              </Link>
              <button
                onClick={clearCart}
                className="text-sm text-gray-500 underline underline-offset-2 hover:text-gray-900 transition-colors sm:text-base"
              >
                Golește coșul
              </button>
            </div>
          </div>
        </section>

        {/* BACK LINK */}
        <section className="pb-14 sm:pb-20">
          <Link
            href="/shop"
            className="text-sm font-bold text-blue-600 underline decoration-blue-600/40 underline-offset-4 transition-colors hover:text-blue-800 hover:decoration-blue-800 sm:text-base"
          >
            ← Continuă cumpărăturile
          </Link>
        </section>
      </div>
    </main>
  );
}
