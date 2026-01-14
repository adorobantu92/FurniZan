import HeroClar from "../../components/HeroClar";
import PentruCineEste from "../../components/PentruCineEste";
import ProcesIn4Pasi from "../../components/ProcesIn4Pasi";
import CePotiPersonaliza from "../../components/CePotiPersonaliza";
import FricaMasuratori from "../../components/FricaMasuratori";
import CTAOfertaFinal from "../../components/CTAOfertaFinal";

export default function BucatariePage() {
  return (
    <main>
      <HeroClar
        title="Bucătărie pe dimensiunile tale."
        subtitle="Mobilier de bucătărie realizat exact pe spațiul tău. Măsori, noi producem, tu montezi."
      />
      <PentruCineEste
        headline="Pentru cine este bucătăria pe dimensiuni"
        items={[
          "Bucătării cu forme atipice",
          "Spații mici sau înguste",
          "Renovări cu instalații existente",
          "Oameni care vor să folosească fiecare centimetru",
        ]}
        exclusionText="Dacă ai un spațiu standard și vrei montaj inclus, soluțiile noastre gata de livrare sunt mai potrivite."
      />
      <ProcesIn4Pasi />
      <CePotiPersonaliza
        title="Ce poți personaliza la bucătărie"
        items={[
          "Lățimea și înălțimea corpurilor",
          "Adâncimea dulapurilor",
          "Configurația sertarelor și rafturilor",
          "Poziționarea corpurilor suspendate",
          "Dimensiunea blatului",
        ]}
      />
      <FricaMasuratori />
      <CTAOfertaFinal />
    </main>
  );
}
