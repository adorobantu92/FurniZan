export default function HomePage() {
  return (
    <main className="min-h-screen bg-stone-50 text-gray-900">
      <div className="mx-auto max-w-6xl px-6 sm:px-8 md:px-12 lg:px-16">
        {/* HERO */}
        <section className="flex min-h-[70vh] flex-col justify-center py-12 sm:min-h-[80vh] sm:py-16 md:min-h-[85vh] md:py-20">
          <div className="border-l-2 border-gray-900 pl-6 sm:pl-8 md:pl-10">
            <h1 className="mb-5 max-w-3xl text-4xl font-extrabold leading-[1.1] tracking-tight sm:mb-6 md:mb-8 md:text-5xl lg:text-7xl">
              Mobilă pe dimensiunile tale.
            </h1>
            <p className="mb-8 max-w-xl text-lg leading-relaxed text-gray-600 sm:mb-10 md:mb-14 md:text-xl lg:text-2xl">
              Măsori. Noi o producem. O primești pe palet și o montezi.
            </p>
            <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-6">
              <a
                href="/cum-functioneaza"
                className="bg-blue-600 px-8 py-3 text-base font-bold text-white transition-colors hover:bg-blue-700 sm:px-10 sm:py-4 sm:text-lg"
              >
                Cere ofertă pe dimensiunile tale
              </a>
              <a
                href="/shop"
                className="text-sm font-medium text-blue-600 underline decoration-blue-600/40 underline-offset-4 transition-colors hover:text-blue-800 hover:decoration-blue-800 sm:text-base"
              >
                Produse gata de livrare →
              </a>
            </div>
          </div>
        </section>

        <hr className="border-gray-300" />

        {/* TENSION HOOK */}
        <div className="border-l-2 border-gray-900 py-8 pl-6 sm:py-10 sm:pl-8 md:py-12 md:pl-10">
          <p className="max-w-2xl text-base font-medium text-gray-700 sm:text-lg md:text-xl">
            Mobilă pe dimensiuni nu e pentru toată lumea. Cere timp, atenție și măsurători corecte.
          </p>
        </div>

        <hr className="border-gray-300" />

        {/* WHO THIS IS FOR */}
        <section className="py-12 sm:py-16 md:py-28">
          <div className="border-l-2 border-gray-300 pl-6 sm:pl-8 md:pl-10">
            <h2 className="mb-6 text-2xl font-bold sm:mb-8 md:mb-10 md:text-3xl lg:text-4xl">
              Pentru cine este
            </h2>
            <ul className="mb-8 space-y-1 text-base text-gray-600 sm:mb-10 sm:space-y-2 md:mb-12 md:text-lg lg:text-xl">
              <li className="py-1 sm:py-2">Apartamente noi</li>
              <li className="py-1 sm:py-2">Renovări majore</li>
              <li className="py-1 sm:py-2">Spații mici sau atipice</li>
              <li className="py-1 sm:py-2">Oameni care vor control, nu compromisuri</li>
            </ul>
            <p className="max-w-lg text-sm text-gray-500 sm:text-base">
              Dacă vrei montaj inclus sau soluții standard, nu suntem potriviți.
            </p>
          </div>
        </section>

        <hr className="border-gray-300" />

        {/* CATEGORIES */}
        <section className="py-12 sm:py-16 md:py-28">
          <div className="mb-8 border-l-2 border-gray-300 pl-6 sm:mb-10 sm:pl-8 md:mb-14 md:pl-10">
            <h2 className="text-2xl font-bold md:text-3xl lg:text-4xl">
              Ce poți comanda
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <a
              href="/pe-dimensiuni/bucatarie"
              className="group flex border-l-2 border-gray-300 py-4 pl-6 transition-all hover:border-blue-600 hover:bg-white sm:py-5 sm:pl-8 md:py-6 md:pl-10"
            >
              <div>
                <h3 className="mb-1 text-lg font-bold text-gray-900 transition-colors group-hover:text-blue-600 sm:mb-2 md:text-xl lg:text-2xl">
                  Bucătărie →
                </h3>
                <p className="text-sm text-gray-500 sm:text-base md:text-lg">
                  Mobilă pe dimensiuni pentru spații care nu iartă erorile.
                </p>
              </div>
            </a>
            <a
              href="/pe-dimensiuni/dressing"
              className="group flex border-l-2 border-gray-300 py-4 pl-6 transition-all hover:border-blue-600 hover:bg-white sm:py-5 sm:pl-8 md:py-6 md:pl-10"
            >
              <div>
                <h3 className="mb-1 text-lg font-bold text-gray-900 transition-colors group-hover:text-blue-600 sm:mb-2 md:text-xl lg:text-2xl">
                  Dressing →
                </h3>
                <p className="text-sm text-gray-500 sm:text-base md:text-lg">
                  Depozitare eficientă pentru nișe și spații dificile.
                </p>
              </div>
            </a>
            <a
              href="/pe-dimensiuni/baie"
              className="group flex border-l-2 border-gray-300 py-4 pl-6 transition-all hover:border-blue-600 hover:bg-white sm:py-5 sm:pl-8 md:py-6 md:pl-10"
            >
              <div>
                <h3 className="mb-1 text-lg font-bold text-gray-900 transition-colors group-hover:text-blue-600 sm:mb-2 md:text-xl lg:text-2xl">
                  Baie →
                </h3>
                <p className="text-sm text-gray-500 sm:text-base md:text-lg">
                  Mobilier adaptat spațiilor mici și instalațiilor existente.
                </p>
              </div>
            </a>
            <a
              href="/pe-dimensiuni/birou"
              className="group flex border-l-2 border-gray-300 py-4 pl-6 transition-all hover:border-blue-600 hover:bg-white sm:py-5 sm:pl-8 md:py-6 md:pl-10"
            >
              <div>
                <h3 className="mb-1 text-lg font-bold text-gray-900 transition-colors group-hover:text-blue-600 sm:mb-2 md:text-xl lg:text-2xl">
                  Birou →
                </h3>
                <p className="text-sm text-gray-500 sm:text-base md:text-lg">
                  Birouri și spații de lucru pe dimensiunile tale.
                </p>
              </div>
            </a>
          </div>
        </section>

        <hr className="border-gray-300" />

        {/* HOW IT WORKS */}
        <section className="py-12 sm:py-16 md:py-28">
          <div className="mb-8 border-l-2 border-gray-300 pl-6 sm:mb-10 sm:pl-8 md:mb-14 md:pl-10">
            <h2 className="text-2xl font-bold md:text-3xl lg:text-4xl">
              Cum funcționează
            </h2>
          </div>
          <div className="space-y-0">
            <div className="flex border-l-2 border-blue-600 py-4 pl-6 sm:py-5 sm:pl-8 md:py-6 md:pl-10">
              <span className="mr-4 text-2xl font-extrabold text-blue-600 sm:mr-6 sm:text-3xl md:text-4xl">01</span>
              <div>
                <h3 className="text-base font-bold sm:text-lg md:text-xl">Măsori</h3>
                <p className="text-sm text-gray-500 sm:text-base">
                  Folosind ghidul nostru simplu de măsurători.
                </p>
              </div>
            </div>
            <div className="flex border-l-2 border-blue-600 py-4 pl-6 sm:py-5 sm:pl-8 md:py-6 md:pl-10">
              <span className="mr-4 text-2xl font-extrabold text-blue-600 sm:mr-6 sm:text-3xl md:text-4xl">02</span>
              <div>
                <h3 className="text-base font-bold sm:text-lg md:text-xl">Trimiți</h3>
                <p className="text-sm text-gray-500 sm:text-base">
                  Schiță, poze sau formular online.
                </p>
              </div>
            </div>
            <div className="flex border-l-2 border-blue-600 py-4 pl-6 sm:py-5 sm:pl-8 md:py-6 md:pl-10">
              <span className="mr-4 text-2xl font-extrabold text-blue-600 sm:mr-6 sm:text-3xl md:text-4xl">03</span>
              <div>
                <h3 className="text-base font-bold sm:text-lg md:text-xl">Producem</h3>
                <p className="text-sm text-gray-500 sm:text-base">
                  Mobilier realizat exact pe datele tale.
                </p>
              </div>
            </div>
            <div className="flex border-l-2 border-blue-600 py-4 pl-6 sm:py-5 sm:pl-8 md:py-6 md:pl-10">
              <span className="mr-4 text-2xl font-extrabold text-blue-600 sm:mr-6 sm:text-3xl md:text-4xl">04</span>
              <div>
                <h3 className="text-base font-bold sm:text-lg md:text-xl">Montezi</h3>
                <p className="text-sm text-gray-500 sm:text-base">
                  Livrare pe palet, montaj DIY ghidat.
                </p>
              </div>
            </div>
          </div>
        </section>

        <hr className="border-gray-300" />

        {/* FEAR REDUCTION */}
        <section className="py-10 sm:py-14 md:py-20">
          <div className="border-l-2 border-gray-300 pl-6 sm:pl-8 md:pl-10">
            <h2 className="mb-3 text-xl font-bold sm:mb-4 md:text-2xl lg:text-3xl">
              Ce se întâmplă dacă măsor greșit?
            </h2>
            <p className="mb-4 max-w-xl text-sm text-gray-500 sm:mb-6 sm:text-base md:text-lg">
              Te ajutăm să verifici măsurătorile înainte de producție. Ai ghid pas
              cu pas și suport dedicat.
            </p>
            <a
              href="/masuratori"
              className="text-sm font-bold text-blue-600 underline decoration-blue-600/40 underline-offset-4 transition-colors hover:text-blue-800 hover:decoration-blue-800 sm:text-base"
            >
              Vezi ghidul de măsurători →
            </a>
          </div>
        </section>

        <hr className="border-gray-300" />

        {/* WHY NOT STANDARD - DECISION MOMENT */}
        <section className="py-12 sm:py-16 md:py-28">
          <div className="mb-8 border-l-2 border-gray-300 pl-6 sm:mb-10 sm:pl-8 md:mb-14 md:pl-10">
            <h2 className="text-2xl font-bold md:text-3xl lg:text-4xl">
              De ce nu mobilă standard?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="border-l-2 border-gray-200 bg-gray-100/50 py-6 pl-6 pr-4 sm:py-8 sm:pl-8 md:py-10 md:pl-10">
              <h3 className="mb-4 text-base font-normal text-gray-400 sm:mb-5 md:mb-6 md:text-lg">
                Mobilă standard
              </h3>
              <ul className="space-y-2 text-sm text-gray-400 sm:space-y-3 sm:text-base md:text-lg">
                <li>Dimensiuni fixe</li>
                <li>Compromisuri de spațiu</li>
                <li>Adaptare forțată</li>
              </ul>
            </div>
            <div className="border-l-2 border-blue-600 bg-white py-6 pl-6 pr-4 sm:py-8 sm:pl-8 md:py-10 md:pl-10">
              <h3 className="mb-4 text-base font-bold text-gray-900 sm:mb-5 md:mb-6 md:text-lg">
                Mobilă pe dimensiuni
              </h3>
              <ul className="space-y-2 text-sm font-semibold text-gray-900 sm:space-y-3 sm:text-base md:text-lg">
                <li>Dimensiuni exacte</li>
                <li>Folosirea completă a spațiului</li>
                <li>Control asupra configurației</li>
              </ul>
            </div>
          </div>
          <div className="mt-6 border-l-2 border-gray-300 pl-6 sm:mt-8 sm:pl-8 md:mt-10 md:pl-10">
            <p className="max-w-xl text-sm text-gray-500 sm:text-base md:text-lg">
              Mobilă standard e potrivită când se potrivește.
              <span className="font-semibold text-gray-900"> Noi existăm pentru restul cazurilor.</span>
            </p>
          </div>
        </section>

        <hr className="border-gray-300" />

        {/* FINAL CTA - STOP AND DECIDE */}
        <section className="py-14 sm:py-20 md:py-32">
          <div className="border-l-2 border-blue-600 bg-white py-8 pl-6 pr-6 sm:py-10 sm:pl-8 sm:pr-8 md:py-14 md:pl-10 md:pr-10">
            <p className="mb-5 text-base text-gray-600 sm:mb-6 md:mb-8 md:text-lg lg:text-xl">
              Nu costă nimic să verificăm dacă se poate face.
            </p>
            <a
              href="/cum-functioneaza"
              className="inline-block bg-blue-600 px-8 py-3 text-base font-bold text-white transition-colors hover:bg-blue-700 sm:px-10 sm:py-4 sm:text-lg"
            >
              Cere ofertă pe dimensiunile tale
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
