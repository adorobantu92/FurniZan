interface Step {
  title: string;
  description: string;
}

interface ProcesIn4PasiProps {
  steps?: Step[];
}

export default function ProcesIn4Pasi({
  steps = [
    {
      title: "Măsori",
      description: "Folosind ghidul nostru simplu de măsurători.",
    },
    {
      title: "Trimiți dimensiunile",
      description: "Schiță, poze sau formular online.",
    },
    {
      title: "Producem",
      description: "Mobilier realizat exact pe datele tale.",
    },
    {
      title: "Primești și montezi",
      description: "Livrare pe palet, montaj DIY ghidat.",
    },
  ],
}: ProcesIn4PasiProps) {
  return (
    <section className="px-4 py-20 md:py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-12 text-2xl font-bold tracking-tight text-gray-900 md:mb-16 md:text-3xl">
          Cum funcționează
        </h2>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col">
              <span className="mb-4 text-3xl font-extrabold text-blue-600">
                {index + 1}
              </span>
              <h3 className="mb-3 text-lg font-bold text-gray-900">
                {step.title}
              </h3>
              <p className="text-base text-gray-900">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
