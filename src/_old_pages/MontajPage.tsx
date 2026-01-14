import HeroClar from "../../components/HeroClar";
import GhidMontaj from "../../components/GhidMontaj";
import CTAOfertaFinal from "../../components/CTAOfertaFinal";

export default function MontajPage() {
  return (
    <main>
      <HeroClar
        title="Montaj simplu, fără surprize"
        subtitle="Mobilierul vine gata de asamblat, cu instrucțiuni clare și piese etichetate. Nu ai nevoie de experiență."
        primaryCtaText="Cere ofertă"
        primaryCtaHref="/cerere-oferta"
        secondaryLinkText="Vezi ghidul de măsurători"
        secondaryLinkHref="/masuratori"
      />
      <GhidMontaj />
      <CTAOfertaFinal
        subtext="Montajul e mai simplu decât pare. Începe cu o cerere de ofertă."
      />
    </main>
  );
}
