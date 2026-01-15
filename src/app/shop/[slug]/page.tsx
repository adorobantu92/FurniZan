"use client";

import { useState } from "react";
import { useCart } from "@/lib/cart-context";
import Link from "next/link";
import Image from "next/image";
import { use } from "react";

interface Product {
  slug: string;
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
}

const products: Product[] = [
  {
    slug: "blat-bucatarie-stejar",
    id: "blat-bucatarie-stejar",
    name: "Blat bucătărie stejar",
    description:
      "Blat din PAL melaminat cu finisaj stejar natural. Grosime 28 mm, cant ABS 2 mm pe toate laturile. Dimensiuni la comandă, până la 300 cm lungime și 65 cm adâncime. Include decupaje pentru chiuvetă și plită la cerere.",
    price: 450,
    image: "/shop/blat-bucatarie-stejar.jpg",
  },
  {
    slug: "corp-inferior-60",
    id: "corp-inferior-60",
    name: "Corp inferior 60 cm",
    description:
      "Corp de bucătărie inferior cu lățime standard 60 cm. PAL 18 mm, spate HDF 3 mm. Include raft interior reglabil și picioare de 10 cm. Adâncime și înălțime personalizabile. Fără ușă - se comandă separat.",
    price: 280,
    image: "/shop/corp-inferior-60.jpg",
  },
  {
    slug: "corp-suspendat-80",
    id: "corp-suspendat-80",
    name: "Corp suspendat 80 cm",
    description:
      "Corp suspendat pentru bucătărie, lățime 80 cm. PAL 18 mm alb mat, spate HDF. Două rafturi interioare reglabile. Înălțime standard 72 cm sau personalizată. Include șine pentru montaj pe perete.",
    price: 320,
    image: "/shop/corp-suspendat-80.jpg",
  },
  {
    slug: "sertar-tandembox",
    id: "sertar-tandembox",
    name: "Sertar Tandembox",
    description:
      "Sertar cu sistem Tandembox cu închidere lentă. Capacitate 30 kg. Disponibil în lățimi de la 30 cm la 90 cm. Înălțime sertar 12 cm sau 20 cm. Include fațadă din PAL la alegere.",
    price: 180,
    image: "/shop/sertar-tandembox.jpg",
  },
  {
    slug: "usa-mdf-vopsit",
    id: "usa-mdf-vopsit",
    name: "Ușă MDF vopsit",
    description:
      "Ușă din MDF 18 mm vopsit mat. Culoare la alegere din paleta RAL. Dimensiuni personalizate până la 60x240 cm. Include găuri pentru balamale (balamale se comandă separat).",
    price: 220,
    image: "/shop/usa-mdf-vopsit.jpg",
  },
  {
    slug: "bara-haine-dressing",
    id: "bara-haine-dressing",
    name: "Bară haine dressing",
    description:
      "Bară ovală din aluminiu pentru umerașe. Lungime la comandă până la 150 cm. Include suporturi laterale. Finisaj crom mat sau negru.",
    price: 85,
    image: "/shop/bara-haine-dressing.jpg",
  },
  {
    slug: "polita-pal-40",
    id: "polita-pal-40",
    name: "Poliță PAL 40 cm",
    description:
      "Poliță din PAL 18 mm cu cant ABS. Adâncime 40 cm, lungime la comandă până la 120 cm. Culoare din stoc sau la comandă. Include suporturi de poliță.",
    price: 65,
    image: "/shop/polita-pal-40.jpg",
  },
  {
    slug: "dulap-baie-suspendat",
    id: "dulap-baie-suspendat",
    name: "Dulap baie suspendat",
    description:
      "Dulap suspendat pentru baie din PAL hidrofug. Dimensiuni personalizate. Include raft interior și decupaj pentru sifon la cerere. Finisaj rezistent la umiditate.",
    price: 380,
    image: "/shop/dulap-baie-suspendat.jpg",
  },
];

