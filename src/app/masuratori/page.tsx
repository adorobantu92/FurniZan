export default function MasuratoriPage() {
  return (
    <main className="min-h-screen bg-stone-50 text-gray-900">
      <div className="mx-auto max-w-6xl px-6 sm:px-8 md:px-12 lg:px-16">
        {/* HERO */}
        <section className="flex min-h-[50vh] flex-col justify-center py-12 sm:min-h-[60vh] sm:py-16 md:py-20">
          <div className="border-l-2 border-gray-900 pl-6 sm:pl-8 md:pl-10">
            <h1 className="mb-5 max-w-3xl text-4xl font-extrabold leading-[1.1] tracking-tight sm:mb-6 md:mb-8 md:text-5xl lg:text-6xl">
              Cum măsori corect
            </h1>
            <p className="mb-6 max-w-xl text-lg leading-relaxed text-gray-600 sm:mb-8 md:text-xl lg:text-2xl">
              Precizia măsurătorilor determină dacă mobilierul se potrivește perfect sau nu. Nu e complicat, dar cere atenție.
            </p>
            <p className="max-w-lg text-base text-gray-500 sm:text-lg">
              Acest ghid te pregătește să măsori corect din prima încercare.
            </p>
          </div>
        </section>

        <hr className="border-gray-300" />

        {/* BEFORE YOU START */}
        <section className="py-12 sm:py-16 md:py-24">
          <div className="border-l-2 border-gray-300 pl-6 sm:pl-8 md:pl-10">
            <h2 className="mb-6 text-2xl font-bold sm:mb-8 md:mb-10 md:text-3xl lg:text-4xl">
              Înainte să începi
            </h2>
            <div className="mb-8 space-y-4 sm:mb-10 md:mb-12">
              <div>
                <h3 className="mb-1 text-base font-bold sm:mb-2 md:text-lg">Ce ai nevoie</h3>
                <p className="max-w-xl text-sm text-gray-500 sm:text-base">
                  Un metru ruleta (minim 3m), un creion, o foaie de hârtie, și telefonul pentru poze.
                </p>
              </div>
              <div>
                <h3 className="mb-1 text-base font-bold sm:mb-2 md:text-lg">Cât durează</h3>
                <p className="max-w-xl text-sm text-gray-500 sm:text-base">
                  15-30 de minute pentru o cameră. Nu te grăbi.
                </p>
              </div>
              <div>
                <h3 className="mb-1 text-base font-bold sm:mb-2 md:text-lg">Regula de aur</h3>
                <p className="max-w-xl text-sm text-gray-500 sm:text-base">
                  Măsoară de cel puțin două ori. Notează imediat. Verifică înainte să trimiți.
                </p>
              </div>
            </div>
          </div>
        </section>

        <hr className="border-gray-300" />

        {/* HOW TO MEASURE */}
        <section className="py-12 sm:py-16 md:py-24">
          <div className="mb-8 border-l-2 border-gray-300 pl-6 sm:mb-10 sm:pl-8 md:mb-14 md:pl-10">
            <h2 className="text-2xl font-bold md:text-3xl lg:text-4xl">
              Cum se măsoară corect
            </h2>
          </div>
          <div className="space-y-0">
            <div className="flex border-l-2 border-blue-600 py-5 pl-6 sm:py-6 sm:pl-8 md:py-8 md:pl-10">
              <span className="mr-4 text-2xl font-extrabold text-blue-600 sm:mr-6 sm:text-3xl md:text-4xl">01</span>
              <div>
                <h3 className="text-base font-bold sm:text-lg md:text-xl">Măsoară lățimea în mai multe puncte</h3>
                <p className="mt-1 max-w-lg text-sm text-gray-500 sm:mt-2 sm:text-base">
                  Pereții nu sunt perfect drepți. Măsoară lățimea jos (la podea), la mijloc și sus. Notează cea mai mică valoare.
                </p>
              </div>
            </div>
            <div className="flex border-l-2 border-blue-600 py-5 pl-6 sm:py-6 sm:pl-8 md:py-8 md:pl-10">
              <span className="mr-4 text-2xl font-extrabold text-blue-600 sm:mr-6 sm:text-3xl md:text-4xl">02</span>
              <div>
                <h3 className="text-base font-bold sm:text-lg md:text-xl">Măsoară înălțimea de la podea la tavan</h3>
                <p className="mt-1 max-w-lg text-sm text-gray-500 sm:mt-2 sm:text-base">
                  Măsoară în colțuri și la mijloc. Podelele și tavanele pot fi inegale. Notează cea mai mică valoare.
                </p>
              </div>
            </div>
            <div className="flex border-l-2 border-blue-600 py-5 pl-6 sm:py-6 sm:pl-8 md:py-8 md:pl-10">
              <span className="mr-4 text-2xl font-extrabold text-blue-600 sm:mr-6 sm:text-3xl md:text-4xl">03</span>
              <div>
                <h3 className="text-base font-bold sm:text-lg md:text-xl">Notează poziția obstacolelor</h3>
                <p className="mt-1 max-w-lg text-sm text-gray-500 sm:mt-2 sm:text-base">
                  Prize, întrerupătoare, țevi, calorifere, cornișe. Măsoară distanța de la colțul de referință până la fiecare obstacol.
                </p>
              </div>
            </div>
            <div className="flex border-l-2 border-blue-600 py-5 pl-6 sm:py-6 sm:pl-8 md:py-8 md:pl-10">
              <span className="mr-4 text-2xl font-extrabold text-blue-600 sm:mr-6 sm:text-3xl md:text-4xl">04</span>
              <div>
                <h3 className="text-base font-bold sm:text-lg md:text-xl">Măsoară adâncimea disponibilă</h3>
                <p className="mt-1 max-w-lg text-sm text-gray-500 sm:mt-2 sm:text-base">
                  Cât de mult poate ieși mobilierul în cameră? Ia în calcul ușile, trecerile și spațiul de mișcare.
                </p>
              </div>
            </div>
            <div className="flex border-l-2 border-blue-600 py-5 pl-6 sm:py-6 sm:pl-8 md:py-8 md:pl-10">
              <span className="mr-4 text-2xl font-extrabold text-blue-600 sm:mr-6 sm:text-3xl md:text-4xl">05</span>
              <div>
                <h3 className="text-base font-bold sm:text-lg md:text-xl">Fotografiază spațiul</h3>
                <p className="mt-1 max-w-lg text-sm text-gray-500 sm:mt-2 sm:text-base">
                  Fă poze de ansamblu și detalii ale obstacolelor. Pozele ne ajută să înțelegem contextul.
                </p>
              </div>
            </div>
            <div className="flex border-l-2 border-blue-600 py-5 pl-6 sm:py-6 sm:pl-8 md:py-8 md:pl-10">
              <span className="mr-4 text-2xl font-extrabold text-blue-600 sm:mr-6 sm:text-3xl md:text-4xl">06</span>
              <div>
                <h3 className="text-base font-bold sm:text-lg md:text-xl">Desenează o schiță simplă</h3>
                <p className="mt-1 max-w-lg text-sm text-gray-500 sm:mt-2 sm:text-base">
                  Nu trebuie să fie perfectă. Un desen de mână cu dimensiunile notate e suficient.
                </p>
              </div>
            </div>
          </div>
        </section>

        <hr className="border-gray-300" />

        {/* COMMON MISTAKES */}
        <section className="py-12 sm:py-16 md:py-24">
          <div className="border-l-2 border-gray-300 pl-6 sm:pl-8 md:pl-10">
            <h2 className="mb-6 text-2xl font-bold sm:mb-8 md:mb-10 md:text-3xl lg:text-4xl">
              Greșeli frecvente
            </h2>
            <div className="space-y-6 sm:space-y-8">
              <div>
                <h3 className="mb-1 text-base font-bold sm:mb-2 md:text-lg">Măsurarea într-un singur punct</h3>
                <p className="max-w-xl text-sm text-gray-500 sm:text-base">
                  Un perete poate varia cu 1-3 cm de la podea la tavan. Dacă măsori doar sus, mobilierul poate să nu încapă jos.
                </p>
              </div>
              <div>
                <h3 className="mb-1 text-base font-bold sm:mb-2 md:text-lg">Uitarea prizelor și țevilor</h3>
                <p className="max-w-xl text-sm text-gray-500 sm:text-base">
                  Fără poziția exactă a obstacolelor, nu putem face decupajele necesare. Mobilierul nu va încăpea sau va bloca accesul.
                </p>
              </div>
              <div>
                <h3 className="mb-1 text-base font-bold sm:mb-2 md:text-lg">Rotunjirea cifrelor</h3>
                <p className="max-w-xl text-sm text-gray-500 sm:text-base">
                  147 cm nu e același lucru cu 150 cm. Notează exact ce măsori, în milimetri dacă e posibil.
                </p>
              </div>
              <div>
                <h3 className="mb-1 text-base font-bold sm:mb-2 md:text-lg">Presupuneri despre unghiuri drepte</h3>
                <p className="max-w-xl text-sm text-gray-500 sm:text-base">
                  Colțurile rareori sunt exact de 90°. Măsoară diagonalele dacă ai dubii sau menționează că unghiul pare înclinat.
                </p>
              </div>
              <div>
                <h3 className="mb-1 text-base font-bold sm:mb-2 md:text-lg">Notarea tardivă</h3>
                <p className="max-w-xl text-sm text-gray-500 sm:text-base">
                  Scrie fiecare măsurătoare imediat. Dacă aștepți până la final, riști să confunzi valorile.
                </p>
              </div>
            </div>
          </div>
        </section>

        <hr className="border-gray-300" />

        {/* VERIFICATION */}
        <section className="py-12 sm:py-16 md:py-24">
          <div className="border-l-2 border-gray-300 pl-6 sm:pl-8 md:pl-10">
            <h2 className="mb-6 text-2xl font-bold sm:mb-8 md:mb-10 md:text-3xl lg:text-4xl">
              Verificare înainte de producție
            </h2>
            <p className="mb-6 max-w-xl text-base text-gray-600 sm:mb-8 md:text-lg">
              Nu producem nimic înainte de a valida măsurătorile împreună cu tine.
            </p>
            <div className="space-y-4 sm:space-y-6">
              <div>
                <h3 className="mb-1 text-base font-bold sm:mb-2 md:text-lg">Ce verificăm</h3>
                <p className="max-w-xl text-sm text-gray-500 sm:text-base">
                  Consistența între valori, poziția obstacolelor, claritatea schiței. Dacă ceva nu pare logic, te contactăm.
                </p>
              </div>
              <div>
                <h3 className="mb-1 text-base font-bold sm:mb-2 md:text-lg">Ce se întâmplă dacă găsim o problemă</h3>
                <p className="max-w-xl text-sm text-gray-500 sm:text-base">
                  Te rugăm să remăsori punctele incerte. Procesul nu avansează până nu suntem amândoi siguri.
                </p>
              </div>
              <div>
                <h3 className="mb-1 text-base font-bold sm:mb-2 md:text-lg">Responsabilitatea finală</h3>
                <p className="max-w-xl text-sm text-gray-500 sm:text-base">
                  Tu confirmi corectitudinea datelor înainte de producție. De aceea e important să măsori cu atenție.
                </p>
              </div>
            </div>
          </div>
        </section>

        <hr className="border-gray-300" />

        {/* WHO SHOULD NOT DO THIS */}
        <section className="py-12 sm:py-16 md:py-24">
          <div className="border-l-2 border-gray-300 pl-6 sm:pl-8 md:pl-10">
            <h2 className="mb-6 text-2xl font-bold sm:mb-8 md:mb-10 md:text-3xl lg:text-4xl">
              Când să nu măsori singur
            </h2>
            <ul className="mb-8 space-y-2 text-base text-gray-600 sm:mb-10 sm:space-y-3 md:text-lg">
              <li className="py-1">Spații foarte neregulate cu multe unghiuri sau curbe</li>
              <li className="py-1">Încăperi unde nu ai acces fizic la toate suprafețele</li>
              <li className="py-1">Situații unde nu te simți confortabil cu măsurătorile</li>
              <li className="py-1">Proiecte complexe cu integrare de electrocasnice</li>
            </ul>
            <p className="max-w-lg text-sm text-gray-500 sm:text-base">
              În aceste cazuri, recomandăm să apelezi la un meșter local pentru măsurători profesionale.
            </p>
          </div>
        </section>

        <hr className="border-gray-300" />

        {/* FINAL CTA */}
        <section className="py-14 sm:py-20 md:py-28">
          <div className="border-l-2 border-blue-600 bg-white py-8 pl-6 pr-6 sm:py-10 sm:pl-8 sm:pr-8 md:py-14 md:pl-10 md:pr-10">
            <h2 className="mb-4 text-xl font-bold sm:mb-5 md:mb-6 md:text-2xl lg:text-3xl">
              Ai măsurat deja?
            </h2>
            <p className="mb-6 max-w-xl text-base text-gray-600 sm:mb-8 md:text-lg">
              Următorul pas e să ne trimiți datele. Verificăm împreună și îți confirmăm dacă totul e în regulă.
            </p>
            <a
              href="/cum-functioneaza"
              className="inline-block bg-blue-600 px-8 py-3 text-base font-bold text-white transition-colors hover:bg-blue-700 sm:px-10 sm:py-4 sm:text-lg"
            >
              Vezi cum funcționează procesul
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
