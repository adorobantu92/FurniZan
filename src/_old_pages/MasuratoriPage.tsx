import HeroClar from "../../components/HeroClar";
import GhidMasuratori from "../../components/GhidMasuratori";
import FricaMasuratori from "../../components/FricaMasuratori";
import CTAOfertaFinal from "../../components/CTAOfertaFinal";

export default function MasuratoriPage() {
  return (
    <main>
      <HeroClar
        title="Cum măsori corect"
        subtitle="Ghid simplu pentru a obține dimensiunile exacte. Nu ai nevoie de unelte speciale."
        primaryCtaText="Cere verificare gratuită"
        primaryCtaHref="/cerere-oferta"
        secondaryLinkText="Vezi procesul complet"
        secondaryLinkHref="/cum-functioneaza"
      />
      <GhidMasuratori />
      <FricaMasuratori />
      <CTAOfertaFinal
        subtext="Trimite-ne măsurătorile și le verificăm gratuit înainte de producție."
      />
    </main>
  );
}
