interface CTAOfertaFinalProps {
  ctaText?: string;
  ctaHref?: string;
  subtext?: string;
}

export default function CTAOfertaFinal({
  ctaText = "Cere ofertă pe dimensiunile tale",
  ctaHref = "/cerere-oferta",
  subtext = "Nu costă nimic să verificăm dacă se poate face.",
}: CTAOfertaFinalProps) {
  return (
    <section className="px-4 py-24 md:py-32">
      <div className="mx-auto max-w-3xl text-center">
        <a
          href={ctaHref}
          className="inline-block bg-blue-600 px-10 py-4 text-lg font-bold text-white hover:bg-blue-700"
        >
          {ctaText}
        </a>
        <p className="mt-8 text-base text-gray-900">
          {subtext}
        </p>
      </div>
    </section>
  );
}
