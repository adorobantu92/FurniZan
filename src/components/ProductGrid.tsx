interface Product {
  id: number;
  name: string;
  price: string;
  dimensions: string;
  href: string;
}

interface ProductGridProps {
  products?: Product[];
}

export default function ProductGrid({
  products = [
    {
      id: 1,
      name: "Comodă simplă",
      price: "1.200 RON",
      dimensions: "120 × 45 × 80 cm",
      href: "/shop/produs/comoda-simpla",
    },
    {
      id: 2,
      name: "Birou standard",
      price: "900 RON",
      dimensions: "140 × 60 × 75 cm",
      href: "/shop/produs/birou-standard",
    },
  ],
}: ProductGridProps) {
  return (
    <section className="px-4 py-12 md:py-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.id}
              className="rounded-lg border border-gray-200 bg-white p-6"
            >
              <h3 className="mb-2 text-lg font-semibold text-gray-900">
                {product.name}
              </h3>
              <p className="mb-1 text-base font-medium text-gray-800">
                {product.price}
              </p>
              <p className="mb-4 text-sm text-gray-500">
                {product.dimensions}
              </p>
              <a
                href={product.href}
                className="text-sm font-medium text-blue-600 hover:text-blue-800"
              >
                Vezi detalii
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
