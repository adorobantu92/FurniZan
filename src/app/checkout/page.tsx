"use client";

import { useState } from "react";
import { useCart } from "@/lib/cart-context";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function CheckoutPage() {
  const { items, totalPrice, clearCart } = useCart();
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Placeholder: In production, send order to backend
    // For now, simulate a brief delay and redirect
    await new Promise((resolve) => setTimeout(resolve, 500));

    clearCart();
    router.push("/checkout/confirm");
  };

  if (items.length === 0) {
    return (
      <main className="min-h-screen bg-stone-50 text-gray-900">
        <div className="mx-auto max-w-6xl px-6 sm:px-8 md:px-12 lg:px-16">
          <section className="flex min-h-[50vh] flex-col justify-center py-12 sm:py-16 md:py-20">
            <div className="border-l-2 border-gray-300 pl-6 sm:pl-8 md:pl-10">
              <h1 className="mb-4 text-3xl font-extrabold tracking-tight sm:mb-6 md:text-4xl lg:text-5xl">
                Checkout
              </h1>
              <p className="mb-8 text-base text-gray-600 sm:mb-10 md:text-lg">
                Coșul tău este gol. Adaugă produse înainte de a plasa comanda.
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
            <h1 className="mb-4 text-3xl font-extrabold tracking-tight md:text-4xl lg:text-5xl">
              Finalizare comandă
            </h1>
            <p className="max-w-xl text-base text-gray-600 md:text-lg">
              Completează datele de contact. Te vom contacta pentru a confirma
              detaliile și a stabili livrarea.
            </p>
          </div>
        </section>

        <hr className="border-gray-300" />

        <div className="grid grid-cols-1 gap-0 lg:grid-cols-2">
          {/* FORM */}
          <section className="py-8 sm:py-10 md:py-12">
            <form onSubmit={handleSubmit}>
              <div className="border-l-2 border-gray-300 pl-6 sm:pl-8 md:pl-10">
                <h2 className="mb-6 text-xl font-bold sm:mb-8 md:text-2xl">
                  Date de contact
                </h2>

                <div className="space-y-6 max-w-md">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-medium text-gray-700"
                    >
                      Nume complet *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full border border-gray-300 px-4 py-3 text-base text-gray-900 placeholder-gray-400 focus:border-blue-600 focus:outline-none"
                      placeholder="Ion Popescu"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium text-gray-700"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full border border-gray-300 px-4 py-3 text-base text-gray-900 placeholder-gray-400 focus:border-blue-600 focus:outline-none"
                      placeholder="ion@exemplu.ro"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-sm font-medium text-gray-700"
                    >
                      Telefon *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full border border-gray-300 px-4 py-3 text-base text-gray-900 placeholder-gray-400 focus:border-blue-600 focus:outline-none"
                      placeholder="0722 123 456"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm font-medium text-gray-700"
                    >
                      Mesaj (opțional)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full border border-gray-300 px-4 py-3 text-base text-gray-900 placeholder-gray-400 focus:border-blue-600 focus:outline-none resize-none"
                      placeholder="Detalii despre comandă, întrebări, sau preferințe de livrare..."
                    />
                  </div>
                </div>

                <div className="mt-8 sm:mt-10">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-block bg-blue-600 px-8 py-3 text-base font-bold text-white transition-colors hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed sm:px-10 sm:py-4 sm:text-lg"
                  >
                    {isSubmitting ? "Se trimite..." : "Trimite cererea"}
                  </button>
                </div>

                <p className="mt-4 max-w-md text-sm text-gray-500">
                  Nu se face nicio plată acum. Te vom contacta pentru a confirma
                  comanda și a stabili detaliile.
                </p>
              </div>
            </form>
          </section>

          {/* CART SUMMARY */}
          <section className="border-t border-gray-300 py-8 sm:py-10 md:py-12 lg:border-l lg:border-t-0">
            <div className="border-l-2 border-gray-300 pl-6 sm:pl-8 md:pl-10 lg:ml-6">
              <h2 className="mb-6 text-xl font-bold sm:mb-8 md:text-2xl">
                Sumar comandă
              </h2>

              <div className="space-y-4 mb-8">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between text-sm sm:text-base"
                  >
                    <div>
                      <span className="font-medium">{item.name}</span>
                      <span className="text-gray-500 ml-2">×{item.quantity}</span>
                    </div>
                    <span className="font-medium">
                      {item.price * item.quantity} lei
                    </span>
                  </div>
                ))}
              </div>

              <hr className="border-gray-200 mb-6" />

              <div className="flex items-center justify-between">
                <span className="text-lg font-bold sm:text-xl">Total</span>
                <span className="text-xl font-extrabold sm:text-2xl">
                  {totalPrice} lei
                </span>
              </div>

              <p className="mt-6 text-sm text-gray-500">
                Prețul nu include livrarea. Costul livrării va fi comunicat
                la confirmarea comenzii.
              </p>
            </div>
          </section>
        </div>

        <hr className="border-gray-300" />

        {/* BACK LINK */}
        <section className="py-10 sm:py-14">
          <Link
            href="/cart"
            className="text-sm font-bold text-blue-600 underline decoration-blue-600/40 underline-offset-4 transition-colors hover:text-blue-800 hover:decoration-blue-800 sm:text-base"
          >
            ← Înapoi la coș
          </Link>
        </section>
      </div>
    </main>
  );
}
