interface Category {
  title: string;
  description: string;
  href: string;
}

interface CategoriiCustomProps {
  categories?: Category[];
  ctaText?: string;
}

export default function CategoriiCustom({
  categories = [
    {
      title: "Bucătărie",
      description: "Mobilă pe dimensiuni pentru spații care nu iartă erorile.",
      href: "/pe-dimensiuni/bucatarie",
    },
    {
      title: "Dressing",
      description: "Depozitare eficientă pentru nișe și spații dificile.",
      href: "/pe-dimensiuni/dressing",
    },
    {
      title: "Baie",
      description: "Mobilier adaptat spațiilor mici și instalațiilor existente.",
      href: "/pe-dimensiuni/baie",
    },
    {
      title: "Birou",
      description: "Birouri și spații de lucru pe dimensiunile tale.",
      href: "/pe-dimensiuni/birou",
    },
  ],
  ctaText = "Vezi cum funcționează",
}: CategoriiCustomProps) {
  return (
    <section className="px-4 py-20 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category, index) => (
            <div
              key={index}
            >
              <h3 className="mb-4 text-xl font-bold text-gray-900">
                {category.title}
              </h3>
              <p className="mb-5 text-base text-gray-900">
                {category.description}
              </p>
              <a
                href={category.href}
                className="text-sm font-medium text-blue-600 hover:text-blue-800"
              >
                {ctaText}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
