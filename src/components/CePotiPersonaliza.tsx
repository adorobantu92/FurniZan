interface CePotiPersonalizaProps {
  title?: string;
  items?: string[];
}

export default function CePotiPersonaliza({
  title = "Ce poți personaliza",
  items = [
    "Lățimea și înălțimea corpurilor",
    "Adâncimea mobilierului",
    "Compartimentarea interioară",
    "Poziționarea corpurilor",
  ],
}: CePotiPersonalizaProps) {
  return (
    <section className="px-4 py-12 md:py-16">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-6 text-2xl font-bold text-gray-900 md:text-3xl">
          {title}
        </h2>
        <ul className="space-y-3">
          {items.map((item, index) => (
            <li
              key={index}
              className="text-base text-gray-700 before:mr-3 before:content-['•'] md:text-lg"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
