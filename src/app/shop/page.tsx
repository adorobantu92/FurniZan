"use client";

import Link from "next/link";
import { useCart } from "@/lib/cart-context";

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  slug: string;
}

const products: Product[] = [
  {
    id: "blat-bucatarie-stejar",
    name: "Blat bucătărie stejar",
    description:
      "Blat din PAL melaminat cu finisaj stejar natural. Dimensiuni la comandă.",
    price: 450,
    slug: "blat-bucatarie-stejar",
  },
  {
    id: "corp-inferior-60",
    name: "Corp inferior 60 cm",
    description:
      "Corp de bucătărie inferior cu lățime standard 60 cm. Adâncime personalizabilă.",
    price: 280,
    slug: "corp-inferior-60",
  },
  {
    id: "corp-suspendat-80",
    name: "Corp suspendat 80 cm",
    description:
      "Corp suspendat pentru bucătărie, lățime 80 cm. Două rafturi interioare.",
    price: 320,
    slug: "corp-suspendat-80",
  },
  {
    id: "sertar-tandembox",
    name: "Sertar Tandembox",
    description:
      "Sertar cu sistem Tandembox cu închidere lentă. Capacitate 30 kg.",
    price: 180,
    slug: "sertar-tandembox",
  },
  {
    id: "usa-mdf-vopsit",
    name: "Ușă MDF vopsit",
    description:
      "Ușă din MDF 18 mm vopsit mat. Culoare la alegere din paleta RAL.",
    price: 220,
    slug: "usa-mdf-vopsit",
  },
];

export default function ShopPage() {
  const { addItem } = useCart();

  const handleAddToCart = (product: Product) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      slug: product.slug,
    });
  };

  return (
    <main className="min-h-screen bg-stone-50 text-gray-900">
      <div className="mx-auto max-w-6xl px-6 sm:px-8 md:px-12 lg:px-16">
        {/* HEADER */}
        <section className="py-10 sm:py-14 md:py-16">
          <div className="border-l-2 border-gray-900 pl-6 sm:pl-8 md:pl-10">
            <h1 className="mb-4 text-3xl font-extrabold tracking-tight md:text-4xl lg:text-5xl">
              Shop
            </h1>
            <p className="max-w-xl text-base text-gray-600 md:text-lg">
              Componente pentru mobilă pe dimensiuni. Toate produsele sunt
              personalizabile la comandă.
            </p>
          </div>
        </section>

        <hr className="border-gray-300" />

        {/* PRODUCTS */}
        <section className="py-8 sm:py-10 md:py-12">
          <div className="space-y-0">
            {products.map((product) => (
              <div
                key={product.id}
                className="border-l-2 border-gray-300 py-6 pl-6 sm:py-8 sm:pl-8 md:pl-10"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex-1">
                    <Link
                      href={`/shop/${product.slug}`}
                      className="text-lg font-bold hover:text-blue-600 transition-colors sm:text-xl md:text-2xl"
                    >
                      {product.name}
                    </Link>
                    <p className="mt-2 max-w-lg text-sm text-gray-500 sm:text-base">
                      {product.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-4 sm:gap-6">
                    <span className="text-lg font-bold sm:text-xl">
                      {product.price} lei
                    </span>
                    <button
                      onClick={() => handleAddToCart(product)}
                      className="bg-blue-600 px-5 py-2 text-sm font-bold text-white transition-colors hover:bg-blue-700 sm:px-6 sm:py-3 sm:text-base"
                    >
                      Adaugă în coș
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <hr className="border-gray-300" />

        {/* CART LINK */}
        <section className="py-10 sm:py-14">
          <Link
            href="/cart"
            className="text-sm font-bold text-blue-600 underline decoration-blue-600/40 underline-offset-4 transition-colors hover:text-blue-800 hover:decoration-blue-800 sm:text-base"
          >
            Vezi coșul →
          </Link>
        </section>
      </div>
    </main>
  );
}
