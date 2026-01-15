"use client";

import { useState } from "react";

export default function BirouPage() {
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
      <div className="mx-auto max-w-6xl px-6 sm:px-8 md:px-12 lg:px-16">
        {/* HERO */}
        <section className="flex min-h-[50vh] flex-col justify-center py-12 sm:min-h-[60vh] sm:py-16 md:py-20">
          <div className="border-l-2 border-gray-900 pl-6 sm:pl-8 md:pl-10">
            <h1 className="mb-5 max-w-3xl text-4xl font-extrabold leading-[1.1] tracking-tight sm:mb-6 md:mb-8 md:text-5xl lg:text-6xl">
              Birou pe dimensiuni
            </h1>
            <p className="mb-8 max-w-xl text-lg leading-relaxed text-gray-600 sm:mb-10 md:mb-14 md:text-xl lg:text-2xl">
              Spațiu de lucru care se potrivește exact în camera ta. Tu măsori, noi producem, tu montezi.
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
              <li className="py-1 sm:py-2">Nișe sau colțuri unde nu încape un birou standard</li>
              <li className="py-1 sm:py-2">Camere cu ferestre sau calorifere în poziții incomode</li>
              <li className="py-1 sm:py-2">Home office amenajat în living sau dormitor</li>
              <li className="py-1 sm:py-2">Oameni care vor un blat continuu de perete la perete</li>
            </ul>
            <p className="max-w-lg text-sm text-gray-500 sm:text-base">
              Nu este potrivit pentru cei care vor montaj profesionist inclus sau mobilier de birou industrial.
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
              <h3 className="mb-1 text-base font-bold sm:mb-2 md:text-lg">Lățime blat</h3>
              <p className="text-sm text-gray-500 sm:text-base">
                De la 80 cm pentru spații mici până la 300 cm pentru blaturi continue.
              </p>
            </div>
            <div className="border-l-2 border-gray-300 py-4 pl-6 sm:py-5 sm:pl-8 md:py-6 md:pl-10">
              <h3 className="mb-1 text-base font-bold sm:mb-2 md:text-lg">Adâncime</h3>
              <p className="text-sm text-gray-500 sm:text-base">
                De la 50 cm pentru laptop până la 80 cm pentru monitor mare și periferice.
              </p>
            </div>
            <div className="border-l-2 border-gray-300 py-4 pl-6 sm:py-5 sm:pl-8 md:py-6 md:pl-10">
              <h3 className="mb-1 text-base font-bold sm:mb-2 md:text-lg">Înălțime</h3>
              <p className="text-sm text-gray-500 sm:text-base">
                Standard 75 cm sau ajustată pentru scaunul tău. Plus opțiune pentru standing desk.
              </p>
            </div>
            <div className="border-l-2 border-gray-300 py-4 pl-6 sm:py-5 sm:pl-8 md:py-6 md:pl-10">
              <h3 className="mb-1 text-base font-bold sm:mb-2 md:text-lg">Decupaje cabluri</h3>
              <p className="text-sm text-gray-500 sm:text-base">
                Găuri pentru cabluri în blat sau spate, poziționate unde ai nevoie.
              </p>
            </div>
            <div className="border-l-2 border-gray-300 py-4 pl-6 sm:py-5 sm:pl-8 md:py-6 md:pl-10">
              <h3 className="mb-1 text-base font-bold sm:mb-2 md:text-lg">Depozitare</h3>
              <p className="text-sm text-gray-500 sm:text-base">
                Sertare, rafturi, dulapuri laterale. Configurație adaptată la ce folosești.
              </p>
            </div>
            <div className="border-l-2 border-gray-300 py-4 pl-6 sm:py-5 sm:pl-8 md:py-6 md:pl-10">
              <h3 className="mb-1 text-base font-bold sm:mb-2 md:text-lg">Forme speciale</h3>
              <p className="text-sm text-gray-500 sm:text-base">
                Blaturi în L, colțuri rotunjite, decupaje pentru calorifere sau prize.
              </p>
            </div>
          </div>
        </section>

        <hr className="border-gray-300" />

        {/* DE CE BIROURILE STANDARD SUNT LIMITATIVE */}
        <section className="py-12 sm:py-16 md:py-24">
          <div className="mb-8 border-l-2 border-gray-300 pl-6 sm:mb-10 sm:pl-8 md:mb-14 md:pl-10">
            <h2 className="text-2xl font-bold md:text-3xl lg:text-4xl">
              De ce birourile standard sunt limitative
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="border-l-2 border-gray-200 bg-gray-100/50 py-6 pl-6 pr-4 sm:py-8 sm:pl-8 md:py-10 md:pl-10">
              <h3 className="mb-4 text-base font-normal text-gray-400 sm:mb-5 md:mb-6 md:text-lg">
                Birou standard
              </h3>
              <ul className="space-y-2 text-sm text-gray-400 sm:space-y-3 sm:text-base md:text-lg">
                <li>Lățimi fixe (100, 120, 140 cm)</li>
                <li>Adâncime standard 60 cm</li>
                <li>Spațiu pierdut lângă pereți</li>
                <li>Fără opțiuni de decupaj</li>
              </ul>
            </div>
            <div className="border-l-2 border-blue-600 bg-white py-6 pl-6 pr-4 sm:py-8 sm:pl-8 md:py-10 md:pl-10">
              <h3 className="mb-4 text-base font-bold text-gray-900 sm:mb-5 md:mb-6 md:text-lg">
                Birou pe dimensiuni
              </h3>
              <ul className="space-y-2 text-sm font-semibold text-gray-900 sm:space-y-3 sm:text-base md:text-lg">
                <li>Lățime exactă pe spațiul tău</li>
                <li>Adâncime adaptată la setup</li>
                <li>Folosire completă a nișei</li>
                <li>Decupaje pentru cabluri și obstacole</li>
              </ul>
            </div>
          </div>
          <div className="mt-6 border-l-2 border-gray-300 pl-6 sm:mt-8 sm:pl-8 md:mt-10 md:pl-10">
            <p className="max-w-xl text-sm text-gray-500 sm:text-base md:text-lg">
              Un birou care nu se potrivește în spațiu devine o problemă zilnică. Noi facem birouri care se potrivesc.
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
                <h3 className="mb-1 text-base font-bold sm:mb-2 md:text-lg">Uitarea caloriferului</h3>
                <p className="max-w-xl text-sm text-gray-500 sm:text-base">
                  Caloriferul de sub fereastră afectează adâncimea și înălțimea blatului. Măsoară și poziția lui.
                </p>
              </div>
              <div>
                <h3 className="mb-1 text-base font-bold sm:mb-2 md:text-lg">Ignorarea prizelor</h3>
                <p className="max-w-xl text-sm text-gray-500 sm:text-base">
                  Prizele de pe perete trebuie să rămână accesibile. Notează poziția lor pentru decupaje sau spațiere.
                </p>
              </div>
              <div>
                <h3 className="mb-1 text-base font-bold sm:mb-2 md:text-lg">Adâncime prea mică</h3>
                <p className="max-w-xl text-sm text-gray-500 sm:text-base">
                  Pentru un monitor de 27&quot; ai nevoie de minim 60 cm adâncime. Pentru dual monitor, 70 cm e mai confortabil.
                </p>
              </div>
              <div>
                <h3 className="mb-1 text-base font-bold sm:mb-2 md:text-lg">Nerespectarea spațiului pentru scaun</h3>
                <p className="max-w-xl text-sm text-gray-500 sm:text-base">
                  Scaunul de birou are nevoie de minim 70 cm în spate pentru a te putea ridica confortabil.
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
                  Lățime, adâncime disponibilă, poziția prizelor și caloriferelor.
                </p>
              </div>
            </div>
            <div className="flex border-l-2 border-blue-600 py-4 pl-6 sm:py-5 sm:pl-8 md:py-6 md:pl-10">
              <span className="mr-4 text-2xl font-extrabold text-blue-600 sm:mr-6 sm:text-3xl md:text-4xl">02</span>
              <div>
                <h3 className="text-base font-bold sm:text-lg md:text-xl">Trimiți datele</h3>
                <p className="text-sm text-gray-500 sm:text-base">
                  Schiță cu cote, poze cu spațiul, ce depozitare ai nevoie.
                </p>
              </div>
            </div>
            <div className="flex border-l-2 border-blue-600 py-4 pl-6 sm:py-5 sm:pl-8 md:py-6 md:pl-10">
              <span className="mr-4 text-2xl font-extrabold text-blue-600 sm:mr-6 sm:text-3xl md:text-4xl">03</span>
              <div>
                <h3 className="text-base font-bold sm:text-lg md:text-xl">Validăm și producem</h3>
                <p className="text-sm text-gray-500 sm:text-base">
                  Verificăm măsurătorile, clarificăm detaliile, apoi producem.
                </p>
              </div>
            </div>
            <div className="flex border-l-2 border-blue-600 py-4 pl-6 sm:py-5 sm:pl-8 md:py-6 md:pl-10">
              <span className="mr-4 text-2xl font-extrabold text-blue-600 sm:mr-6 sm:text-3xl md:text-4xl">04</span>
              <div>
                <h3 className="text-base font-bold sm:text-lg md:text-xl">Livrare și montaj DIY</h3>
                <p className="text-sm text-gray-500 sm:text-base">
                  Blat și corpuri gata de asamblat, cu instrucțiuni clare.
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
              Ai un spațiu pentru birou?
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

        <hr className="border-gray-300" />

        {/* REQUEST FORM */}
        <section className="py-14 sm:py-20 md:py-28">
          <div className="border-l-2 border-gray-300 pl-6 sm:pl-8 md:pl-10">
            <h2 className="mb-6 text-xl font-bold sm:mb-8 md:text-2xl lg:text-3xl">
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
