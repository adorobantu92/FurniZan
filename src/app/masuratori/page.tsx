import Image from "next/image";

export default function MasuratoriPage() {
  return (
    <main className="min-h-screen bg-stone-50 text-gray-900">
      {/* HERO - Full Width with Image */}
      <section className="relative flex min-h-[50vh] flex-col justify-center sm:min-h-[55vh]">
        <Image
          src="https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=1920&q=80"
          alt="Measuring tape and tools for precise measurements"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950/90 via-gray-900/70 to-gray-900/40" />
        <div className="relative z-10 mx-auto w-full max-w-6xl px-6 sm:px-8 md:px-12 lg:px-16 text-white">
          <div className="max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] !text-blue-400 sm:text-sm">
              Ghid detaliat
            </p>
            <h1 className="mb-4 text-3xl font-extrabold leading-[1.05] tracking-tight !text-white sm:text-4xl md:text-5xl lg:text-6xl">
              Cum măsori corect
            </h1>
            <p className="max-w-lg text-base font-medium leading-relaxed !text-gray-100 sm:text-lg">
              Precizia măsurătorilor determină dacă mobilierul se potrivește perfect. Nu e complicat, dar cere atenție.
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-6 sm:px-8 md:px-12 lg:px-16">
        {/* WHAT YOU NEED - Visual Cards */}
        <section className="py-10 sm:py-12 md:py-16">
          <div className="mb-6 sm:mb-8">
            <h2 className="text-xl font-bold md:text-2xl lg:text-3xl">
              Înainte să începi
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-sm bg-white p-5 shadow-md sm:p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="mb-2 text-base font-bold">Ce ai nevoie</h3>
              <ul className="space-y-1 text-sm text-gray-500">
                <li>• Metru ruletă (minim 3m)</li>
                <li>• Creion și hârtie</li>
                <li>• Telefonul pentru poze</li>
              </ul>
            </div>
            <div className="rounded-sm bg-white p-5 shadow-md sm:p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="mb-2 text-base font-bold">Cât durează</h3>
              <p className="text-sm text-gray-500">
                15-30 de minute pentru o cameră. Nu te grăbi — precizia e importantă.
              </p>
            </div>
            <div className="rounded-sm bg-white p-5 shadow-md sm:p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-yellow-100">
                <svg className="h-6 w-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h3 className="mb-2 text-base font-bold">Regula de aur</h3>
              <p className="text-sm text-gray-500">
                Măsoară de cel puțin <strong>două ori</strong>. Notează imediat. Verifică înainte să trimiți.
              </p>
            </div>
          </div>
        </section>

        <hr className="border-gray-200" />

        {/* HOW TO MEASURE - Visual Steps */}
        <section className="py-10 sm:py-12 md:py-16">
          <div className="mb-6 sm:mb-8">
            <h2 className="text-xl font-bold md:text-2xl lg:text-3xl">
              Cum se măsoară corect
            </h2>
          </div>
          
          {/* Visual Diagram - Width */}
          <div className="mb-6 grid grid-cols-1 overflow-hidden rounded-sm shadow-lg md:grid-cols-2">
            <div className="relative flex min-h-[200px] items-center justify-center bg-gray-100 p-6 md:min-h-[260px]">
              {/* Simple measuring diagram SVG */}
              <svg viewBox="0 0 200 150" className="h-full max-h-40 w-auto md:max-h-52">
                {/* Room outline */}
                <rect x="20" y="20" width="160" height="110" fill="none" stroke="#374151" strokeWidth="3"/>
                {/* Width arrows at bottom */}
                <line x1="20" y1="145" x2="180" y2="145" stroke="#2563eb" strokeWidth="2" markerEnd="url(#arrow)" markerStart="url(#arrow-start)"/>
                <text x="100" y="142" textAnchor="middle" fill="#2563eb" fontSize="10" fontWeight="bold">LĂȚIME</text>
                {/* Measure points */}
                <circle cx="30" cy="130" r="4" fill="#2563eb"/>
                <circle cx="100" cy="130" r="4" fill="#2563eb"/>
                <circle cx="170" cy="130" r="4" fill="#2563eb"/>
                <text x="30" y="122" textAnchor="middle" fill="#6b7280" fontSize="8">jos</text>
                <text x="100" y="122" textAnchor="middle" fill="#6b7280" fontSize="8">mijloc</text>
                <text x="170" y="122" textAnchor="middle" fill="#6b7280" fontSize="8">sus</text>
                <defs>
                  <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                    <path d="M0,0 L0,6 L9,3 z" fill="#2563eb" />
                  </marker>
                  <marker id="arrow-start" markerWidth="10" markerHeight="10" refX="0" refY="3" orient="auto">
                    <path d="M9,0 L9,6 L0,3 z" fill="#2563eb" />
                  </marker>
                </defs>
              </svg>
            </div>
            <div className="flex flex-col justify-center bg-white p-5 sm:p-6 md:p-8">
              <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                01
              </div>
              <h3 className="mb-2 text-lg font-bold">Măsoară lățimea în 3 puncte</h3>
              <p className="text-sm text-gray-600">
                Pereții nu sunt perfect drepți. Măsoară lățimea la <strong>podea</strong>, la <strong>mijloc</strong> și <strong>sus</strong>. 
                Notează cea mai mică valoare — aceasta determină ce încape.
              </p>
            </div>
          </div>

          {/* Visual Diagram - Height */}
          <div className="mb-6 grid grid-cols-1 overflow-hidden rounded-sm shadow-lg md:grid-cols-2">
            <div className="flex flex-col justify-center bg-white p-5 sm:p-6 md:order-1 md:p-8">
              <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                02
              </div>
              <h3 className="mb-2 text-lg font-bold">Măsoară înălțimea în colțuri</h3>
              <p className="text-sm text-gray-600">
                Podelele și tavanele pot fi inegale. Măsoară în <strong>colțuri</strong> și la <strong>mijloc</strong>. 
                Notează cea mai mică valoare pentru a evita probleme la montaj.
              </p>
            </div>
            <div className="relative flex min-h-[200px] items-center justify-center bg-gray-100 p-6 md:order-2 md:min-h-[260px]">
              <svg viewBox="0 0 200 150" className="h-full max-h-40 w-auto md:max-h-52">
                {/* Room outline */}
                <rect x="20" y="20" width="160" height="110" fill="none" stroke="#374151" strokeWidth="3"/>
                {/* Height arrows on left */}
                <line x1="8" y1="20" x2="8" y2="130" stroke="#2563eb" strokeWidth="2"/>
                <polygon points="8,20 4,30 12,30" fill="#2563eb"/>
                <polygon points="8,130 4,120 12,120" fill="#2563eb"/>
                <text x="12" y="80" fill="#2563eb" fontSize="10" fontWeight="bold" transform="rotate(-90, 12, 80)">ÎNĂLȚIME</text>
                {/* Measure points */}
                <circle cx="30" cy="30" r="4" fill="#2563eb"/>
                <circle cx="170" cy="30" r="4" fill="#2563eb"/>
                <circle cx="100" cy="75" r="4" fill="#2563eb"/>
                <text x="42" y="34" fill="#6b7280" fontSize="8">colț</text>
                <text x="155" y="34" fill="#6b7280" fontSize="8">colț</text>
                <text x="100" y="90" textAnchor="middle" fill="#6b7280" fontSize="8">mijloc</text>
              </svg>
            </div>
          </div>

          {/* Obstacles */}
          <div className="mb-6 grid grid-cols-1 overflow-hidden rounded-sm shadow-lg md:grid-cols-2">
            <div className="relative flex min-h-[200px] items-center justify-center bg-gray-100 p-6 md:min-h-[260px]">
              <svg viewBox="0 0 200 150" className="h-full max-h-40 w-auto md:max-h-52">
                {/* Room outline */}
                <rect x="20" y="20" width="160" height="110" fill="none" stroke="#374151" strokeWidth="3"/>
                {/* Obstacles */}
                <rect x="60" y="45" width="12" height="12" fill="#ef4444" rx="2"/>
                <text x="66" y="70" textAnchor="middle" fill="#ef4444" fontSize="7">priză</text>
                <rect x="130" y="80" width="8" height="25" fill="#f59e0b" rx="1"/>
                <text x="134" y="115" textAnchor="middle" fill="#f59e0b" fontSize="7">țeavă</text>
                <circle cx="45" cy="100" r="6" fill="#8b5cf6"/>
                <text x="45" y="115" textAnchor="middle" fill="#8b5cf6" fontSize="7">colț</text>
                {/* Distance arrows */}
                <line x1="20" y1="51" x2="60" y2="51" stroke="#2563eb" strokeWidth="1" strokeDasharray="3"/>
                <text x="40" y="48" textAnchor="middle" fill="#2563eb" fontSize="7">x cm</text>
              </svg>
            </div>
            <div className="flex flex-col justify-center bg-white p-5 sm:p-6 md:p-8">
              <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                03
              </div>
              <h3 className="mb-2 text-lg font-bold">Notează poziția obstacolelor</h3>
              <p className="text-sm text-gray-600">
                <strong>Prize, întrerupătoare, țevi, calorifere, cornișe</strong> — toate contează. 
                Măsoară distanța de la colțul de referință până la fiecare obstacol.
              </p>
            </div>
          </div>

          {/* Depth */}
          <div className="mb-6 grid grid-cols-1 overflow-hidden rounded-sm shadow-lg md:grid-cols-2">
            <div className="flex flex-col justify-center bg-white p-5 sm:p-6 md:order-1 md:p-8">
              <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                04
              </div>
              <h3 className="mb-2 text-lg font-bold">Măsoară adâncimea disponibilă</h3>
              <p className="text-sm text-gray-600">
                Cât de mult poate ieși mobilierul în cameră? Ia în calcul <strong>ușile</strong>, 
                <strong>trecerile</strong> și <strong>spațiul de mișcare</strong> necesar.
              </p>
            </div>
            <div className="relative flex min-h-[200px] items-center justify-center bg-gray-100 p-6 md:order-2 md:min-h-[260px]">
              <svg viewBox="0 0 200 150" className="h-full max-h-40 w-auto md:max-h-52">
                {/* 3D room perspective */}
                <polygon points="40,30 160,30 180,60 180,130 20,130 20,60" fill="none" stroke="#374151" strokeWidth="2"/>
                <line x1="40" y1="30" x2="20" y2="60" stroke="#374151" strokeWidth="2"/>
                <line x1="160" y1="30" x2="180" y2="60" stroke="#374151" strokeWidth="2"/>
                {/* Depth arrow */}
                <line x1="100" y1="30" x2="100" y2="130" stroke="#2563eb" strokeWidth="2"/>
                <polygon points="100,30 96,42 104,42" fill="#2563eb"/>
                <polygon points="100,130 96,118 104,118" fill="#2563eb"/>
                <text x="115" y="80" fill="#2563eb" fontSize="10" fontWeight="bold">ADÂNCIME</text>
                {/* Door indicator */}
                <rect x="140" y="90" width="35" height="40" fill="none" stroke="#f59e0b" strokeWidth="2" strokeDasharray="4"/>
                <text x="157" y="118" textAnchor="middle" fill="#f59e0b" fontSize="7">ușă</text>
              </svg>
            </div>
          </div>

          {/* Photo + Sketch */}
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-sm bg-white p-5 shadow-md sm:p-6">
              <div className="mb-3 flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                  05
                </div>
                <h3 className="text-base font-bold">Fotografiază spațiul</h3>
              </div>
              <p className="mb-3 text-sm text-gray-600">
                Fă poze de ansamblu și detalii ale obstacolelor. Pozele ne ajută să înțelegem contextul.
              </p>
              <div className="flex gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded bg-gray-100">
                  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded bg-gray-100">
                  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded bg-gray-100">
                  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="rounded-sm bg-white p-5 shadow-md sm:p-6">
              <div className="mb-3 flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                  06
                </div>
                <h3 className="text-base font-bold">Desenează o schiță</h3>
              </div>
              <p className="mb-3 text-sm text-gray-600">
                Nu trebuie să fie perfectă. Un desen de mână cu dimensiunile notate e suficient.
              </p>
              <div className="flex h-16 items-center justify-center rounded border-2 border-dashed border-gray-200 bg-gray-50">
                <span className="text-xs text-gray-400">Exemplu schiță de mână</span>
              </div>
            </div>
          </div>
        </section>

        <hr className="border-gray-200" />

        {/* COMMON MISTAKES */}
        <section className="py-10 sm:py-12 md:py-16">
          <div className="mb-6 sm:mb-8">
            <h2 className="text-xl font-bold md:text-2xl lg:text-3xl">
              Greșeli frecvente
            </h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-sm border-l-4 border-red-400 bg-white p-4 shadow-md">
              <div className="mb-2 flex items-center gap-2">
                <svg className="h-5 w-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                <h3 className="text-sm font-bold">Măsurare într-un singur punct</h3>
              </div>
              <p className="text-xs text-gray-500">
                Un perete poate varia cu 1-3 cm. Măsoară în mai multe puncte.
              </p>
            </div>
            <div className="rounded-sm border-l-4 border-red-400 bg-white p-4 shadow-md">
              <div className="mb-2 flex items-center gap-2">
                <svg className="h-5 w-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                <h3 className="text-sm font-bold">Uitarea obstacolelor</h3>
              </div>
              <p className="text-xs text-gray-500">
                Fără poziția prizelor și țevilor, nu putem face decupajele necesare.
              </p>
            </div>
            <div className="rounded-sm border-l-4 border-red-400 bg-white p-4 shadow-md">
              <div className="mb-2 flex items-center gap-2">
                <svg className="h-5 w-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                <h3 className="text-sm font-bold">Rotunjirea cifrelor</h3>
              </div>
              <p className="text-xs text-gray-500">
                147 cm nu e 150 cm. Notează exact, în milimetri dacă e posibil.
              </p>
            </div>
            <div className="rounded-sm border-l-4 border-red-400 bg-white p-4 shadow-md">
              <div className="mb-2 flex items-center gap-2">
                <svg className="h-5 w-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                <h3 className="text-sm font-bold">Presupuneri despre 90°</h3>
              </div>
              <p className="text-xs text-gray-500">
                Colțurile rareori sunt perfect drepte. Măsoară diagonalele.
              </p>
            </div>
            <div className="rounded-sm border-l-4 border-red-400 bg-white p-4 shadow-md">
              <div className="mb-2 flex items-center gap-2">
                <svg className="h-5 w-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                <h3 className="text-sm font-bold">Notarea tardivă</h3>
              </div>
              <p className="text-xs text-gray-500">
                Scrie fiecare măsurătoare imediat. Nu te baza pe memorie.
              </p>
            </div>
          </div>
        </section>

        <hr className="border-gray-200" />

        {/* VERIFICATION */}
        <section className="py-10 sm:py-12 md:py-16">
          <div className="mb-6 sm:mb-8">
            <h2 className="text-xl font-bold md:text-2xl lg:text-3xl">
              Verificare înainte de producție
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-sm bg-blue-600 p-5 sm:p-6">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
                <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h3 className="mb-2 text-base font-bold text-white">Ce verificăm</h3>
              <p className="text-sm text-white/80">
                Consistența între valori, poziția obstacolelor, claritatea schiței.
              </p>
            </div>
            <div className="rounded-sm bg-white p-5 shadow-md sm:p-6">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-yellow-100">
                <svg className="h-5 w-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="mb-2 text-base font-bold">Dacă găsim o problemă</h3>
              <p className="text-sm text-gray-500">
                Te rugăm să remăsori punctele incerte. Nu producem nimic până nu suntem siguri.
              </p>
            </div>
            <div className="rounded-sm bg-white p-5 shadow-md sm:p-6">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
                <svg className="h-5 w-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="mb-2 text-base font-bold">Responsabilitatea finală</h3>
              <p className="text-sm text-gray-500">
                Tu confirmi corectitudinea datelor. De aceea e important să măsori cu atenție.
              </p>
            </div>
          </div>
        </section>

        <hr className="border-gray-200" />

        {/* WHEN NOT TO DIY */}
        <section className="py-10 sm:py-12 md:py-16">
          <div className="mb-6 sm:mb-8">
            <h2 className="text-xl font-bold md:text-2xl lg:text-3xl">
              Când să nu măsori singur
            </h2>
          </div>
          <div className="rounded-sm bg-gray-100 p-5 sm:p-6">
            <ul className="mb-4 grid gap-3 sm:grid-cols-2">
              <li className="flex items-start gap-2 text-sm text-gray-600">
                <span className="mt-0.5 text-gray-400">○</span>
                Spații foarte neregulate cu multe unghiuri
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-600">
                <span className="mt-0.5 text-gray-400">○</span>
                Încăperi unde nu ai acces fizic
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-600">
                <span className="mt-0.5 text-gray-400">○</span>
                Nu te simți confortabil cu măsurătorile
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-600">
                <span className="mt-0.5 text-gray-400">○</span>
                Proiecte complexe cu electrocasnice
              </li>
            </ul>
            <p className="text-sm text-gray-500">
              În aceste cazuri, recomandăm să apelezi la un meșter local pentru măsurători profesionale.
            </p>
          </div>
        </section>

        <hr className="border-gray-200" />

        {/* FINAL CTA */}
        <section className="py-10 sm:py-12 md:py-16">
          <div className="grid grid-cols-1 overflow-hidden rounded-sm shadow-lg md:grid-cols-2">
            <div className="relative h-48 md:h-auto md:min-h-[240px]">
              <Image
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80"
                alt="Beautiful custom furniture interior"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent md:bg-gradient-to-r md:from-transparent md:to-gray-900/30" />
            </div>
            <div className="flex flex-col justify-center bg-gray-900 p-6 text-white sm:p-8 md:p-10">
              <h2 className="mb-3 text-xl font-bold !text-white sm:mb-4 sm:text-2xl">
                Ai măsurat deja?
              </h2>
              <p className="mb-5 text-base !text-gray-300 sm:mb-6">
                Următorul pas e să ne trimiți datele. Verificăm împreună și îți confirmăm dacă totul e în regulă.
              </p>
              <a
                href="/cum-functioneaza"
                className="inline-block w-fit bg-blue-600 px-6 py-3 text-base font-bold !text-white transition-colors hover:bg-blue-500 sm:px-8 sm:py-3.5"
              >
                Vezi cum funcționează procesul →
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
