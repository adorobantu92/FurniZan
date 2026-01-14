interface PentruCineEsteProps {
  headline?: string;
  items?: string[];
  exclusionText?: string;
}

export default function PentruCineEste({
  headline = "Pentru cine este această soluție",
  items = [
    "Apartamente noi",
    "Renovări majore",
    "Spații mici sau atipice",
    "Oameni care vor control, nu compromisuri",
  ],
  exclusionText = "Dacă vrei montaj inclus sau soluții standard, nu suntem potriviți.",
}: PentruCineEsteProps) {
  return (
    <section className="px-4 py-20 md:py-24">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-10 text-2xl font-bold tracking-tight text-gray-900 md:text-3xl">
          {headline}
        </h2>
        <ul className="mb-12 space-y-4">
          {items.map((item, index) => (
            <li
              key={index}
              className="text-base text-gray-900 before:mr-3 before:content-['•'] md:text-lg"
            >
              {item}
            </li>
          ))}
        </ul>
        <p className="text-sm text-gray-900 md:text-base">
          {exclusionText}
        </p>
      </div>
    </section>
  );
}
