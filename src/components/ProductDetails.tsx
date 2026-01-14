interface ProductDetailsProps {
  name?: string;
  price?: string;
  dimensions?: string;
  description?: string;
  customLinkText?: string;
  customLinkHref?: string;
}

export default function ProductDetails({
  name = "Produs standard",
  price = "—",
  dimensions = "Dimensiuni fixe",
  description = "Acest produs are dimensiuni standard și nu poate fi personalizat.",
  customLinkText = "Ai nevoie de mobilă pe dimensiuni?",
  customLinkHref = "/pe-dimensiuni",
}: ProductDetailsProps) {
  return (
    <section className="px-4 py-12 md:py-16">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
          {name}
        </h1>
        <p className="mb-2 text-2xl font-semibold text-gray-800">
          {price}
        </p>
        <p className="mb-6 text-base text-gray-500">
          {dimensions}
        </p>
        <p className="mb-8 text-base text-gray-700 md:text-lg">
          {description}
        </p>
        <a
          href={customLinkHref}
          className="text-base text-blue-600 hover:text-blue-800"
        >
          {customLinkText}
        </a>
      </div>
    </section>
  );
}
