"use client";

import { useState } from "react";
import Image from "next/image";

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
      {/* HERO with Image */}
      <section className="relative flex min-h-[50vh] flex-col justify-center sm:min-h-[55vh]">
        <Image
          src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1920&q=80"
          alt="Modern custom kitchen cabinets"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/85 via-gray-900/60 to-gray-900/30" />
        <div className="relative z-10 mx-auto w-full max-w-6xl px-6 sm:px-8 md:px-12 lg:px-16 text-white">
          <h1 className="mb-4 max-w-3xl text-3xl font-extrabold leading-[1.1] tracking-tight !text-white sm:mb-5 sm:text-4xl md:text-5xl lg:text-6xl">
            Bucătării pe dimensiuni
          </h1>
          <p className="mb-6 max-w-xl text-base leading-relaxed !text-gray-100 sm:mb-8 sm:text-lg md:text-xl">
            Mobilier de bucătărie produs exact pe măsurătorile tale. Tu măsori, noi producem, tu montezi.
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
        {/* FOR WHOM */}
        <section className="py-10 sm:py-12 md:py-16">
          <div className="border-l-2 border-gray-300 pl-6 sm:pl-8">
            <h2 className="mb-5 text-xl font-bold sm:mb-6 md:text-2xl lg:text-3xl">
              Pentru cine funcționează
            </h2>
            <ul className="mb-5 space-y-1 text-base text-gray-600 sm:space-y-2 md:text-lg">
              <li className="py-1">Bucătării cu dimensiuni non-standard</li>
              <li className="py-1">Spații cu nișe, colțuri sau pereți înclinați</li>
              <li className="py-1">Renovări unde trebuie să eviți țevi sau prize existente</li>
              <li className="py-1">Oameni care vor control total asupra configurației</li>
            </ul>
            <p className="max-w-lg text-sm text-gray-500">
              Nu este potrivit pentru cei care vor montaj profesionist inclus sau design de la zero.
            </p>
          </div>
        </section>

        <hr className="border-gray-300" />

        {/* WHAT CAN BE CUSTOMIZED */}
        <section className="py-10 sm:py-12 md:py-16">
          <div className="mb-6 sm:mb-8">
            <h2 className="text-xl font-bold md:text-2xl lg:text-3xl">
              Ce poți personaliza
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-0 md:grid-cols-2">
            <div className="border-l-2 border-gray-300 py-3 pl-6 sm:py-4 sm:pl-8">
              <h3 className="mb-1 text-base font-bold md:text-lg">Lățimi și înălțimi</h3>
              <p className="text-sm text-gray-500">
                Fiecare corp poate avea dimensiuni diferite, la milimetru.
              </p>
            </div>
            <div className="border-l-2 border-gray-300 py-3 pl-6 sm:py-4 sm:pl-8">
              <h3 className="mb-1 text-base font-bold md:text-lg">Adâncimi</h3>
              <p className="text-sm text-gray-500">
                Corpuri mai înguste sau mai adânci, în funcție de spațiu.
              </p>
            </div>
            <div className="border-l-2 border-gray-300 py-3 pl-6 sm:py-4 sm:pl-8">
              <h3 className="mb-1 text-base font-bold md:text-lg">Configurație internă</h3>
              <p className="text-sm text-gray-500">
                Rafturi, sertare, compartimente — cum ai nevoie.
              </p>
            </div>
            <div className="border-l-2 border-gray-300 py-3 pl-6 sm:py-4 sm:pl-8">
              <h3 className="mb-1 text-base font-bold md:text-lg">Finisaje</h3>
              <p className="text-sm text-gray-500">
                Culori PAL, fronturi, mânere, balamale.
              </p>
            </div>
            <div className="border-l-2 border-gray-300 py-3 pl-6 sm:py-4 sm:pl-8">
              <h3 className="mb-1 text-base font-bold md:text-lg">Decupaje tehnice</h3>
              <p className="text-sm text-gray-500">
                Găuri pentru țevi, prize, hote, chiuvete.
              </p>
            </div>
            <div className="border-l-2 border-gray-300 py-3 pl-6 sm:py-4 sm:pl-8">
              <h3 className="mb-1 text-base font-bold md:text-lg">Layout general</h3>
              <p className="text-sm text-gray-500">
                Liniară, în L, în U — depinde de cameră.
              </p>
            </div>
          </div>
        </section>

        {/* MID-PAGE IMAGE */}
        <section className="relative my-8 h-48 sm:my-10 sm:h-56 md:h-64">
          <Image
            src="https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=1200&q=80"
            alt="Kitchen cabinet detail"
            fill
            className="object-cover"
          />
        </section>

        {/* PROCESS */}
        <section className="py-10 sm:py-12 md:py-16">
          <div className="mb-6 sm:mb-8">
            <h2 className="text-xl font-bold md:text-2xl lg:text-3xl">
              Cum funcționează
            </h2>
          </div>
          <div className="space-y-0">
            <div className="flex border-l-2 border-blue-600 py-3 pl-6 sm:py-4 sm:pl-8">
              <span className="mr-4 text-2xl font-extrabold text-blue-600 sm:text-3xl">01</span>
              <div>
                <h3 className="text-base font-bold sm:text-lg">Măsori spațiul</h3>
                <p className="text-sm text-gray-500">
                  Lățime, înălțime, adâncime. Plus poziția țevilor și prizelor.
                </p>
              </div>
            </div>
            <div className="flex border-l-2 border-blue-600 py-3 pl-6 sm:py-4 sm:pl-8">
              <span className="mr-4 text-2xl font-extrabold text-blue-600 sm:text-3xl">02</span>
              <div>
                <h3 className="text-base font-bold sm:text-lg">Trimiți datele</h3>
                <p className="text-sm text-gray-500">
                  Schiță de mână, poze, sau formularul nostru online.
                </p>
              </div>
            </div>
            <div className="flex border-l-2 border-blue-600 py-3 pl-6 sm:py-4 sm:pl-8">
              <span className="mr-4 text-2xl font-extrabold text-blue-600 sm:text-3xl">03</span>
              <div>
                <h3 className="text-base font-bold sm:text-lg">Validăm împreună</h3>
                <p className="text-sm text-gray-500">
                  Verificăm măsurătorile și clarificăm detaliile înainte de producție.
                </p>
              </div>
            </div>
            <div className="flex border-l-2 border-blue-600 py-3 pl-6 sm:py-4 sm:pl-8">
              <span className="mr-4 text-xl font-extrabold text-blue-600 sm:mr-5 sm:text-2xl md:text-3xl">04</span>
              <div>
                <h3 className="text-base font-bold md:text-lg">Producem și livrăm</h3>
                <p className="text-sm text-gray-500">
                  Corpurile vin asamblate parțial, pe palet, cu instrucțiuni.
                </p>
              </div>
            </div>
            <div className="flex border-l-2 border-blue-600 py-3 pl-6 sm:py-4 sm:pl-8">
              <span className="mr-4 text-xl font-extrabold text-blue-600 sm:mr-5 sm:text-2xl md:text-3xl">05</span>
              <div>
                <h3 className="text-base font-bold md:text-lg">Montezi</h3>
                <p className="text-sm text-gray-500">
                  DIY sau cu un meșter local. Instrucțiuni incluse.
                </p>
              </div>
            </div>
          </div>
        </section>

        <hr className="border-gray-300" />

        {/* COMMON MISTAKES */}
        <section className="py-10 sm:py-12 md:py-16">
          <div className="border-l-2 border-gray-300 pl-6 sm:pl-8">
            <h2 className="mb-5 text-xl font-bold sm:mb-6 md:text-2xl lg:text-3xl">
              Greșeli frecvente
            </h2>
            <div className="mb-5 space-y-4 sm:mb-6">
              <div>
                <h3 className="mb-1 text-base font-bold md:text-lg">Măsurarea fără să verifici de mai multe ori</h3>
                <p className="max-w-xl text-sm text-gray-500">
                  O diferență de 1-2 cm poate face un corp să nu încapă. Măsoară de cel puțin două ori.
                </p>
              </div>
              <div>
                <h3 className="mb-1 text-base font-bold md:text-lg">Uitarea țevilor și prizelor</h3>
                <p className="max-w-xl text-sm text-gray-500">
                  Notează poziția exactă a fiecărui obstacol. Altfel, corpul nu va avea loc pentru decupaj.
                </p>
              </div>
              <div>
                <h3 className="mb-1 text-base font-bold md:text-lg">Presupuneri despre pereții drepți</h3>
                <p className="max-w-xl text-sm text-gray-500">
                  Pereții rareori sunt perfect drepți. Măsoară în mai multe puncte pe aceeași linie.
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

        {/* FINAL CTA with Image */}
        <section className="relative my-10 flex min-h-[35vh] flex-col justify-center sm:my-12 sm:min-h-[40vh]">
          <Image
            src="https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?w=1200&q=80"
            alt="Modern kitchen cabinets interior"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-gray-900/40" />
          <div className="relative z-10 px-6 sm:px-8 text-white">
            <h2 className="mb-3 text-xl font-bold !text-white sm:mb-4 md:text-2xl lg:text-3xl">
              Ai dimensiunile la îndemână?
            </h2>
            <p className="mb-5 max-w-xl text-sm !text-gray-100 sm:mb-6 sm:text-base">
              Trimite-ne măsurătorile și vom reveni cu o ofertă clară, fără obligații.
            </p>
            <a
              href="/cum-functioneaza"
              className="inline-block bg-blue-600 px-7 py-3 text-sm font-bold !text-white transition-colors hover:bg-blue-500 sm:px-8 sm:py-3.5 sm:text-base"
            >
              Cere ofertă pentru bucătărie
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
