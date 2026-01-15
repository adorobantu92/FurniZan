import Link from "next/link";

export default function ConfirmPage() {
  return (
    <main className="min-h-screen bg-stone-50 text-gray-900">
      <div className="mx-auto max-w-6xl px-6 sm:px-8 md:px-12 lg:px-16">
        <section className="flex min-h-[60vh] flex-col justify-center py-12 sm:py-16 md:py-20">
          <div className="border-l-2 border-blue-600 pl-6 sm:pl-8 md:pl-10">
            <h1 className="mb-5 text-3xl font-extrabold tracking-tight sm:mb-6 md:mb-8 md:text-4xl lg:text-5xl">
              Cerere primită
            </h1>
            <p className="mb-6 max-w-xl text-lg leading-relaxed text-gray-600 sm:mb-8 md:text-xl">
              Am primit datele tale. Te vom contacta în cel mai scurt timp pentru
              a confirma detaliile comenzii.
            </p>
          </div>

          <div className="border-l-2 border-gray-300 pl-6 sm:pl-8 md:pl-10">
            <h2 className="mb-4 text-lg font-bold sm:mb-5 md:text-xl">
              Ce urmează
            </h2>
            <ul className="mb-8 space-y-2 text-base text-gray-600 sm:mb-10 md:text-lg">
              <li>Verificăm disponibilitatea produselor</li>
              <li>Te contactăm pentru a confirma comanda</li>
              <li>Stabilim detaliile de livrare și plată</li>
              <li>Producem și livrăm</li>
            </ul>
            <p className="mb-10 max-w-lg text-sm text-gray-500 sm:text-base">
              Dacă nu primești un răspuns în 24 de ore lucrătoare, verifică
              folderul de spam sau contactează-ne direct.
            </p>
          </div>

          <div className="border-l-2 border-gray-300 pl-6 sm:pl-8 md:pl-10">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
              <Link
                href="/"
                className="inline-block bg-blue-600 px-8 py-3 text-base font-bold text-white transition-colors hover:bg-blue-700 sm:px-10 sm:py-4 sm:text-lg"
              >
                Înapoi la pagina principală
              </Link>
              <Link
                href="/shop"
                className="text-sm font-bold text-blue-600 underline decoration-blue-600/40 underline-offset-4 transition-colors hover:text-blue-800 hover:decoration-blue-800 sm:text-base"
              >
                Vezi alte produse
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
