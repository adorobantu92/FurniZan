interface ShopPreviewProps {
  title?: string;
  description?: string;
  ctaText?: string;
  ctaHref?: string;
}

export default function ShopPreview({
  title = "Ai nevoie rapid?",
  description = "Avem și produse standard, gata de livrare. Fără personalizare.",
  ctaText = "Vezi produsele gata de livrare",
  ctaHref = "/shop",
}: ShopPreviewProps) {
  return (
    <section className="px-4 py-20 md:py-24">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-6 text-xl font-bold text-gray-900 md:text-2xl">
          {title}
        </h2>
        <p className="mb-8 text-base text-gray-900">
          {description}
        </p>
        <a
          href={ctaHref}
          className="text-base text-gray-900 underline hover:text-blue-600"
        >
          {ctaText}
        </a>
      </div>
    </section>
  );
}
