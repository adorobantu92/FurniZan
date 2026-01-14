import HeroClar from "../../components/HeroClar";
import ProcesIn4Pasi from "../../components/ProcesIn4Pasi";
import FricaMasuratori from "../../components/FricaMasuratori";
import CTAOfertaFinal from "../../components/CTAOfertaFinal";

export default function CumFunctioneazaPage() {
  return (
    <main>
      <HeroClar
        title="Cum funcționează"
        subtitle="Un proces simplu în 4 pași: măsori, trimiți dimensiunile, producem și livrăm. Tu montezi."
        primaryCtaText="Începe acum"
        primaryCtaHref="/cerere-oferta"
        secondaryLinkText="Vezi categoriile disponibile"
        secondaryLinkHref="/pe-dimensiuni"
      />
      <ProcesIn4Pasi />
      <FricaMasuratori />
      <CTAOfertaFinal
        subtext="Procesul începe cu o simplă cerere de ofertă. Fără obligații."
      />
    </main>
  );
}