function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export default function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = use(params);
  const product = getProduct(resolvedParams.slug);
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <main className="min-h-screen bg-stone-50 text-gray-900">
        <div className="mx-auto max-w-6xl px-6 sm:px-8 md:px-12 lg:px-16">
          <section className="flex min-h-[50vh] flex-col justify-center py-12 sm:py-16 md:py-20">
            <div className="border-l-2 border-gray-300 pl-6 sm:pl-8 md:pl-10">
              <h1 className="mb-4 text-3xl font-extrabold tracking-tight sm:mb-6 md:text-4xl">
                Produs inexistent
              </h1>
              <p className="mb-8 text-base text-gray-600 sm:mb-10 md:text-lg">
                Produsul căutat nu a fost găsit.
              </p>
              <Link
                href="/shop"
                className="inline-block bg-blue-600 px-8 py-3 text-base font-bold text-white transition-colors hover:bg-blue-700 sm:px-10 sm:py-4 sm:text-lg"
              >
                Înapoi la shop
              </Link>
            </div>
          </section>
        </div>
      </main>
    );
  }

  const handleAddToCart = () => {
    addItem(
      {
        id: product.id,
        name: product.name,
        price: product.price,
        slug: product.slug,
      },
      quantity
    );
  };

  return (
    <main className="min-h-screen bg-stone-50 text-gray-900">
      <div className="mx-auto max-w-6xl px-6 sm:px-8 md:px-12 lg:px-16">
        {/* BREADCRUMB */}
        <nav className="py-6 text-sm text-gray-500">
          <Link href="/shop" className="hover:text-gray-900 transition-colors">
            Shop
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">{product.name}</span>
        </nav>

        {/* PRODUCT DETAIL */}
        <section className="py-8 sm:py-12 md:py-16">
          <div className="mb-8 sm:mb-10">
            <Image
              src={product.image}
              alt={product.name}
              width={480}
              height={340}
              className="bg-gray-100"
            />
          </div>

          <div className="border-l-2 border-gray-900 pl-6 sm:pl-8 md:pl-10">
            <h1 className="mb-4 text-3xl font-extrabold tracking-tight sm:mb-6 md:text-4xl lg:text-5xl">
              {product.name}
            </h1>
            <p className="mb-8 text-2xl font-bold text-gray-900 sm:mb-10 md:text-3xl">
              {product.price} lei
            </p>
          </div>

          <div className="border-l-2 border-gray-300 pl-6 sm:pl-8 md:pl-10">
            <p className="mb-10 max-w-2xl text-base leading-relaxed text-gray-600 sm:mb-12 md:text-lg">
              {product.description}
            </p>

            {/* QUANTITY SELECTOR */}
            <div className="mb-8 flex items-center gap-4">
              <span className="text-sm font-medium text-gray-700 sm:text-base">
                Cantitate:
              </span>
              <div className="flex items-center border border-gray-300">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="px-4 py-2 text-lg font-bold text-gray-600 hover:bg-gray-100 transition-colors"
                  aria-label="Scade cantitate"
                >
                  −
                </button>
                <span className="min-w-[3rem] px-2 py-2 text-center text-base font-medium">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="px-4 py-2 text-lg font-bold text-gray-600 hover:bg-gray-100 transition-colors"
                  aria-label="Crește cantitate"
                >
                  +
                </button>
              </div>
            </div>

            {/* ADD TO CART */}
            <button
              onClick={handleAddToCart}
              className="inline-block bg-blue-600 px-8 py-3 text-base font-bold text-white transition-colors hover:bg-blue-700 sm:px-10 sm:py-4 sm:text-lg"
            >
              Adaugă în coș
            </button>
          </div>
        </section>

        <hr className="border-gray-300" />

        {/* BACK LINK */}
        <section className="py-10 sm:py-14">
          <Link
            href="/shop"
            className="text-sm font-bold text-blue-600 underline decoration-blue-600/40 underline-offset-4 transition-colors hover:text-blue-800 hover:decoration-blue-800 sm:text-base"
          >
            ← Înapoi la shop
          </Link>
        </section>
      </div>
    </main>
  );
}
