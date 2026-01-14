export default function CumFunctioneazaPage() {
  return (
    <main className="min-h-screen bg-stone-50 text-gray-900">
      <div className="mx-auto max-w-6xl px-6 sm:px-8 md:px-12 lg:px-16">
        {/* HERO */}
        <section className="flex min-h-[50vh] flex-col justify-center py-12 sm:min-h-[60vh] sm:py-16 md:py-20">
          <div className="border-l-2 border-gray-900 pl-6 sm:pl-8 md:pl-10">
            <h1 className="mb-5 max-w-3xl text-4xl font-extrabold leading-[1.1] tracking-tight sm:mb-6 md:mb-8 md:text-5xl lg:text-6xl">
              Cum funcționează
            </h1>
            <p className="mb-6 max-w-xl text-lg leading-relaxed text-gray-600 sm:mb-8 md:text-xl lg:text-2xl">
              Tu măsori. Noi producem. Tu montezi. Fără intermediari, fără surprize.
            </p>
            <p className="max-w-lg text-base text-gray-500 sm:text-lg">
              Un proces simplu, transparent, pentru oameni care vor control asupra mobilierului lor.
            </p>
          </div>
        </section>

        <hr className="border-gray-300" />

        {/* 4-STEP PROCESS */}
        <section className="py-12 sm:py-16 md:py-24">
          <div className="mb-8 border-l-2 border-gray-300 pl-6 sm:mb-10 sm:pl-8 md:mb-14 md:pl-10">
            <h2 className="text-2xl font-bold md:text-3xl lg:text-4xl">
              Procesul în 4 pași
            </h2>
          </div>
          <div className="space-y-0">
            <div className="flex border-l-2 border-blue-600 py-5 pl-6 sm:py-6 sm:pl-8 md:py-8 md:pl-10">
              <span className="mr-4 text-2xl font-extrabold text-blue-600 sm:mr-6 sm:text-3xl md:text-4xl">01</span>
              <div>
                <h3 className="text-base font-bold sm:text-lg md:text-xl">Măsori spațiul</h3>
                <p className="mt-1 max-w-lg text-sm text-gray-500 sm:mt-2 sm:text-base">
                  Folosind ghidul nostru, măsori lățimea, înălțimea și adâncimea spațiului. Notezi poziția țevilor, prizelor și oricăror obstacole. Nu ai nevoie de instrumente speciale — un metru și un creion sunt suficiente.
                </p>
              </div>
            </div>
            <div className="flex border-l-2 border-blue-600 py-5 pl-6 sm:py-6 sm:pl-8 md:py-8 md:pl-10">
              <span className="mr-4 text-2xl font-extrabold text-blue-600 sm:mr-6 sm:text-3xl md:text-4xl">02</span>
              <div>
                <h3 className="text-base font-bold sm:text-lg md:text-xl">Trimiți datele</h3>
                <p className="mt-1 max-w-lg text-sm text-gray-500 sm:mt-2 sm:text-base">
                  Ne trimiți măsurătorile printr-un formular simplu, împreună cu poze ale spațiului și o schiță (poate fi și de mână). Noi clarificăm orice întrebare înainte de a trece mai departe.
                </p>
              </div>
            </div>
            <div className="flex border-l-2 border-blue-600 py-5 pl-6 sm:py-6 sm:pl-8 md:py-8 md:pl-10">
              <span className="mr-4 text-2xl font-extrabold text-blue-600 sm:mr-6 sm:text-3xl md:text-4xl">03</span>
              <div>
                <h3 className="text-base font-bold sm:text-lg md:text-xl">Producem mobilierul</h3>
                <p className="mt-1 max-w-lg text-sm text-gray-500 sm:mt-2 sm:text-base">
                  Fiecare piesă este tăiată și pregătită exact pe dimensiunile tale. Corpurile sunt asamblate parțial în atelier pentru a reduce erorile la montaj. Primești confirmare înainte de expediere.
                </p>
              </div>
            </div>
            <div className="flex border-l-2 border-blue-600 py-5 pl-6 sm:py-6 sm:pl-8 md:py-8 md:pl-10">
              <span className="mr-4 text-2xl font-extrabold text-blue-600 sm:mr-6 sm:text-3xl md:text-4xl">04</span>
              <div>
                <h3 className="text-base font-bold sm:text-lg md:text-xl">Livrare + montaj DIY</h3>
                <p className="mt-1 max-w-lg text-sm text-gray-500 sm:mt-2 sm:text-base">
                  Mobilierul ajunge pe palet, cu toate piesele etichetate și instrucțiuni de montaj. Poți monta singur sau cu un meșter local. Timpul mediu de montaj: 1-2 zile pentru o bucătărie completă.
                </p>
              </div>
            </div>
          </div>
        </section>

        <hr className="border-gray-300" />

        {/* WHAT WE PROVIDE VS WHAT YOU DO */}
        <section className="py-12 sm:py-16 md:py-24">
          <div className="mb-8 border-l-2 border-gray-300 pl-6 sm:mb-10 sm:pl-8 md:mb-14 md:pl-10">
            <h2 className="text-2xl font-bold md:text-3xl lg:text-4xl">
              Ce facem noi vs ce faci tu
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="border-l-2 border-blue-600 bg-white py-6 pl-6 pr-4 sm:py-8 sm:pl-8 md:py-10 md:pl-10">
              <h3 className="mb-4 text-base font-bold text-gray-900 sm:mb-5 md:mb-6 md:text-lg">
                Noi ne ocupăm de
              </h3>
              <ul className="space-y-2 text-sm text-gray-700 sm:space-y-3 sm:text-base md:text-lg">
                <li>Validarea măsurătorilor</li>
                <li>Proiectare tehnică</li>
                <li>Producție la comandă</li>
                <li>Asamblare parțială în atelier</li>
                <li>Livrare pe palet</li>
                <li>Instrucțiuni detaliate de montaj</li>
                <li>Suport pentru întrebări</li>
              </ul>
            </div>
            <div className="border-l-2 border-gray-200 bg-gray-100/50 py-6 pl-6 pr-4 sm:py-8 sm:pl-8 md:py-10 md:pl-10">
              <h3 className="mb-4 text-base font-bold text-gray-700 sm:mb-5 md:mb-6 md:text-lg">
                Tu te ocupi de
              </h3>
              <ul className="space-y-2 text-sm text-gray-600 sm:space-y-3 sm:text-base md:text-lg">
                <li>Măsurarea spațiului</li>
                <li>Fotografierea zonei</li>
                <li>Recepția livrării</li>
                <li>Montajul final (DIY sau cu ajutor)</li>
                <li>Fixarea în perete (dacă e cazul)</li>
              </ul>
            </div>
          </div>
        </section>

        <hr className="border-gray-300" />

        {/* COMMON CONCERNS */}
        <section className="py-12 sm:py-16 md:py-24">
          <div className="border-l-2 border-gray-300 pl-6 sm:pl-8 md:pl-10">
            <h2 className="mb-8 text-2xl font-bold sm:mb-10 md:mb-12 md:text-3xl lg:text-4xl">
              Întrebări frecvente
            </h2>
            <div className="space-y-8 sm:space-y-10 md:space-y-12">
              <div>
                <h3 className="mb-2 text-base font-bold sm:mb-3 md:text-lg">
                  Ce se întâmplă dacă măsor greșit?
                </h3>
                <p className="max-w-xl text-sm text-gray-500 sm:text-base">
                  Înainte de producție, validăm împreună măsurătorile. Dacă ceva nu pare în regulă, te contactăm pentru clarificări. Ghidul nostru de măsurători reduce semnificativ riscul de erori. Totuși, responsabilitatea finală pentru corectitudinea datelor îți aparține.
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-base font-bold sm:mb-3 md:text-lg">
                  E greu de montat?
                </h3>
                <p className="max-w-xl text-sm text-gray-500 sm:text-base">
                  Corpurile vin pre-asamblate parțial. Montajul final presupune fixarea în perete, alinierea și montarea fronturilor. E fezabil pentru cineva cu experiență minimă în bricolaj. Dacă nu te simți confortabil, poți apela la un meșter local.
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-base font-bold sm:mb-3 md:text-lg">
                  Ce fac dacă o piesă nu se potrivește?
                </h3>
                <p className="max-w-xl text-sm text-gray-500 sm:text-base">
                  Dacă eroarea e din producție, înlocuim piesa gratuit. Dacă măsurătoarea a fost incorectă, putem produce o piesă nouă contra cost. De aceea insistăm pe validarea datelor înainte de producție.
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-base font-bold sm:mb-3 md:text-lg">
                  Cât durează tot procesul?
                </h3>
                <p className="max-w-xl text-sm text-gray-500 sm:text-base">
                  De la trimiterea măsurătorilor până la livrare: 2-4 săptămâni, în funcție de complexitate. Montajul durează între câteva ore și 2 zile, în funcție de proiect.
                </p>
              </div>
            </div>
          </div>
        </section>

        <hr className="border-gray-300" />

        {/* WHO THIS IS NOT FOR */}
        <section className="py-12 sm:py-16 md:py-24">
          <div className="border-l-2 border-gray-300 pl-6 sm:pl-8 md:pl-10">
            <h2 className="mb-6 text-2xl font-bold sm:mb-8 md:mb-10 md:text-3xl lg:text-4xl">
              Pentru cine nu e potrivit
            </h2>
            <ul className="mb-8 space-y-2 text-base text-gray-600 sm:mb-10 sm:space-y-3 md:text-lg">
              <li className="py-1">Cei care vor montaj profesionist inclus</li>
              <li className="py-1">Cei care nu au timp sau răbdare să măsoare corect</li>
              <li className="py-1">Cei care preferă să vadă mobilierul fizic înainte de comandă</li>
              <li className="py-1">Proiecte unde designul trebuie creat de la zero de un specialist</li>
            </ul>
            <p className="max-w-lg text-sm text-gray-500 sm:text-base">
              Nu e nimic greșit în aceste preferințe — doar că modelul nostru nu le acoperă.
            </p>
          </div>
        </section>

        <hr className="border-gray-300" />

        {/* FINAL CTA */}
        <section className="py-14 sm:py-20 md:py-28">
          <div className="border-l-2 border-blue-600 bg-white py-8 pl-6 pr-6 sm:py-10 sm:pl-8 sm:pr-8 md:py-14 md:pl-10 md:pr-10">
            <h2 className="mb-4 text-xl font-bold sm:mb-5 md:mb-6 md:text-2xl lg:text-3xl">
              Gata să începi?
            </h2>
            <p className="mb-6 max-w-xl text-base text-gray-600 sm:mb-8 md:text-lg">
              Primul pas e să înveți cum se măsoară corect. Ghidul nostru te ghidează pas cu pas.
            </p>
            <a
              href="/masuratori"
              className="inline-block bg-blue-600 px-8 py-3 text-base font-bold text-white transition-colors hover:bg-blue-700 sm:px-10 sm:py-4 sm:text-lg"
            >
              Vezi ghidul de măsurători
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
