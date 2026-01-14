import ProductDetails from "../../components/ProductDetails";
import CTAOfertaFinal from "../../components/CTAOfertaFinal";

export default function ProductPage() {
  return (
    <main>
      <ProductDetails />
      <CTAOfertaFinal
        ctaText="Cere ofertă pe dimensiunile tale"
        subtext="Dacă dimensiunile standard nu se potrivesc, putem produce mobilier exact pe spațiul tău."
      />
    </main>
  );
}
