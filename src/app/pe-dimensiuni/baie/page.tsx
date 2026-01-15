export default function BaiePage() {
  return (
    <main className="min-h-screen bg-stone-50 text-gray-900">
      <div className="mx-auto max-w-6xl px-6 sm:px-8 md:px-12 lg:px-16">
        {/* HERO */}
        <section className="flex min-h-[50vh] flex-col justify-center py-12 sm:min-h-[60vh] sm:py-16 md:py-20">
          <div className="border-l-2 border-gray-900 pl-6 sm:pl-8 md:pl-10">
            <h1 className="mb-5 max-w-3xl text-4xl font-extrabold leading-[1.1] tracking-tight sm:mb-6 md:mb-8 md:text-5xl lg:text-6xl">
              Mobilier de baie pe dimensiuni
            </h1>
            <p className="mb-8 max-w-xl text-lg leading-relaxed text-gray-600 sm:mb-10 md:mb-14 md:text-xl lg:text-2xl">
              Dulapuri și blaturi care se potrivesc exact în spațiul tău. Tu măsori, noi producem, tu montezi.
            </p>
            <a
              href="/masuratori"
              className="inline-block bg-blue-600 px-8 py-3 text-base font-bold text-white transition-colors hover:bg-blue-700 sm:px-10 sm:py-4 sm:text-lg"
            >
              Vezi cum se măsoară corect
            </a>
          </div>
        </section>

        <hr className="border-gray-300" />

        {/* PENTRU CINE ESTE */}
        <section className="py-12 sm:py-16 md:py-24">
          <div className="border-l-2 border-gray-300 pl-6 sm:pl-8 md:pl-10">
            <h2 className="mb-6 text-2xl font-bold sm:mb-8 md:mb-10 md:text-3xl lg:text-4xl">
              Pentru cine funcționează
            </h2>
            <ul className="mb-8 space-y-1 text-base text-gray-600 sm:mb-10 sm:space-y-2 md:mb-12 md:text-lg lg:text-xl">
              <li className="py-1 sm:py-2">Băi mici unde fiecare centimetru contează</li>
              <li className="py-1 sm:py-2">Spații cu țevi aparente sau instalații nestandard</li>
              <li className="py-1 sm:py-2">Nișe sau colțuri greu de mobilat</li>
              <li className="py-1 sm:py-2">Apartamente vechi cu dimensiuni atipice</li>
            </ul>
            <p className="max-w-lg text-sm text-gray-500 sm:text-base">
              Nu este potrivit pentru cei care vor montaj profesionist inclus sau instalații sanitare.
            </p>
          </div>
        </section>

        <hr className="border-gray-300" />

        {/* CE POȚI PERSONALIZA */}
        <section className="py-12 sm:py-16 md:py-24">
          <div className="mb-8 border-l-2 border-gray-300 pl-6 sm:mb-10 sm:pl-8 md:mb-14 md:pl-10">
            <h2 className="text-2xl font-bold md:text-3xl lg:text-4xl">
              Ce poți personaliza
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-0 md:grid-cols-2">
            <div className="border-l-2 border-gray-300 py-4 pl-6 sm:py-5 sm:pl-8 md:py-6 md:pl-10">
              <h3 className="mb-1 text-base font-bold sm:mb-2 md:text-lg">Lățime și înălțime</h3>
              <p className="text-sm text-gray-500 sm:text-base">
                Dulapuri adaptate exact la spațiul disponibil, de la 30 cm la 180 cm.
              </p>
            </div>
            <div className="border-l-2 border-gray-300 py-4 pl-6 sm:py-5 sm:pl-8 md:py-6 md:pl-10">
              <h3 className="mb-1 text-base font-bold sm:mb-2 md:text-lg">Adâncime</h3>
              <p className="text-sm text-gray-500 sm:text-base">
                De la 25 cm pentru spații înguste până la 50 cm pentru blaturi generoase.
              </p>
            </div>
            <div className="border-l-2 border-gray-300 py-4 pl-6 sm:py-5 sm:pl-8 md:py-6 md:pl-10">
              <h3 className="mb-1 text-base font-bold sm:mb-2 md:text-lg">Decupaje pentru instalații</h3>
              <p className="text-sm text-gray-500 sm:text-base">
                Găuri pentru țevi, sifon, prize. Poziționate exact unde ai nevoie.
              </p>
            </div>
            <div className="border-l-2 border-gray-300 py-4 pl-6 sm:py-5 sm:pl-8 md:py-6 md:pl-10">
              <h3 className="mb-1 text-base font-bold sm:mb-2 md:text-lg">Tip lavoar</h3>
              <p className="text-sm text-gray-500 sm:text-base">
                Blat cu decupaj pentru lavoar încastrat sau suprafață pentru lavoar pe blat.
              </p>
            </div>
            <div className="border-l-2 border-gray-300 py-4 pl-6 sm:py-5 sm:pl-8 md:py-6 md:pl-10">
              <h3 className="mb-1 text-base font-bold sm:mb-2 md:text-lg">Compartimentare</h3>
              <p className="text-sm text-gray-500 sm:text-base">
                Sertare, rafturi, uși. Configurație adaptată la ce depozitezi.
              </p>
            </div>
            <div className="border-l-2 border-gray-300 py-4 pl-6 sm:py-5 sm:pl-8 md:py-6 md:pl-10">
              <h3 className="mb-1 text-base font-bold sm:mb-2 md:text-lg">Finisaje rezistente la umiditate</h3>
              <p className="text-sm text-gray-500 sm:text-base">
                PAL hidrofug, cantări sigilate, suprafețe ușor de curățat.
              </p>
            </div>
          </div>
        </section>

        <hr className="border-gray-300" />

        {/* DE CE MOBILIERUL STANDARD NU SE POTRIVEȘTE */}
        <section className="py-12 sm:py-16 md:py-24">
          <div className="mb-8 border-l-2 border-gray-300 pl-6 sm:mb-10 sm:pl-8 md:mb-14 md:pl-10">
            <h2 className="text-2xl font-bold md:text-3xl lg:text-4xl">
              De ce mobilierul standard de baie nu se potrivește
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="border-l-2 border-gray-200 bg-gray-100/50 py-6 pl-6 pr-4 sm:py-8 sm:pl-8 md:py-10 md:pl-10">
              <h3 className="mb-4 text-base font-normal text-gray-400 sm:mb-5 md:mb-6 md:text-lg">
                Mobilier standard de baie
              </h3>
              <ul className="space-y-2 text-sm text-gray-400 sm:space-y-3 sm:text-base md:text-lg">
                <li>Lățimi fixe (40, 60, 80 cm)</li>
                <li>Decupaj lavoar în poziție centrală</li>
                <li>Adâncime standard de 45 cm</li>
                <li>Fără adaptare la țevi existente</li>
              </ul>
            </div>
            <div className="border-l-2 border-blue-600 bg-white py-6 pl-6 pr-4 sm:py-8 sm:pl-8 md:py-10 md:pl-10">
              <h3 className="mb-4 text-base font-bold text-gray-900 sm:mb-5 md:mb-6 md:text-lg">
                Mobilier pe dimensiuni
              </h3>
              <ul className="space-y-2 text-sm font-semibold text-gray-900 sm:space-y-3 sm:text-base md:text-lg">
                <li>Lățime la milimetru</li>
                <li>Decupaj lavoar unde ai sifonul</li>
                <li>Adâncime adaptată spațiului</li>
                <li>Decupaje exacte pentru instalații</li>
              </ul>
            </div>
          </div>
          <div className="mt-6 border-l-2 border-gray-300 pl-6 sm:mt-8 sm:pl-8 md:mt-10 md:pl-10">
            <p className="max-w-xl text-sm text-gray-500 sm:text-base md:text-lg">
              Băile din blocuri vechi au rareori dimensiuni standard. Mobilierul nostru se adaptează la ce există.
            </p>
          </div>
        </section>

        <hr className="border-gray-300" />

        {/* GREȘELI FRECVENTE */}
        <section className="py-12 sm:py-16 md:py-24">
          <div className="border-l-2 border-gray-300 pl-6 sm:pl-8 md:pl-10">
            <h2 className="mb-6 text-2xl font-bold sm:mb-8 md:mb-10 md:text-3xl lg:text-4xl">
              Greșeli frecvente
            </h2>
            <div className="mb-8 space-y-6 sm:mb-10 md:mb-12">
              <div>
                <h3 className="mb-1 text-base font-bold sm:mb-2 md:text-lg">Uitarea poziției sifonului</h3>
                <p className="max-w-xl text-sm text-gray-500 sm:text-base">
                  Sifonul dictează unde poate fi lavorul. Măsoară distanța de la perete și de la podea.
                </p>
              </div>
              <div>
                <h3 className="mb-1 text-base font-bold sm:mb-2 md:text-lg">Ignorarea țevilor de pe perete</h3>
                <p className="max-w-xl text-sm text-gray-500 sm:text-base">
                  Țevile aparente necesită decupaje în spate. Notează poziția și diametrul exact.
                </p>
              </div>
              <div>
                <h3 className="mb-1 text-base font-bold sm:mb-2 md:text-lg">Măsurarea fără plintă</h3>
                <p className="max-w-xl text-sm text-gray-500 sm:text-base">
                  Dacă ai gresie cu bordură, măsoară de deasupra ei. Altfel dulapul nu va sta drept.
                </p>
              </div>
              <div>
                <h3 className="mb-1 text-base font-bold sm:mb-2 md:text-lg">Nerespectarea deschiderii ușii</h3>
                <p className="max-w-xl text-sm text-gray-500 sm:text-base">
                  Verifică dacă ușile dulapului se pot deschide fără să lovească cada sau vasul de toaletă.
                </p>
              </div>
            </div>
            <a
              href="/masuratori"
              className="text-sm font-bold text-blue-600 underline decoration-blue-600/40 underline-offset-4 transition-colors hover:text-blue-800 hover:decoration-blue-800 sm:text-base"
            >
              Ghid complet de măsurători →
            </a>
          </div>
        </section>

        <hr className="border-gray-300" />

        {/* CUM DECURGE COMANDA */}
        <section className="py-12 sm:py-16 md:py-24">
          <div className="mb-8 border-l-2 border-gray-300 pl-6 sm:mb-10 sm:pl-8 md:mb-14 md:pl-10">
            <h2 className="text-2xl font-bold md:text-3xl lg:text-4xl">
              Cum decurge comanda
            </h2>
          </div>
          <div className="space-y-0">
            <div className="flex border-l-2 border-blue-600 py-4 pl-6 sm:py-5 sm:pl-8 md:py-6 md:pl-10">
              <span className="mr-4 text-2xl font-extrabold text-blue-600 sm:mr-6 sm:text-3xl md:text-4xl">01</span>
              <div>
                <h3 className="text-base font-bold sm:text-lg md:text-xl">Măsori spațiul</h3>
                <p className="text-sm text-gray-500 sm:text-base">
                  Lățime, înălțime, poziția sifonului și a țevilor.
                </p>
              </div>
            </div>
            <div className="flex border-l-2 border-blue-600 py-4 pl-6 sm:py-5 sm:pl-8 md:py-6 md:pl-10">
              <span className="mr-4 text-2xl font-extrabold text-blue-600 sm:mr-6 sm:text-3xl md:text-4xl">02</span>
              <div>
                <h3 className="text-base font-bold sm:text-lg md:text-xl">Trimiți datele</h3>
                <p className="text-sm text-gray-500 sm:text-base">
                  Schiță cu cote, poze cu instalațiile, tipul de lavoar.
                </p>
              </div>
            </div>
            <div className="flex border-l-2 border-blue-600 py-4 pl-6 sm:py-5 sm:pl-8 md:py-6 md:pl-10">
              <span className="mr-4 text-2xl font-extrabold text-blue-600 sm:mr-6 sm:text-3xl md:text-4xl">03</span>
              <div>
                <h3 className="text-base font-bold sm:text-lg md:text-xl">Validăm și producem</h3>
                <p className="text-sm text-gray-500 sm:text-base">
                  Verificăm compatibilitatea, clarificăm detaliile, apoi producem.
                </p>
              </div>
            </div>
            <div className="flex border-l-2 border-blue-600 py-4 pl-6 sm:py-5 sm:pl-8 md:py-6 md:pl-10">
              <span className="mr-4 text-2xl font-extrabold text-blue-600 sm:mr-6 sm:text-3xl md:text-4xl">04</span>
              <div>
                <h3 className="text-base font-bold sm:text-lg md:text-xl">Livrare și montaj DIY</h3>
                <p className="text-sm text-gray-500 sm:text-base">
                  Corpuri gata de montat, cu decupaje făcute, cu instrucțiuni.
                </p>
              </div>
            </div>
          </div>
        </section>

        <hr className="border-gray-300" />

        {/* FINAL CTA */}
        <section className="py-14 sm:py-20 md:py-28">
          <div className="border-l-2 border-blue-600 bg-white py-8 pl-6 pr-6 sm:py-10 sm:pl-8 sm:pr-8 md:py-14 md:pl-10 md:pr-10">
            <h2 className="mb-4 text-xl font-bold sm:mb-5 md:mb-6 md:text-2xl lg:text-3xl">
              Ai o baie greu de mobilat?
            </h2>
            <p className="mb-6 max-w-xl text-base text-gray-600 sm:mb-8 md:text-lg">
              Primul pas e să măsori corect. Ghidul nostru te ajută să notezi tot ce contează.
            </p>
            <a
              href="/masuratori"
              className="inline-block bg-blue-600 px-8 py-3 text-base font-bold text-white transition-colors hover:bg-blue-700 sm:px-10 sm:py-4 sm:text-lg"
            >
              Vezi cum măsori corect
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
