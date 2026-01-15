"use client";

import { useState } from "react";

export default function BucatariePage() {
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
              Bucătării pe dimensiuni
            </h1>
            <p className="mb-8 max-w-xl text-lg leading-relaxed text-gray-600 sm:mb-10 md:mb-14 md:text-xl lg:text-2xl">
              Mobilier de bucătărie produs exact pe măsurătorile tale. Tu măsori, noi producem, tu montezi.
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

        {/* FOR WHOM */}
        <section className="py-12 sm:py-16 md:py-24">
          <div className="border-l-2 border-gray-300 pl-6 sm:pl-8 md:pl-10">
            <h2 className="mb-6 text-2xl font-bold sm:mb-8 md:mb-10 md:text-3xl lg:text-4xl">
              Pentru cine funcționează
            </h2>
            <ul className="mb-8 space-y-1 text-base text-gray-600 sm:mb-10 sm:space-y-2 md:mb-12 md:text-lg lg:text-xl">
              <li className="py-1 sm:py-2">Bucătării cu dimensiuni non-standard</li>
              <li className="py-1 sm:py-2">Spații cu nișe, colțuri sau pereți înclinați</li>
              <li className="py-1 sm:py-2">Renovări unde trebuie să eviți țevi sau prize existente</li>
              <li className="py-1 sm:py-2">Oameni care vor control total asupra configurației</li>
            </ul>
            <p className="max-w-lg text-sm text-gray-500 sm:text-base">
              Nu este potrivit pentru cei care vor montaj profesionist inclus sau design de la zero.
            </p>
          </div>
        </section>

        <hr className="border-gray-300" />

        {/* WHAT CAN BE CUSTOMIZED */}
        <section className="py-12 sm:py-16 md:py-24">
          <div className="mb-8 border-l-2 border-gray-300 pl-6 sm:mb-10 sm:pl-8 md:mb-14 md:pl-10">
            <h2 className="text-2xl font-bold md:text-3xl lg:text-4xl">
              Ce poți personaliza
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-0 md:grid-cols-2">
            <div className="border-l-2 border-gray-300 py-4 pl-6 sm:py-5 sm:pl-8 md:py-6 md:pl-10">
              <h3 className="mb-1 text-base font-bold sm:mb-2 md:text-lg">Lățimi și înălțimi</h3>
              <p className="text-sm text-gray-500 sm:text-base">
                Fiecare corp poate avea dimensiuni diferite, la milimetru.
              </p>
            </div>
            <div className="border-l-2 border-gray-300 py-4 pl-6 sm:py-5 sm:pl-8 md:py-6 md:pl-10">
              <h3 className="mb-1 text-base font-bold sm:mb-2 md:text-lg">Adâncimi</h3>
              <p className="text-sm text-gray-500 sm:text-base">
                Corpuri mai înguste sau mai adânci, în funcție de spațiu.
              </p>
            </div>
            <div className="border-l-2 border-gray-300 py-4 pl-6 sm:py-5 sm:pl-8 md:py-6 md:pl-10">
              <h3 className="mb-1 text-base font-bold sm:mb-2 md:text-lg">Configurație internă</h3>
              <p className="text-sm text-gray-500 sm:text-base">
                Rafturi, sertare, compartimente — cum ai nevoie.
              </p>
            </div>
            <div className="border-l-2 border-gray-300 py-4 pl-6 sm:py-5 sm:pl-8 md:py-6 md:pl-10">
              <h3 className="mb-1 text-base font-bold sm:mb-2 md:text-lg">Finisaje</h3>
              <p className="text-sm text-gray-500 sm:text-base">
                Culori PAL, fronturi, mânere, balamale.
              </p>
            </div>
            <div className="border-l-2 border-gray-300 py-4 pl-6 sm:py-5 sm:pl-8 md:py-6 md:pl-10">
              <h3 className="mb-1 text-base font-bold sm:mb-2 md:text-lg">Decupaje tehnice</h3>
              <p className="text-sm text-gray-500 sm:text-base">
                Găuri pentru țevi, prize, hote, chiuvete.
              </p>
            </div>
            <div className="border-l-2 border-gray-300 py-4 pl-6 sm:py-5 sm:pl-8 md:py-6 md:pl-10">
              <h3 className="mb-1 text-base font-bold sm:mb-2 md:text-lg">Layout general</h3>
              <p className="text-sm text-gray-500 sm:text-base">
                Liniară, în L, în U — depinde de cameră.
              </p>
            </div>
          </div>
        </section>

        <hr className="border-gray-300" />

        {/* PROCESS */}
        <section className="py-12 sm:py-16 md:py-24">
          <div className="mb-8 border-l-2 border-gray-300 pl-6 sm:mb-10 sm:pl-8 md:mb-14 md:pl-10">
            <h2 className="text-2xl font-bold md:text-3xl lg:text-4xl">
              Cum funcționează
            </h2>
          </div>
          <div className="space-y-0">
            <div className="flex border-l-2 border-blue-600 py-4 pl-6 sm:py-5 sm:pl-8 md:py-6 md:pl-10">
              <span className="mr-4 text-2xl font-extrabold text-blue-600 sm:mr-6 sm:text-3xl md:text-4xl">01</span>
              <div>
                <h3 className="text-base font-bold sm:text-lg md:text-xl">Măsori spațiul</h3>
                <p className="text-sm text-gray-500 sm:text-base">
                  Lățime, înălțime, adâncime. Plus poziția țevilor și prizelor.
                </p>
              </div>
            </div>
            <div className="flex border-l-2 border-blue-600 py-4 pl-6 sm:py-5 sm:pl-8 md:py-6 md:pl-10">
              <span className="mr-4 text-2xl font-extrabold text-blue-600 sm:mr-6 sm:text-3xl md:text-4xl">02</span>
              <div>
                <h3 className="text-base font-bold sm:text-lg md:text-xl">Trimiți datele</h3>
                <p className="text-sm text-gray-500 sm:text-base">
                  Schiță de mână, poze, sau formularul nostru online.
                </p>
              </div>
            </div>
            <div className="flex border-l-2 border-blue-600 py-4 pl-6 sm:py-5 sm:pl-8 md:py-6 md:pl-10">
              <span className="mr-4 text-2xl font-extrabold text-blue-600 sm:mr-6 sm:text-3xl md:text-4xl">03</span>
              <div>
                <h3 className="text-base font-bold sm:text-lg md:text-xl">Validăm împreună</h3>
                <p className="text-sm text-gray-500 sm:text-base">
                  Verificăm măsurătorile și clarificăm detaliile înainte de producție.
                </p>
              </div>
            </div>
            <div className="flex border-l-2 border-blue-600 py-4 pl-6 sm:py-5 sm:pl-8 md:py-6 md:pl-10">
              <span className="mr-4 text-2xl font-extrabold text-blue-600 sm:mr-6 sm:text-3xl md:text-4xl">04</span>
              <div>
                <h3 className="text-base font-bold sm:text-lg md:text-xl">Producem și livrăm</h3>
                <p className="text-sm text-gray-500 sm:text-base">
                  Corpurile vin asamblate parțial, pe palet, cu instrucțiuni.
                </p>
              </div>
            </div>
            <div className="flex border-l-2 border-blue-600 py-4 pl-6 sm:py-5 sm:pl-8 md:py-6 md:pl-10">
              <span className="mr-4 text-2xl font-extrabold text-blue-600 sm:mr-6 sm:text-3xl md:text-4xl">05</span>
              <div>
                <h3 className="text-base font-bold sm:text-lg md:text-xl">Montezi</h3>
                <p className="text-sm text-gray-500 sm:text-base">
                  DIY sau cu un meșter local. Instrucțiuni incluse.
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
            <div className="mb-8 space-y-6 sm:mb-10 md:mb-12">
              <div>
                <h3 className="mb-1 text-base font-bold sm:mb-2 md:text-lg">Măsurarea fără să verifici de mai multe ori</h3>
                <p className="max-w-xl text-sm text-gray-500 sm:text-base">
                  O diferență de 1-2 cm poate face un corp să nu încapă. Măsoară de cel puțin două ori.
                </p>
              </div>
              <div>
                <h3 className="mb-1 text-base font-bold sm:mb-2 md:text-lg">Uitarea țevilor și prizelor</h3>
                <p className="max-w-xl text-sm text-gray-500 sm:text-base">
                  Notează poziția exactă a fiecărui obstacol. Altfel, corpul nu va avea loc pentru decupaj.
                </p>
              </div>
              <div>
                <h3 className="mb-1 text-base font-bold sm:mb-2 md:text-lg">Presupuneri despre pereții drepți</h3>
                <p className="max-w-xl text-sm text-gray-500 sm:text-base">
                  Pereții rareori sunt perfect drepți. Măsoară în mai multe puncte pe aceeași linie.
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

        {/* FINAL CTA */}
        <section className="py-14 sm:py-20 md:py-28">
          <div className="border-l-2 border-blue-600 bg-white py-8 pl-6 pr-6 sm:py-10 sm:pl-8 sm:pr-8 md:py-14 md:pl-10 md:pr-10">
            <h2 className="mb-4 text-xl font-bold sm:mb-5 md:mb-6 md:text-2xl lg:text-3xl">
              Ai dimensiunile la îndemână?
            </h2>
            <p className="mb-6 max-w-xl text-base text-gray-600 sm:mb-8 md:text-lg">
              Trimite-ne măsurătorile și vom reveni cu o ofertă clară, fără obligații.
            </p>
            <a
              href="/cum-functioneaza"
              className="inline-block bg-blue-600 px-8 py-3 text-base font-bold text-white transition-colors hover:bg-blue-700 sm:px-10 sm:py-4 sm:text-lg"
            >
              Cere ofertă pentru bucătărie
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
