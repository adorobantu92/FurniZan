interface FricaMasuratorProps {
  question?: string;
  answer?: string;
  linkText?: string;
  linkHref?: string;
}

export default function FricaMasuratori({
  question = "Ce se întâmplă dacă măsor greșit?",
  answer = "Te ajutăm să verifici măsurătorile înainte de producție. Ai ghid pas cu pas și suport dedicat.",
  linkText = "Vezi ghidul de măsurători",
  linkHref = "/ghid-masuratori",
}: FricaMasuratorProps) {
  return (
    <section className="px-4 py-20 md:py-24">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-6 text-xl font-bold text-gray-900 md:text-2xl">
          {question}
        </h2>
        <p className="mb-8 text-base text-gray-900 md:text-lg">
          {answer}
        </p>
        <a
          href={linkHref}
          className="text-base font-medium text-blue-600 hover:text-blue-800"
        >
          {linkText}
        </a>
      </div>
    </section>
  );
}
