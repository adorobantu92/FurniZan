import HeroClar from "../../components/HeroClar";
import PentruCineEste from "../../components/PentruCineEste";
import ProcesIn4Pasi from "../../components/ProcesIn4Pasi";
import CePotiPersonaliza from "../../components/CePotiPersonaliza";
import FricaMasuratori from "../../components/FricaMasuratori";
import CTAOfertaFinal from "../../components/CTAOfertaFinal";

export default function BirouPage() {
  return (
    <main>
      <HeroClar
        title="Birou pe dimensiunile tale."
        subtitle="Spațiu de lucru adaptat nișei tale sau colțului disponibil. Măsori, noi producem, tu montezi."
      />
      <PentruCineEste
        headline="Pentru cine este biroul pe dimensiuni"
        items={[
          "Home office în spații mici",
          "Nișe sau colțuri neutilizate",
          "Camere cu forme neregulate",
          "Oameni care vor ergonomie și depozitare maximă",
        ]}
        exclusionText="Dacă ai un spațiu standard și vrei montaj inclus, soluțiile noastre gata de livrare sunt mai potrivite."
      />
      <ProcesIn4Pasi />
      <CePotiPersonaliza
        title="Ce poți personaliza la birou"
        items={[
          "Lățimea și adâncimea blatului",
          "Înălțimea biroului pentru ergonomie",
          "Configurația sertarelor și rafturilor",
          "Spațiul pentru cabluri și echipamente",
          "Poziționarea corpurilor de depozitare",
        ]}
      />
      <FricaMasuratori />
      <CTAOfertaFinal />
    </main>
  );
}
