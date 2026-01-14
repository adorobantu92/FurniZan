export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* HERO */}
      <section className="px-6 py-24 md:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-8 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
            Mobilă pe dimensiunile tale.
          </h1>
          <p className="mb-12 text-xl text-gray-900 md:text-2xl">
            Măsori. Noi o producem. O primești pe palet și o montezi.
          </p>
          <div className="flex flex-col items-center gap-6">
            <a
              href="/cerere-oferta"
              className="bg-blue-600 px-10 py-4 text-lg font-bold text-white hover:bg-blue-700"
            >
              Cere ofertă pe dimensiunile tale
            </a>
            <a
              href="/shop"
              className="text-base text-gray-900 underline hover:text-blue-600"
            >
              Produse gata de livrare
            </a>
          </div>
        </div>
      </section>

      {/* WHO THIS IS FOR */}
      <section className="px-6 py-20 md:py-24">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-10 text-2xl font-bold md:text-3xl">
            Pentru cine este această soluție
          </h2>
          <ul className="mb-12 space-y-4 text-lg md:text-xl">
            <li className="before:mr-4 before:content-['•']">
              Apartamente noi
            </li>
            <li className="before:mr-4 before:content-['•']">
              Renovări majore
            </li>
            <li className="before:mr-4 before:content-['•']">
              Spații mici sau atipice
            </li>
            <li className="before:mr-4 before:content-['•']">
              Oameni care vor control, nu compromisuri
            </li>
          </ul>
          <p className="text-base text-gray-900">
            Dacă vrei montaj inclus sau soluții standard, nu suntem potriviți.
          </p>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="px-6 py-20 md:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <h3 className="mb-4 text-xl font-bold">Bucătărie</h3>
              <p className="mb-4 text-lg text-gray-900">
                Mobilă pe dimensiuni pentru spații care nu iartă erorile.
              </p>
              <a
                href="/pe-dimensiuni/bucatarie"
                className="text-base font-medium text-blue-600 hover:text-blue-800"
              >
                Vezi cum funcționează
              </a>
            </div>
            <div>
              <h3 className="mb-4 text-xl font-bold">Dressing</h3>
              <p className="mb-4 text-lg text-gray-900">
                Depozitare eficientă pentru nișe și spații dificile.
              </p>
              <a
                href="/pe-dimensiuni/dressing"
                className="text-base font-medium text-blue-600 hover:text-blue-800"
              >
                Vezi cum funcționează
              </a>
            </div>
            <div>
              <h3 className="mb-4 text-xl font-bold">Baie</h3>
              <p className="mb-4 text-lg text-gray-900">
                Mobilier adaptat spațiilor mici și instalațiilor existente.
              </p>
              <a
                href="/pe-dimensiuni/baie"
                className="text-base font-medium text-blue-600 hover:text-blue-800"
              >
                Vezi cum funcționează
              </a>
            </div>
            <div>
              <h3 className="mb-4 text-xl font-bold">Birou</h3>
              <p className="mb-4 text-lg text-gray-900">
                Birouri și spații de lucru pe dimensiunile tale.
              </p>
              <a
                href="/pe-dimensiuni/birou"
                className="text-base font-medium text-blue-600 hover:text-blue-800"
              >
                Vezi cum funcționează
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="px-6 py-20 md:py-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-16 text-2xl font-bold md:text-3xl">
            Cum funcționează
          </h2>
          <div className="grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <span className="mb-4 block text-4xl font-bold text-blue-600">
                1
              </span>
              <h3 className="mb-3 text-xl font-bold">Măsori</h3>
              <p className="text-lg text-gray-900">
                Folosind ghidul nostru simplu de măsurători.
              </p>
            </div>
            <div>
              <span className="mb-4 block text-4xl font-bold text-blue-600">
                2
              </span>
              <h3 className="mb-3 text-xl font-bold">Trimiți dimensiunile</h3>
              <p className="text-lg text-gray-900">
                Schiță, poze sau formular online.
              </p>
            </div>
            <div>
              <span className="mb-4 block text-4xl font-bold text-blue-600">
                3
              </span>
              <h3 className="mb-3 text-xl font-bold">Producem</h3>
              <p className="text-lg text-gray-900">
                Mobilier realizat exact pe datele tale.
              </p>
            </div>
            <div>
              <span className="mb-4 block text-4xl font-bold text-blue-600">
                4
              </span>
              <h3 className="mb-3 text-xl font-bold">Primești și montezi</h3>
              <p className="text-lg text-gray-900">
                Livrare pe palet, montaj DIY ghidat.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FEAR REDUCTION */}
      <section className="px-6 py-20 md:py-24">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-6 text-xl font-bold md:text-2xl">
            Ce se întâmplă dacă măsor greșit?
          </h2>
          <p className="mb-8 text-lg text-gray-900 md:text-xl">
            Te ajutăm să verifici măsurătorile înainte de producție. Ai ghid pas
            cu pas și suport dedicat.
          </p>
          <a
            href="/ghid-masuratori"
            className="text-lg font-medium text-blue-600 hover:text-blue-800"
          >
            Vezi ghidul de măsurători
          </a>
        </div>
      </section>

      {/* WHY NOT STANDARD */}
      <section className="px-6 py-20 md:py-24">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-16 text-2xl font-bold md:text-3xl">
            De ce nu mobilă standard?
          </h2>
          <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
            <div>
              <h3 className="mb-6 text-xl font-normal text-gray-900">
                Mobilă standard
              </h3>
              <ul className="space-y-4 text-lg">
                <li className="before:mr-4 before:content-['•']">
                  Dimensiuni fixe
                </li>
                <li className="before:mr-4 before:content-['•']">
                  Compromisuri de spațiu
                </li>
                <li className="before:mr-4 before:content-['•']">
                  Adaptare forțată
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-6 text-xl font-bold text-gray-900">
                Mobilă pe dimensiuni
              </h3>
              <ul className="space-y-4 text-lg font-medium">
                <li className="before:mr-4 before:content-['•']">
                  Dimensiuni exacte
                </li>
                <li className="before:mr-4 before:content-['•']">
                  Folosirea completă a spațiului
                </li>
                <li className="before:mr-4 before:content-['•']">
                  Control asupra configurației
                </li>
              </ul>
            </div>
          </div>
          <p className="mt-16 text-lg text-gray-900 md:text-xl">
            Mobilă standard e potrivită când se potrivește. Noi existăm pentru
            restul cazurilor.
          </p>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-6 py-24 md:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <a
            href="/cerere-oferta"
            className="inline-block bg-blue-600 px-12 py-5 text-xl font-bold text-white hover:bg-blue-700"
          >
            Cere ofertă pe dimensiunile tale
          </a>
          <p className="mt-8 text-lg text-gray-900">
            Nu costă nimic să verificăm dacă se poate face.
          </p>
        </div>
      </section>
    </main>
  );
}
