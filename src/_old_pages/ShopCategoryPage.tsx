import HeroClar from "../../components/HeroClar";
import ProductGrid from "../../components/ProductGrid";

export default function ShopCategoryPage() {
  return (
    <main>
      <HeroClar
        title="Produse standard"
        subtitle="Mobilier cu dimensiuni fixe, disponibil rapid. Verifică dacă dimensiunile se potrivesc spațiului tău."
        primaryCtaText="Înapoi la magazin"
        primaryCtaHref="/shop"
        secondaryLinkText="Ai nevoie de mobilă pe dimensiuni?"
        secondaryLinkHref="/pe-dimensiuni"
      />
      <ProductGrid />
    </main>
  );
}
