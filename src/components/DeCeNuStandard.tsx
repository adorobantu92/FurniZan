interface DeCeNuStandardProps {
  standardPoints?: string[];
  customPoints?: string[];
  closingStatement?: string;
}

export default function DeCeNuStandard({
  standardPoints = [
    "Dimensiuni fixe",
    "Compromisuri de spațiu",
    "Adaptare forțată",
  ],
  customPoints = [
    "Dimensiuni exacte",
    "Folosirea completă a spațiului",
    "Control asupra configurației",
  ],
  closingStatement = "Mobilă standard e potrivită când se potrivește. Noi existăm pentru restul cazurilor.",
}: DeCeNuStandardProps) {
  return (
    <section className="px-4 py-20 md:py-24">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-12 text-2xl font-bold tracking-tight text-gray-900 md:mb-16 md:text-3xl">
          De ce nu mobilă standard?
        </h2>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <div>
            <h3 className="mb-6 text-lg font-normal text-gray-900">
              Mobilă standard
            </h3>
            <ul className="space-y-4">
              {standardPoints.map((point, index) => (
                <li
                  key={index}
                  className="text-base font-normal text-gray-900 before:mr-3 before:content-['•']"
                >
                  {point}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-6 text-lg font-bold text-gray-900">
              Mobilă pe dimensiuni
            </h3>
            <ul className="space-y-4">
              {customPoints.map((point, index) => (
                <li
                  key={index}
                  className="text-base font-medium text-gray-900 before:mr-3 before:content-['•']"
                >
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="mt-12 text-base text-gray-900 md:mt-16 md:text-lg">
          {closingStatement}
        </p>
      </div>
    </section>
  );
}
