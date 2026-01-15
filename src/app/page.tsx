import Image from "next/image";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-stone-50">
      {/* HERO - Full width with architectural image */}
      <section className="relative flex min-h-[70vh] flex-col justify-center sm:min-h-[75vh]">
        <Image
          src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1920&q=80"
          alt="Modern architectural interior custom furniture"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950/90 via-gray-900/70 to-gray-900/40" />
        <div className="relative z-10 mx-auto w-full max-w-6xl px-6 sm:px-8 md:px-12 lg:px-16">
          {/* Semi-transparent panel behind content */}
          <div className="max-w-2xl rounded-sm bg-gray-950/50 p-6 backdrop-blur-sm sm:p-8 md:p-10">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] !text-gray-100 sm:text-sm">
              Mobilier la comandă · Montaj DIY
            </p>
            <h1 className="mb-4 text-3xl font-extrabold leading-[1.05] tracking-tight !text-white sm:mb-5 sm:text-4xl md:text-5xl lg:text-6xl">
              Mobilă pe dimensiunile tale.
            </h1>
            <p className="mb-6 max-w-lg text-base font-medium leading-relaxed !text-gray-100 sm:mb-8 sm:text-lg">
              Tu măsori. Noi producem la milimetru. Tu montezi.
            </p>
            <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-5">
              <a
                href="/cum-functioneaza"
                className="bg-blue-600 px-8 py-4 text-base font-bold !text-white shadow-lg shadow-blue-600/30 transition-all hover:bg-blue-500 hover:shadow-xl hover:shadow-blue-500/40 sm:px-10 sm:py-4 sm:text-lg"
              >
                Cere ofertă gratuită
              </a>
              <a
                href="/shop"
                className="flex items-center gap-2 text-base font-semibold !text-white transition-colors hover:text-blue-300"
              >
                <span>Vezi produse în stoc</span>
                <span className="text-lg">→</span>
              </a>
            </div>
          </div>
        </div>
        {/* Scroll indicator */}
        <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 animate-bounce">
          <div className="h-8 w-5 rounded-full border-2 border-white/50 p-1">
            <div className="mx-auto h-2 w-1 rounded-full bg-white/70"></div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-6 sm:px-8 md:px-12 lg:px-16">
        {/* TENSION HOOK - More compact */}
        <div className="border-l-4 border-gray-900 py-5 pl-5 sm:py-6 sm:pl-6">
          <p className="max-w-2xl text-base font-medium text-gray-700 sm:text-lg">
            Mobilă pe dimensiuni nu e pentru toată lumea. <span className="text-gray-900">Cere timp, atenție și măsurători corecte.</span>
          </p>
        </div>

        <hr className="border-gray-200" />

        {/* WHO THIS IS FOR - More compact */}
        <section className="py-6 sm:py-8 md:py-10">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-8">
            <div>
              <h2 className="mb-4 text-xl font-bold sm:mb-5 md:text-2xl">
                Pentru cine este
              </h2>
              <ul className="space-y-2 text-base text-gray-600 md:text-lg">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-600"></span>
                  Apartamente noi sau renovări
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-600"></span>
                  Spații atipice sau complicate
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-600"></span>
                  Oameni care vor control total
                </li>
              </ul>
            </div>
            <div className="border-l-2 border-gray-200 pl-5 sm:pl-6">
              <p className="text-sm text-gray-500 sm:text-base">
                <span className="font-semibold text-gray-700">Nu e pentru tine dacă:</span> vrei montaj profesionist inclus sau preferi soluții standard gata de raft.
              </p>
            </div>
          </div>
        </section>

        <hr className="border-gray-200" />

        {/* CATEGORIES - Premium Visual Cards */}
        <section className="py-6 sm:py-8 md:py-10">
          <div className="mb-4 sm:mb-5">
            <h2 className="text-xl font-bold md:text-2xl lg:text-3xl">
              Ce poți comanda
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4">
            <a
              href="/pe-dimensiuni/bucatarie"
              className="group relative flex h-48 cursor-pointer items-end overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl sm:h-60 md:h-72 lg:h-80"
            >
              <Image
                src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80"
                alt="Custom kitchen cabinetry modern minimalist"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/95 via-gray-900/50 to-transparent" />
              <div className="relative z-10 w-full p-4 text-white sm:p-5 md:p-6">
                <h3 className="mb-1 text-base font-bold !text-white sm:text-lg md:text-xl lg:text-2xl">
                  Bucătărie
                </h3>
                <p className="text-xs !text-gray-300 sm:text-sm">
                  Corpuri de bucătărie la milimetru
                </p>
                <span className="mt-2 inline-block text-xs font-semibold !text-blue-400 opacity-0 transition-opacity group-hover:opacity-100 sm:mt-3 sm:text-sm">
                  Configurează →
                </span>
              </div>
            </a>
            <a
              href="/pe-dimensiuni/dressing"
              className="group relative flex h-48 cursor-pointer items-end overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl sm:h-60 md:h-72 lg:h-80"
            >
              <Image
                src="https://images.unsplash.com/photo-1558997519-83ea9252edf8?w=800&q=80"
                alt="Built-in wardrobe custom furniture interior"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/95 via-gray-900/50 to-transparent" />
              <div className="relative z-10 w-full p-4 text-white sm:p-5 md:p-6">
                <h3 className="mb-1 text-base font-bold !text-white sm:text-lg md:text-xl lg:text-2xl">
                  Dressing
                </h3>
                <p className="text-xs !text-gray-300 sm:text-sm">
                  Dulapuri built-in pentru orice nișă
                </p>
                <span className="mt-2 inline-block text-xs font-semibold !text-blue-400 opacity-0 transition-opacity group-hover:opacity-100 sm:mt-3 sm:text-sm">
                  Configurează →
                </span>
              </div>
            </a>
            <a
              href="/pe-dimensiuni/baie"
              className="group relative flex h-48 cursor-pointer items-end overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl sm:h-60 md:h-72 lg:h-80"
            >
              <Image
                src="https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80"
                alt="Custom bathroom vanity minimalist design"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/95 via-gray-900/50 to-transparent" />
              <div className="relative z-10 w-full p-4 text-white sm:p-5 md:p-6">
                <h3 className="mb-1 text-base font-bold !text-white sm:text-lg md:text-xl lg:text-2xl">
                  Baie
                </h3>
                <p className="text-xs !text-gray-300 sm:text-sm">
                  Mobilier adaptat instalațiilor existente
                </p>
                <span className="mt-2 inline-block text-xs font-semibold !text-blue-400 opacity-0 transition-opacity group-hover:opacity-100 sm:mt-3 sm:text-sm">
                  Configurează →
                </span>
              </div>
            </a>
            <a
              href="/pe-dimensiuni/birou"
              className="group relative flex h-48 cursor-pointer items-end overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl sm:h-60 md:h-72 lg:h-80"
            >
              <Image
                src="https://images.unsplash.com/photo-1593062096033-9a26b09da705?w=800&q=80"
                alt="Custom home office furniture desk setup"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/95 via-gray-900/50 to-transparent" />
              <div className="relative z-10 w-full p-4 text-white sm:p-5 md:p-6">
                <h3 className="mb-1 text-base font-bold !text-white sm:text-lg md:text-xl lg:text-2xl">
                  Birou
                </h3>
                <p className="text-xs !text-gray-300 sm:text-sm">
                  Spații de lucru personalizate
                </p>
                <span className="mt-2 inline-block text-xs font-semibold !text-blue-400 opacity-0 transition-opacity group-hover:opacity-100 sm:mt-3 sm:text-sm">
                  Configurează →
                </span>
              </div>
            </a>
          </div>
        </section>
      </div>

      {/* DIY ASSEMBLY SECTION - Full Width Visual Impact */}
      <section className="relative my-6 sm:my-8 md:my-10">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Image Side */}
          <div className="relative h-64 sm:h-80 lg:h-auto lg:min-h-[400px]">
            <Image
              src="https://images.unsplash.com/photo-1581783898377-1c85bf937427?w=1000&q=80"
              alt="Furniture flat pack assembly DIY tools"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-gray-900/30" />
          </div>
          {/* Content Side */}
          <div className="flex flex-col justify-center bg-gray-900 px-6 py-10 text-white sm:px-8 sm:py-12 md:px-10 md:py-14 lg:px-12 lg:py-16">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 sm:h-12 sm:w-12">
                <svg className="h-5 w-5 !text-white sm:h-6 sm:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <span className="text-xs font-semibold uppercase tracking-wider !text-blue-400 sm:text-sm">Așa funcționăm</span>
            </div>
            <h2 className="mb-4 text-2xl font-extrabold !text-white sm:mb-5 sm:text-3xl md:text-4xl">
              Montaj DIY. Control total.
            </h2>
            <p className="mb-6 text-base !text-gray-300 sm:mb-8 sm:text-lg">
              Mobilierul ajunge pre-tăiat, pre-găurit, cu tot ce trebuie. 
              Tu îl asamblezi cu instrucțiunile noastre pas cu pas.
            </p>
            <div className="mb-6 grid grid-cols-1 gap-4 sm:mb-8 sm:grid-cols-3 sm:gap-6">
              <div className="border-l-2 border-blue-500 pl-4">
                <p className="text-2xl font-bold !text-white sm:text-3xl">100%</p>
                <p className="text-xs !text-gray-400 sm:text-sm">Pre-pregătit</p>
              </div>
              <div className="border-l-2 border-blue-500 pl-4">
                <p className="text-2xl font-bold !text-white sm:text-3xl">1-2 zile</p>
                <p className="text-xs !text-gray-400 sm:text-sm">Timp de montaj</p>
              </div>
              <div className="border-l-2 border-blue-500 pl-4">
                <p className="text-2xl font-bold !text-white sm:text-3xl">Ghid PDF</p>
                <p className="text-xs !text-gray-400 sm:text-sm">Instrucțiuni clare</p>
              </div>
            </div>
            <a
              href="/cum-functioneaza"
              className="inline-flex w-fit items-center gap-2 bg-white px-6 py-3 text-sm font-bold !text-gray-900 transition-all hover:bg-gray-100 sm:px-8 sm:py-3.5 sm:text-base"
            >
              Află mai multe despre montaj
              <span>→</span>
            </a>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-6 sm:px-8 md:px-12 lg:px-16">
        {/* HOW IT WORKS - Compact with badges */}
        <section className="py-6 sm:py-8 md:py-10">
          <div className="mb-4 flex items-end justify-between sm:mb-5">
            <h2 className="text-xl font-bold md:text-2xl">
              Cum funcționează
            </h2>
            <a href="/cum-functioneaza" className="hidden text-sm font-medium text-blue-600 hover:text-blue-800 sm:inline-block">
              Detalii complete →
            </a>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
            <div className="relative overflow-hidden rounded-sm bg-white p-4 shadow-md sm:p-5">
              <div className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white sm:h-10 sm:w-10 sm:text-base">
                1
              </div>
              <div className="mb-8 sm:mb-10">
                <svg className="h-6 w-6 text-gray-400 sm:h-7 sm:w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
              </div>
              <h3 className="text-sm font-bold text-gray-900 sm:text-base">Măsori</h3>
              <p className="mt-1 text-xs text-gray-500 sm:text-sm">Cu ghidul nostru</p>
            </div>
            <div className="relative overflow-hidden rounded-sm bg-white p-4 shadow-md sm:p-5">
              <div className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white sm:h-10 sm:w-10 sm:text-base">
                2
              </div>
              <div className="mb-8 sm:mb-10">
                <svg className="h-6 w-6 text-gray-400 sm:h-7 sm:w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-sm font-bold text-gray-900 sm:text-base">Trimiți</h3>
              <p className="mt-1 text-xs text-gray-500 sm:text-sm">Schiță sau formular</p>
            </div>
            <div className="relative overflow-hidden rounded-sm bg-white p-4 shadow-md sm:p-5">
              <div className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white sm:h-10 sm:w-10 sm:text-base">
                3
              </div>
              <div className="mb-8 sm:mb-10">
                <svg className="h-6 w-6 text-gray-400 sm:h-7 sm:w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-sm font-bold text-gray-900 sm:text-base">Producem</h3>
              <p className="mt-1 text-xs text-gray-500 sm:text-sm">Exact pe datele tale</p>
            </div>
            <div className="relative overflow-hidden rounded-sm bg-white p-4 shadow-md sm:p-5">
              <div className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white sm:h-10 sm:w-10 sm:text-base">
                4
              </div>
              <div className="mb-8 sm:mb-10">
                <svg className="h-6 w-6 text-gray-400 sm:h-7 sm:w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-sm font-bold text-gray-900 sm:text-base">Montezi</h3>
              <p className="mt-1 text-xs text-gray-500 sm:text-sm">DIY cu instrucțiuni</p>
            </div>
          </div>
        </section>

        <hr className="border-gray-200" />

        {/* FEAR REDUCTION - More compact */}
        <section className="py-6 sm:py-8 md:py-10">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="mb-2 text-base font-bold sm:text-lg md:text-xl">
                Ce se întâmplă dacă măsor greșit?
              </h2>
              <p className="max-w-xl text-sm text-gray-500">
                Verificăm măsurătorile înainte de producție. Ai ghid pas cu pas și suport dedicat.
              </p>
            </div>
            <a
              href="/masuratori"
              className="inline-block w-fit whitespace-nowrap border-2 border-gray-900 px-5 py-2.5 text-sm font-bold text-gray-900 transition-colors hover:bg-gray-900 hover:!text-white sm:px-6 sm:py-3"
            >
              Ghid măsurători →
            </a>
          </div>
        </section>

        <hr className="border-gray-200" />

        {/* WHY NOT STANDARD - More visual */}
        <section className="py-6 sm:py-8 md:py-10">
          <div className="mb-4 sm:mb-5">
            <h2 className="text-xl font-bold md:text-2xl">
              De ce nu mobilă standard?
            </h2>
          </div>
          <div className="grid grid-cols-1 overflow-hidden rounded-sm shadow-lg md:grid-cols-2">
            <div className="bg-gray-100 p-5 sm:p-6 md:p-8">
              <div className="mb-3 inline-block rounded bg-gray-300 px-2 py-1 text-xs font-semibold uppercase text-gray-600">
                Standard
              </div>
              <ul className="space-y-2 text-sm text-gray-500 sm:space-y-3 sm:text-base">
                <li className="flex items-center gap-2">
                  <span className="text-gray-400">✗</span> Dimensiuni fixe
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-gray-400">✗</span> Compromisuri de spațiu
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-gray-400">✗</span> Adaptare forțată
                </li>
              </ul>
            </div>
            <div className="bg-gray-900 p-5 text-white sm:p-6 md:p-8">
              <div className="mb-3 inline-block rounded bg-blue-600 px-2 py-1 text-xs font-semibold uppercase !text-white">
                Pe dimensiuni
              </div>
              <ul className="space-y-2 text-sm !text-white sm:space-y-3 sm:text-base">
                <li className="flex items-center gap-2">
                  <span className="!text-blue-400">✓</span> Dimensiuni exacte
                </li>
                <li className="flex items-center gap-2">
                  <span className="!text-blue-400">✓</span> Folosirea completă a spațiului
                </li>
                <li className="flex items-center gap-2">
                  <span className="!text-blue-400">✓</span> Control asupra configurației
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>

      {/* FINAL CTA - Full Width Impact */}
      <section className="relative py-14 sm:py-16 md:py-20">
        <Image
          src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1920&q=80"
          alt="Premium built-in wardrobe custom furniture"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gray-950/80" />
        <div className="relative z-10 mx-auto max-w-6xl px-6 text-center text-white sm:px-8 md:px-12 lg:px-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider !text-blue-400 sm:text-base">
            Fără obligații
          </p>
          <h2 className="mb-4 text-2xl font-extrabold !text-white sm:mb-5 sm:text-3xl md:text-4xl">
            Hai să vedem dacă se poate face.
          </h2>
          <p className="mx-auto mb-6 max-w-lg text-base !text-gray-300 sm:mb-8 sm:text-lg">
            Trimite-ne dimensiunile și îți spunem gratuit dacă e fezabil și cât ar costa.
          </p>
          <a
            href="/cum-functioneaza"
            className="inline-block bg-blue-600 px-10 py-4 text-base font-bold text-white shadow-2xl shadow-blue-600/30 transition-all hover:bg-blue-500 hover:shadow-blue-500/40 sm:px-14 sm:py-5 sm:text-lg"
          >
            Cere ofertă gratuită
          </a>
        </div>
      </section>
    </main>
  );
}
