import HeroClar from "../../components/HeroClar";
import PentruCineEste from "../../components/PentruCineEste";
import ProcesIn4Pasi from "../../components/ProcesIn4Pasi";
import CePotiPersonaliza from "../../components/CePotiPersonaliza";
import FricaMasuratori from "../../components/FricaMasuratori";
import CTAOfertaFinal from "../../components/CTAOfertaFinal";

export default function DressingPage() {
  return (
    <main>
      <HeroClar
        title="Dressing pe dimensiunile tale."
        subtitle="Depozitare eficientă pentru nișe, dormitoare și holuri. Măsori, noi producem, tu montezi."
      />
      <PentruCineEste
        headline="Pentru cine este dressingul pe dimensiuni"
        items={[
          "Nișe și spații neregulate",
          "Dormitoare cu forme atipice",
          "Holuri înguste sau cu tavan înclinat",
          "Oameni care vor depozitare maximă pe spațiu minim",
        ]}
        exclusionText="Dacă ai un spațiu standard și vrei montaj inclus, soluțiile noastre gata de livrare sunt mai potrivite."
      />
      <ProcesIn4Pasi />
      <CePotiPersonaliza
        title="Ce poți personaliza la dressing"
        items={[
          "Lățimea și înălțimea corpurilor",
          "Adâncimea dulapurilor",
          "Configurația rafturilor și sertarelor",
          "Spațiul pentru haine lungi sau scurte",
          "Poziționarea barelor de umerașe",
        ]}
      />
      <FricaMasuratori />
      <CTAOfertaFinal />
    </main>
  );
}
