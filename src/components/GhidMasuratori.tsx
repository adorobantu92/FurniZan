interface GhidMasuratoriProps {
  title?: string;
  paragraphs?: string[];
}

export default function GhidMasuratori({
  title = "Cum măsori corect",
  paragraphs = [
    "Măsoară de cel puțin două ori și notează cea mai mică dimensiune.",
    "Nu presupune că pereții sunt perfect drepți.",
    "Ține cont de plinte, prize și uși care se deschid.",
    "O schiță simplă desenată pe hârtie este suficientă.",
  ],
}: GhidMasuratoriProps) {
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
