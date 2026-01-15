"use client";

import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/lib/cart-context";

type Category = "bucatarie" | "baie" | "dressing" | "birou";

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  slug: string;
  image: string;
  category: Category;
}

const categoryLabels: Record<Category, string> = {
  bucatarie: "Bucătărie",
  baie: "Baie",
  dressing: "Dressing",
  birou: "Birou",
};

const categoryOrder: Category[] = ["bucatarie", "dressing", "baie", "birou"];

const products: Product[] = [
  // Bucătărie
  {
    id: "blat-bucatarie-stejar",
    name: "Blat bucătărie stejar",
    description:
      "Blat din PAL melaminat cu finisaj stejar natural. Dimensiuni la comandă.",
    price: 450,
    slug: "blat-bucatarie-stejar",
    image: "/shop/blat-bucatarie-stejar.jpg",
    category: "bucatarie",
  },
  {
    id: "corp-inferior-60",
    name: "Corp inferior 60 cm",
    description:
      "Corp de bucătărie inferior cu lățime standard 60 cm. Adâncime personalizabilă.",
    price: 280,
    slug: "corp-inferior-60",
    image: "/shop/corp-inferior-60.jpg",
    category: "bucatarie",
  },
  {
    id: "corp-suspendat-80",
    name: "Corp suspendat 80 cm",
    description:
      "Corp suspendat pentru bucătărie, lățime 80 cm. Două rafturi interioare.",
    price: 320,
    slug: "corp-suspendat-80",
    image: "/shop/corp-suspendat-80.jpg",
    category: "bucatarie",
  },
  {
    id: "sertar-tandembox",
    name: "Sertar Tandembox",
    description:
      "Sertar cu sistem Tandembox cu închidere lentă. Capacitate 30 kg.",
    price: 180,
    slug: "sertar-tandembox",
    image: "/shop/sertar-tandembox.jpg",
    category: "bucatarie",
  },
  {
    id: "usa-mdf-vopsit",
    name: "Ușă MDF vopsit",
    description:
      "Ușă din MDF 18 mm vopsit mat. Culoare la alegere din paleta RAL.",
    price: 220,
    slug: "usa-mdf-vopsit",
    image: "/shop/usa-mdf-vopsit.jpg",
    category: "bucatarie",
  },
  // Dressing
  {
    id: "bara-haine-dressing",
    name: "Bară haine dressing",
    description:
      "Bară din oțel cromat pentru haine. Lățime la comandă, suporți incluși.",
    price: 85,
    slug: "bara-haine-dressing",
    image: "/shop/bara-haine-dressing.jpg",
    category: "dressing",
  },
  {
    id: "polita-pal-40",
    name: "Poliță PAL 40 cm",
    description:
      "Poliță din PAL melaminat 18 mm. Adâncime 40 cm, lățime personalizabilă.",
    price: 65,
    slug: "polita-pal-40",
    image: "/shop/polita-pal-40.jpg",
    category: "dressing",
  },
  {
    id: "sertar-dressing-soft",
    name: "Sertar dressing soft-close",
    description:
      "Sertar cu glisiere soft-close. Finisaj alb mat, dimensiuni la comandă.",
    price: 195,
    slug: "sertar-dressing-soft",
    image: "/shop/sertar-dressing-soft.jpg",
    category: "dressing",
  },
  // Baie
  {
    id: "dulap-baie-suspendat",
    name: "Dulap baie suspendat",
    description:
      "Dulap suspendat pentru baie cu PAL hidrofug. Două rafturi, balamale soft-close.",
    price: 380,
    slug: "dulap-baie-suspendat",
    image: "/shop/dulap-baie-suspendat.jpg",
    category: "baie",
  },
  {
    id: "blat-baie-rezistent-apa",
    name: "Blat baie rezistent la apă",
    description:
      "Blat din PAL hidrofug cu cant ABS. Decupaj chiuvetă inclus.",
    price: 320,
    slug: "blat-baie-rezistent-apa",
    image: "/shop/blat-baie-rezistent-apa.jpg",
    category: "baie",
  },
  // Birou
  {
    id: "blat-birou-stejar",
    name: "Blat birou stejar",
    description:
      "Blat de birou din PAL melaminat stejar. Dimensiuni personalizabile.",
    price: 280,
    slug: "blat-birou-stejar",
    image: "/shop/blat-birou-stejar.jpg",
    category: "birou",
  },
  {
    id: "corp-sertare-birou",
    name: "Corp cu sertare birou",
    description:
      "Corp mobil cu 3 sertare și roți. Glisiere cu bile, încuietoare opțională.",
    price: 420,
    slug: "corp-sertare-birou",
    image: "/shop/corp-sertare-birou.jpg",
    category: "birou",
  },
];

function groupByCategory(products: Product[]): Record<Category, Product[]> {
  return products.reduce((acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = [];
    }
    acc[product.category].push(product);
    return acc;
  }, {} as Record<Category, Product[]>);
}

export default function ShopPage() {
  const { addItem } = useCart();
  const grouped = groupByCategory(products);

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

        {/* PRODUCTS BY CATEGORY */}
        {categoryOrder.map((category) => {
          const categoryProducts = grouped[category];
          if (!categoryProducts || categoryProducts.length === 0) return null;

          return (
            <section key={category} className="py-8 sm:py-10 md:py-12">
              <h2 className="mb-6 text-xl font-bold tracking-tight sm:mb-8 sm:text-2xl md:text-3xl">
                {categoryLabels[category]}
              </h2>

              <div className="space-y-0">
                {categoryProducts.map((product) => (
                  <div
                    key={product.id}
                    className="border-l-2 border-gray-300 py-6 pl-6 sm:py-8 sm:pl-8 md:pl-10"
                  >
                    <Link href={`/shop/${product.slug}`} className="block mb-4">
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={280}
                        height={200}
                        className="bg-gray-100"
                      />
                    </Link>
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

              <hr className="mt-8 border-gray-300 sm:mt-10" />
            </section>
          );
        })}

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
