interface GhidMontajProps {
  title?: string;
  paragraphs?: string[];
}

export default function GhidMontaj({
  title = "Cum se montează mobilierul",
  paragraphs = [
    "Mobilierul vine ambalat pe palet, cu piese etichetate și feronerie numerotată.",
    "Instrucțiunile sunt pas cu pas și nu necesită experiență anterioară.",
    "Ai nevoie doar de unelte de bază, precum o șurubelniță și o nivelă.",
    "Majoritatea problemelor apar din grabă, nu din lipsă de pricepere.",
  ],
}: GhidMontajProps) {
  return (
    <section className="px-4 py-12 md:py-16">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-6 text-2xl font-bold text-gray-900 md:text-3xl">
          {title}
        </h2>
        <div className="space-y-4">
          {paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className="text-base text-gray-700 md:text-lg"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
