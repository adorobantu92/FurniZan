"use client";

import { useState } from "react";
import Image from "next/image";

export default function CumFunctioneazaPage() {
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
      {/* HERO - Full Width with Image */}
      <section className="relative flex min-h-[50vh] flex-col justify-center sm:min-h-[55vh]">
        <Image
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80"
          alt="Modern interior design custom furniture"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950/90 via-gray-900/70 to-gray-900/40" />
        <div className="relative z-10 mx-auto w-full max-w-6xl px-6 sm:px-8 md:px-12 lg:px-16 text-white">
          <div className="max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] !text-blue-400 sm:text-sm">
              Procesul nostru
            </p>
            <h1 className="mb-4 text-3xl font-extrabold leading-[1.05] tracking-tight !text-white sm:text-4xl md:text-5xl lg:text-6xl">
              Cum funcționează
            </h1>
            <p className="max-w-lg text-base font-medium leading-relaxed !text-gray-100 sm:text-lg">
              Tu măsori. Noi producem. Tu montezi. Fără intermediari, fără surprize.
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-6 sm:px-8 md:px-12 lg:px-16">
        {/* 4-STEP PROCESS WITH VISUALS */}
        <section className="py-10 sm:py-12 md:py-16">
          <div className="mb-6 sm:mb-8">
            <h2 className="text-xl font-bold md:text-2xl lg:text-3xl">
              Procesul în 4 pași
            </h2>
          </div>
          
          {/* Step 1 */}
          <div className="mb-6 grid grid-cols-1 overflow-hidden rounded-sm shadow-lg md:grid-cols-2">
            <div className="relative h-48 md:h-auto md:min-h-[240px]">
              <Image
                src="https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&q=80"
                alt="Person measuring with tape"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent md:bg-gradient-to-r md:from-transparent md:to-gray-900/20" />
              <div className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-lg font-bold !text-white shadow-lg">
                01
              </div>
            </div>
            <div className="flex flex-col justify-center bg-white p-5 sm:p-6 md:p-8">
              <h3 className="mb-2 text-lg font-bold sm:text-xl">Măsori spațiul</h3>
              <p className="text-sm text-gray-600 sm:text-base">
                Folosind ghidul nostru, măsori lățimea, înălțimea și adâncimea spațiului. 
                Notezi poziția țevilor, prizelor și oricăror obstacole. 
                Nu ai nevoie de instrumente speciale — un metru și un creion sunt suficiente.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="mb-6 grid grid-cols-1 overflow-hidden rounded-sm shadow-lg md:grid-cols-2">
            <div className="flex flex-col justify-center bg-white p-5 sm:p-6 md:order-1 md:p-8">
              <h3 className="mb-2 text-lg font-bold sm:text-xl">Trimiți datele</h3>
              <p className="text-sm text-gray-600 sm:text-base">
                Ne trimiți măsurătorile printr-un formular simplu, împreună cu poze ale spațiului 
                și o schiță (poate fi și de mână). Noi clarificăm orice întrebare înainte de a trece mai departe.
              </p>
            </div>
            <div className="relative h-48 md:order-2 md:h-auto md:min-h-[240px]">
              <Image
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80"
                alt="Blueprint and planning documents"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent md:bg-gradient-to-l md:from-transparent md:to-gray-900/20" />
              <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-lg font-bold !text-white shadow-lg md:left-4 md:right-auto">
                02
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="mb-6 grid grid-cols-1 overflow-hidden rounded-sm shadow-lg md:grid-cols-2">
            <div className="relative h-48 md:h-auto md:min-h-[240px]">
              <Image
                src="https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800&q=80"
                alt="Furniture production CNC machine"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent md:bg-gradient-to-r md:from-transparent md:to-gray-900/20" />
              <div className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-lg font-bold !text-white shadow-lg">
                03
              </div>
            </div>
            <div className="flex flex-col justify-center bg-white p-5 sm:p-6 md:p-8">
              <h3 className="mb-2 text-lg font-bold sm:text-xl">Producem mobilierul</h3>
              <p className="text-sm text-gray-600 sm:text-base">
                Fiecare piesă este tăiată și pregătită exact pe dimensiunile tale. 
                Corpurile sunt asamblate parțial în atelier pentru a reduce erorile la montaj. 
                Primești confirmare înainte de expediere.
              </p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="grid grid-cols-1 overflow-hidden rounded-sm shadow-lg md:grid-cols-2">
            <div className="flex flex-col justify-center bg-white p-5 sm:p-6 md:order-1 md:p-8">
              <h3 className="mb-2 text-lg font-bold sm:text-xl">Livrare + montaj DIY</h3>
              <p className="text-sm text-gray-600 sm:text-base">
                Mobilierul ajunge pe palet, cu toate piesele etichetate și instrucțiuni de montaj. 
                Poți monta singur sau cu un meșter local. Timpul mediu de montaj: 1-2 zile pentru o bucătărie completă.
              </p>
            </div>
            <div className="relative h-48 md:order-2 md:h-auto md:min-h-[240px]">
              <Image
                src="https://images.unsplash.com/photo-1581783898377-1c85bf937427?w=800&q=80"
                alt="DIY furniture assembly flat pack"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent md:bg-gradient-to-l md:from-transparent md:to-gray-900/20" />
              <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-lg font-bold !text-white shadow-lg md:left-4 md:right-auto">
                04
              </div>
            </div>
          </div>
        </section>

        <hr className="border-gray-200" />

        {/* WHAT WE PROVIDE VS WHAT YOU DO */}
        <section className="py-10 sm:py-12 md:py-16">
          <div className="mb-6 sm:mb-8">
            <h2 className="text-xl font-bold md:text-2xl lg:text-3xl">
              Ce facem noi vs ce faci tu
            </h2>
          </div>
          <div className="grid grid-cols-1 overflow-hidden rounded-sm shadow-lg md:grid-cols-2">
            <div className="bg-blue-600 p-5 text-white sm:p-6 md:p-8">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
                  <svg className="h-5 w-5 !text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold !text-white">Noi ne ocupăm de</h3>
              </div>
              <ul className="space-y-2 text-sm !text-white/90 sm:space-y-3 sm:text-base">
                <li className="flex items-center gap-2">
                  <span className="!text-white">✓</span> Validarea măsurătorilor
                </li>
                <li className="flex items-center gap-2">
                  <span className="!text-white">✓</span> Proiectare tehnică
                </li>
                <li className="flex items-center gap-2">
                  <span className="!text-white">✓</span> Producție la comandă
                </li>
                <li className="flex items-center gap-2">
                  <span className="!text-white">✓</span> Asamblare parțială în atelier
                </li>
                <li className="flex items-center gap-2">
                  <span className="!text-white">✓</span> Livrare pe palet
                </li>
                <li className="flex items-center gap-2">
                  <span className="!text-white">✓</span> Instrucțiuni detaliate de montaj
                </li>
                <li className="flex items-center gap-2">
                  <span className="!text-white">✓</span> Suport pentru întrebări
                </li>
              </ul>
            </div>
            <div className="bg-gray-100 p-5 sm:p-6 md:p-8">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-300">
                  <svg className="h-5 w-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-700">Tu te ocupi de</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-600 sm:space-y-3 sm:text-base">
                <li className="flex items-center gap-2">
                  <span className="text-gray-400">○</span> Măsurarea spațiului
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-gray-400">○</span> Fotografierea zonei
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-gray-400">○</span> Recepția livrării
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-gray-400">○</span> Montajul final (DIY sau cu ajutor)
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-gray-400">○</span> Fixarea în perete (dacă e cazul)
                </li>
              </ul>
            </div>
          </div>
        </section>

        <hr className="border-gray-200" />

        {/* COMMON CONCERNS */}
        <section className="py-10 sm:py-12 md:py-16">
          <div className="mb-6 sm:mb-8">
            <h2 className="text-xl font-bold md:text-2xl lg:text-3xl">
              Întrebări frecvente
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-sm bg-white p-5 shadow-md sm:p-6">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                <svg className="h-5 w-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="mb-2 text-base font-bold">Ce se întâmplă dacă măsor greșit?</h3>
              <p className="text-sm text-gray-500">
                Înainte de producție, validăm împreună măsurătorile. Dacă ceva nu pare în regulă, te contactăm pentru clarificări.
              </p>
            </div>
            <div className="rounded-sm bg-white p-5 shadow-md sm:p-6">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                <svg className="h-5 w-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="mb-2 text-base font-bold">E greu de montat?</h3>
              <p className="text-sm text-gray-500">
                Corpurile vin pre-asamblate parțial. Montajul final e fezabil pentru cineva cu experiență minimă în bricolaj.
              </p>
            </div>
            <div className="rounded-sm bg-white p-5 shadow-md sm:p-6">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                <svg className="h-5 w-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="mb-2 text-base font-bold">Ce fac dacă o piesă nu se potrivește?</h3>
              <p className="text-sm text-gray-500">
                Dacă eroarea e din producție, înlocuim piesa gratuit. Dacă măsurătoarea a fost incorectă, putem produce o piesă nouă contra cost.
              </p>
            </div>
            <div className="rounded-sm bg-white p-5 shadow-md sm:p-6">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                <svg className="h-5 w-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="mb-2 text-base font-bold">Cât durează tot procesul?</h3>
              <p className="text-sm text-gray-500">
                De la trimiterea măsurătorilor până la livrare: 2-4 săptămâni. Montajul durează între câteva ore și 2 zile.
              </p>
            </div>
          </div>
        </section>

        <hr className="border-gray-200" />

        {/* WHO THIS IS NOT FOR */}
        <section className="py-10 sm:py-12 md:py-16">
          <div className="mb-6 sm:mb-8">
            <h2 className="text-xl font-bold md:text-2xl lg:text-3xl">
              Pentru cine nu e potrivit
            </h2>
          </div>
          <div className="rounded-sm bg-gray-100 p-5 sm:p-6 md:p-8">
            <ul className="mb-5 grid gap-3 sm:grid-cols-2 sm:gap-4">
              <li className="flex items-start gap-2 text-sm text-gray-600 sm:text-base">
                <span className="mt-0.5 text-gray-400">✗</span>
                Cei care vor montaj profesionist inclus
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-600 sm:text-base">
                <span className="mt-0.5 text-gray-400">✗</span>
                Cei care nu au timp să măsoare corect
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-600 sm:text-base">
                <span className="mt-0.5 text-gray-400">✗</span>
                Cei care preferă să vadă mobilierul fizic
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-600 sm:text-base">
                <span className="mt-0.5 text-gray-400">✗</span>
                Proiecte unde designul trebuie creat de la zero
              </li>
            </ul>
            <p className="text-sm text-gray-500">
              Nu e nimic greșit în aceste preferințe — doar că modelul nostru nu le acoperă.
            </p>
          </div>
        </section>

        <hr className="border-gray-200" />

        {/* FINAL CTA */}
        <section className="py-10 sm:py-12 md:py-16">
          <div className="grid grid-cols-1 overflow-hidden rounded-sm shadow-lg md:grid-cols-2">
            <div className="relative h-48 md:h-auto md:min-h-[280px]">
              <Image
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80"
                alt="Beautifully installed custom furniture"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent md:bg-gradient-to-r md:from-transparent md:to-gray-900/30" />
            </div>
            <div className="flex flex-col justify-center bg-blue-600 p-6 text-white sm:p-8 md:p-10">
              <h2 className="mb-3 text-xl font-bold !text-white sm:mb-4 sm:text-2xl">
                Gata să începi?
              </h2>
              <p className="mb-5 text-base !text-white/90 sm:mb-6">
                Primul pas e să înveți cum se măsoară corect. Ghidul nostru te ghidează pas cu pas.
              </p>
              <a
                href="/masuratori"
                className="inline-block w-fit bg-white px-6 py-3 text-base font-bold !text-gray-900 transition-colors hover:bg-gray-100 sm:px-8 sm:py-3.5"
              >
                Vezi ghidul de măsurători →
              </a>
            </div>
          </div>
        </section>

        <hr className="border-gray-200" />

        {/* REQUEST FORM */}
        <section className="py-10 sm:py-12 md:py-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <h2 className="mb-4 text-xl font-bold sm:text-2xl">
                Vrei să discutăm despre proiectul tău?
              </h2>
              <p className="mb-6 text-sm text-gray-500 sm:text-base">
                Completează formularul și te contactăm în cel mai scurt timp pentru a discuta despre nevoile tale.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <svg className="h-5 w-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Răspuns în 24-48 ore
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <svg className="h-5 w-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Fără obligații
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <svg className="h-5 w-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Consultanță gratuită
                </div>
              </div>
            </div>
            <div className="rounded-sm bg-white p-5 shadow-lg sm:p-6">
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-8 text-center">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-green-100">
                    <svg className="h-7 w-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-lg font-bold text-gray-900">Mulțumim!</p>
                  <p className="mt-1 text-sm text-gray-500">Te vom contacta în curând.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-gray-700">
                      Nume *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full rounded-sm border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:border-blue-600 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-gray-700">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full rounded-sm border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:border-blue-600 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-gray-700">
                      Telefon (opțional)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full rounded-sm border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:border-blue-600 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-gray-700">
                      Mesaj (opțional)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full resize-none rounded-sm border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:border-blue-600 focus:outline-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-600 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-blue-700"
                  >
                    Trimite mesajul
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
