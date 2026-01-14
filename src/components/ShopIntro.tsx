interface ShopIntroProps {
  title?: string;
  paragraphs?: string[];
  customLinkText?: string;
  customLinkHref?: string;
}

export default function ShopIntro({
  title = "Produse gata de livrare",
  paragraphs = [
    "Aici găsești mobilier standard, cu dimensiuni fixe.",
    "Produsele sunt disponibile rapid și nu pot fi personalizate.",
    "Este responsabilitatea ta să verifici dacă dimensiunile se potrivesc spațiului tău.",
  ],
  customLinkText = "Ai nevoie de mobilă pe dimensiuni?",
  customLinkHref = "/pe-dimensiuni",
}: ShopIntroProps) {
  return (
    <section className="px-4 py-12 md:py-16">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-6 text-2xl font-bold text-gray-900 md:text-3xl">
          {title}
        </h2>
        <div className="mb-6 space-y-4">
          {paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className="text-base text-gray-700 md:text-lg"
            >
              {paragraph}
            </p>
          ))}
        </div>
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
