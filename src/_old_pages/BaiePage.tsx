import HeroClar from "../../components/HeroClar";
import PentruCineEste from "../../components/PentruCineEste";
import ProcesIn4Pasi from "../../components/ProcesIn4Pasi";
import CePotiPersonaliza from "../../components/CePotiPersonaliza";
import FricaMasuratori from "../../components/FricaMasuratori";
import CTAOfertaFinal from "../../components/CTAOfertaFinal";

export default function BaiePage() {
  return (
    <main>
      <HeroClar
        title="Mobilier de baie pe dimensiunile tale."
        subtitle="Soluții de depozitare pentru băi mici sau atipice. Măsori, noi producem, tu montezi."
      />
      <PentruCineEste
        headline="Pentru cine este mobilierul de baie pe dimensiuni"
        items={[
          "Băi mici cu spațiu limitat",
          "Instalații existente care nu pot fi mutate",
          "Spații neregulate sau cu colțuri dificile",
          "Oameni care vor depozitare maximă în spațiu minim",
        ]}
        exclusionText="Dacă ai o baie standard și vrei montaj inclus, soluțiile noastre gata de livrare sunt mai potrivite."
      />
      <ProcesIn4Pasi />
      <CePotiPersonaliza
        title="Ce poți personaliza la mobilierul de baie"
        items={[
          "Lățimea și înălțimea dulapului",
          "Adâncimea în funcție de lavoar",
          "Configurația rafturilor și sertarelor",
          "Spațiul pentru instalații sanitare",
          "Poziționarea corpurilor suspendate",
        ]}
      />
      <FricaMasuratori />
      <CTAOfertaFinal />
    </main>
  );
}
