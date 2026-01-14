interface HeroClarProps {
  title?: string;
  subtitle?: string;
  primaryCtaText?: string;
  primaryCtaHref?: string;
  secondaryLinkText?: string;
  secondaryLinkHref?: string;
}

export default function HeroClar({
  title = "Mobilă pe dimensiunile tale.",
  subtitle = "Măsori. Noi o producem. O primești pe palet și o montezi.",
  primaryCtaText = "Cere ofertă pe dimensiunile tale",
  primaryCtaHref = "#",
  secondaryLinkText = "Produse gata de livrare",
  secondaryLinkHref = "#",
}: HeroClarProps) {
  return (
    <section className="flex flex-col items-center justify-center px-4 py-24 text-center md:py-32">
      <h1 className="mb-8 text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
        {title}
      </h1>
      <p className="mb-12 max-w-2xl text-lg text-gray-900 md:text-xl">
        {subtitle}
      </p>
      <div className="flex flex-col items-center gap-6">
        <a
          href={primaryCtaHref}
          className="bg-blue-600 px-10 py-4 text-lg font-bold text-white hover:bg-blue-700"
        >
          {primaryCtaText}
        </a>
        <a
          href={secondaryLinkHref}
          className="text-sm text-gray-900 underline hover:text-blue-600"
        >
          {secondaryLinkText}
        </a>
      </div>
    </section>
  );
}
