"use client";

import { useState } from "react";
import Image from "next/image";

export default function BaiePage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-stone-50 text-gray-900">
      {/* HERO with Image */}
      <section className="relative flex min-h-[50vh] flex-col justify-center sm:min-h-[55vh]">
        <Image
          src="https://images.unsplash.com/photo-1620626011761-996317b8d101?w=1920&q=80"
          alt="Custom bathroom vanity furniture"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/85 via-gray-900/60 to-gray-900/30" />
        <div className="relative z-10 mx-auto w-full max-w-6xl px-6 sm:px-8 md:px-12 lg:px-16 text-white">
          <h1 className="mb-4 max-w-3xl text-3xl font-extrabold leading-[1.1] tracking-tight !text-white sm:mb-5 sm:text-4xl md:text-5xl lg:text-6xl">
            Mobilier de baie pe dimensiuni
          </h1>
          <p className="mb-6 max-w-xl text-base leading-relaxed !text-gray-100 sm:mb-8 sm:text-lg md:text-xl">
            Dulapuri și blaturi care se potrivesc exact în spațiul tău. Tu măsori, noi producem, tu montezi.
          </p>
          <a
            href="/masuratori"
            className="inline-block bg-blue-600 px-7 py-3 text-sm font-bold !text-white transition-colors hover:bg-blue-500 sm:px-8 sm:py-3.5 sm:text-base"
          >
            Vezi cum se măsoară corect
          </a>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-6 sm:px-8 md:px-12 lg:px-16">
        {/* PENTRU CINE ESTE */}
        <section className="py-10 sm:py-12 md:py-16">
          <div className="border-l-2 border-gray-300 pl-6 sm:pl-8">
            <h2 className="mb-5 text-xl font-bold sm:mb-6 md:text-2xl lg:text-3xl">
              Pentru cine funcționează
            </h2>
            <ul className="mb-5 space-y-1 text-base text-gray-600 sm:space-y-2 md:text-lg">
              <li className="py-1">Băi mici unde fiecare centimetru contează</li>
              <li className="py-1">Spații cu țevi aparente sau instalații nestandard</li>
              <li className="py-1">Nișe sau colțuri greu de mobilat</li>
              <li className="py-1">Apartamente vechi cu dimensiuni atipice</li>
            </ul>
            <p className="max-w-lg text-sm text-gray-500">
              Nu este potrivit pentru cei care vor montaj profesionist inclus sau instalații sanitare.
            </p>
          </div>
        </section>

        <hr className="border-gray-300" />

        {/* CE POȚI PERSONALIZA */}
        <section className="py-10 sm:py-12 md:py-16">
          <div className="mb-6 sm:mb-8">
            <h2 className="text-xl font-bold md:text-2xl lg:text-3xl">
              Ce poți personaliza
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-0 md:grid-cols-2">
            <div className="border-l-2 border-gray-300 py-3 pl-6 sm:py-4 sm:pl-8">
              <h3 className="mb-1 text-base font-bold md:text-lg">Lățime și înălțime</h3>
              <p className="text-sm text-gray-500">
                Dulapuri adaptate exact la spațiul disponibil, de la 30 cm la 180 cm.
              </p>
            </div>
            <div className="border-l-2 border-gray-300 py-3 pl-6 sm:py-4 sm:pl-8">
              <h3 className="mb-1 text-base font-bold md:text-lg">Adâncime</h3>
              <p className="text-sm text-gray-500">
                De la 25 cm pentru spații înguste până la 50 cm pentru blaturi generoase.
              </p>
            </div>
            <div className="border-l-2 border-gray-300 py-3 pl-6 sm:py-4 sm:pl-8">
              <h3 className="mb-1 text-base font-bold md:text-lg">Decupaje pentru instalații</h3>
              <p className="text-sm text-gray-500">
                Găuri pentru țevi, sifon, prize. Poziționate exact unde ai nevoie.
              </p>
            </div>
            <div className="border-l-2 border-gray-300 py-3 pl-6 sm:py-4 sm:pl-8">
              <h3 className="mb-1 text-base font-bold md:text-lg">Tip lavoar</h3>
              <p className="text-sm text-gray-500">
                Blat cu decupaj pentru lavoar încastrat sau suprafață pentru lavoar pe blat.
              </p>
            </div>
            <div className="border-l-2 border-gray-300 py-3 pl-6 sm:py-4 sm:pl-8">
              <h3 className="mb-1 text-base font-bold md:text-lg">Compartimentare</h3>
              <p className="text-sm text-gray-500">
                Sertare, rafturi, uși. Configurație adaptată la ce depozitezi.
              </p>
            </div>
            <div className="border-l-2 border-gray-300 py-3 pl-6 sm:py-4 sm:pl-8">
              <h3 className="mb-1 text-base font-bold md:text-lg">Finisaje rezistente la umiditate</h3>
              <p className="text-sm text-gray-500">
                PAL hidrofug, cantări sigilate, suprafețe ușor de curățat.
              </p>
            </div>
          </div>
        </section>

        {/* MID-PAGE IMAGE */}
        <section className="relative my-8 h-48 sm:my-10 sm:h-56 md:h-64">
          <Image
            src="https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1200&q=80"
            alt="Modern bathroom interior"
            fill
            className="object-cover"
          />
        </section>

        {/* DE CE MOBILIERUL STANDARD NU SE POTRIVEȘTE */}
        <section className="py-10 sm:py-12 md:py-16">
          <div className="mb-6 sm:mb-8">
            <h2 className="text-xl font-bold md:text-2xl lg:text-3xl">
              De ce mobilierul standard de baie nu se potrivește
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="bg-gray-200/60 py-5 pl-6 pr-4 sm:py-6 sm:pl-8">
              <h3 className="mb-3 text-base font-normal text-gray-400 sm:mb-4 md:text-lg">
                Mobilier standard de baie
              </h3>
              <ul className="space-y-2 text-sm text-gray-400 sm:text-base">
                <li>Lățimi fixe (40, 60, 80 cm)</li>
                <li>Decupaj lavoar în poziție centrală</li>
                <li>Adâncime standard de 45 cm</li>
                <li>Fără adaptare la țevi existente</li>
              </ul>
            </div>
            <div className="border-l-4 border-blue-600 bg-white py-5 pl-6 pr-4 shadow-lg sm:py-6 sm:pl-8">
              <h3 className="mb-3 text-base font-bold text-gray-900 sm:mb-4 md:text-lg">
                Mobilier pe dimensiuni
              </h3>
              <ul className="space-y-2 text-sm font-semibold text-gray-900 sm:text-base">
                <li>Lățime la milimetru</li>
                <li>Decupaj lavoar unde ai sifonul</li>
                <li>Adâncime adaptată spațiului</li>
                <li>Decupaje exacte pentru instalații</li>
              </ul>
            </div>
          </div>
          <div className="mt-5 sm:mt-6">
            <p className="max-w-xl text-sm text-gray-500 sm:text-base">
              Băile din blocuri vechi au rareori dimensiuni standard. Mobilierul nostru se adaptează la ce există.
            </p>
          </div>
        </section>

        <hr className="border-gray-300" />

        {/* GREȘELI FRECVENTE */}
        <section className="py-10 sm:py-12 md:py-16">
          <div className="border-l-2 border-gray-300 pl-6 sm:pl-8">
            <h2 className="mb-5 text-xl font-bold sm:mb-6 md:text-2xl lg:text-3xl">
              Greșeli frecvente
            </h2>
            <div className="mb-5 space-y-4 sm:mb-6">
              <div>
                <h3 className="mb-1 text-base font-bold md:text-lg">Uitarea poziției sifonului</h3>
                <p className="max-w-xl text-sm text-gray-500">
                  Sifonul dictează unde poate fi lavorul. Măsoară distanța de la perete și de la podea.
                </p>
              </div>
              <div>
                <h3 className="mb-1 text-base font-bold md:text-lg">Ignorarea țevilor de pe perete</h3>
                <p className="max-w-xl text-sm text-gray-500">
                  Țevile aparente necesită decupaje în spate. Notează poziția și diametrul exact.
                </p>
              </div>
              <div>
                <h3 className="mb-1 text-base font-bold md:text-lg">Măsurarea fără plintă</h3>
                <p className="max-w-xl text-sm text-gray-500">
                  Dacă ai gresie cu bordură, măsoară de deasupra ei. Altfel dulapul nu va sta drept.
                </p>
              </div>
              <div>
                <h3 className="mb-1 text-base font-bold md:text-lg">Nerespectarea deschiderii ușii</h3>
                <p className="max-w-xl text-sm text-gray-500">
                  Verifică dacă ușile dulapului se pot deschide fără să lovească cada sau vasul de toaletă.
                </p>
              </div>
            </div>
            <a
              href="/masuratori"
              className="text-sm font-bold text-blue-600 underline decoration-blue-600/40 underline-offset-4 transition-colors hover:text-blue-800 hover:decoration-blue-800"
            >
              Ghid complet de măsurători →
            </a>
          </div>
        </section>

        <hr className="border-gray-300" />

        {/* CUM DECURGE COMANDA */}
        <section className="py-10 sm:py-12 md:py-16">
          <div className="mb-6 sm:mb-8">
            <h2 className="text-xl font-bold md:text-2xl lg:text-3xl">
              Cum decurge comanda
            </h2>
          </div>
          <div className="space-y-0">
            <div className="flex border-l-2 border-blue-600 py-3 pl-6 sm:py-4 sm:pl-8">
              <span className="mr-4 text-xl font-extrabold text-blue-600 sm:mr-5 sm:text-2xl md:text-3xl">01</span>
              <div>
                <h3 className="text-base font-bold md:text-lg">Măsori spațiul</h3>
                <p className="text-sm text-gray-500">
                  Lățime, înălțime, poziția sifonului și a țevilor.
                </p>
              </div>
            </div>
            <div className="flex border-l-2 border-blue-600 py-3 pl-6 sm:py-4 sm:pl-8">
              <span className="mr-4 text-xl font-extrabold text-blue-600 sm:mr-5 sm:text-2xl md:text-3xl">02</span>
              <div>
                <h3 className="text-base font-bold md:text-lg">Trimiți datele</h3>
                <p className="text-sm text-gray-500">
                  Schiță cu cote, poze cu instalațiile, tipul de lavoar.
                </p>
              </div>
            </div>
            <div className="flex border-l-2 border-blue-600 py-3 pl-6 sm:py-4 sm:pl-8">
              <span className="mr-4 text-xl font-extrabold text-blue-600 sm:mr-5 sm:text-2xl md:text-3xl">03</span>
              <div>
                <h3 className="text-base font-bold md:text-lg">Validăm și producem</h3>
                <p className="text-sm text-gray-500">
                  Verificăm compatibilitatea, clarificăm detaliile, apoi producem.
                </p>
              </div>
            </div>
            <div className="flex border-l-2 border-blue-600 py-3 pl-6 sm:py-4 sm:pl-8">
              <span className="mr-4 text-xl font-extrabold text-blue-600 sm:mr-5 sm:text-2xl md:text-3xl">04</span>
              <div>
                <h3 className="text-base font-bold md:text-lg">Livrare și montaj DIY</h3>
                <p className="text-sm text-gray-500">
                  Corpuri gata de montat, cu decupaje făcute, cu instrucțiuni.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FINAL CTA with Image */}
        <section className="relative my-10 flex min-h-[35vh] flex-col justify-center sm:my-12 sm:min-h-[40vh]">
          <Image
            src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=1200&q=80"
            alt="Modern bathroom design"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-gray-900/40" />
          <div className="relative z-10 px-6 sm:px-8 text-white">
            <h2 className="mb-3 text-xl font-bold !text-white sm:mb-4 md:text-2xl lg:text-3xl">
              Ai o baie greu de mobilat?
            </h2>
            <p className="mb-5 max-w-xl text-sm !text-gray-100 sm:mb-6 sm:text-base">
              Primul pas e să măsori corect. Ghidul nostru te ajută să notezi tot ce contează.
            </p>
            <a
              href="/masuratori"
              className="inline-block bg-blue-600 px-7 py-3 text-sm font-bold !text-white transition-colors hover:bg-blue-500 sm:px-8 sm:py-3.5 sm:text-base"
            >
              Vezi cum măsori corect
            </a>
          </div>
        </section>

        {/* REQUEST FORM */}
        <section className="py-10 sm:py-12 md:py-16">
          <div className="border-l-2 border-gray-300 pl-6 sm:pl-8">
            <h2 className="mb-5 text-xl font-bold sm:mb-6 md:text-2xl lg:text-3xl">
              Vrei să discutăm despre proiectul tău?
            </h2>

            {isSubmitted ? (
              <p className="text-lg font-medium text-gray-900">
                Mulțumim! Te vom contacta în curând.
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="max-w-md space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    Nume *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full border border-gray-300 bg-white px-4 py-3 text-base text-gray-900 placeholder-gray-400 focus:border-blue-600 focus:outline-none"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border border-gray-300 bg-white px-4 py-3 text-base text-gray-900 placeholder-gray-400 focus:border-blue-600 focus:outline-none"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    Telefon (opțional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full border border-gray-300 bg-white px-4 py-3 text-base text-gray-900 placeholder-gray-400 focus:border-blue-600 focus:outline-none"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    Mesaj (opțional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full resize-none border border-gray-300 bg-white px-4 py-3 text-base text-gray-900 placeholder-gray-400 focus:border-blue-600 focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="bg-blue-600 px-8 py-3 text-base font-bold text-white transition-colors hover:bg-blue-700"
                >
                  Trimite
                </button>
              </form>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}
