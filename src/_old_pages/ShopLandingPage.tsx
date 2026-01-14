import HeroClar from "../../components/HeroClar";
import ShopIntro from "../../components/ShopIntro";

export default function ShopLandingPage() {
  return (
    <main>
      <HeroClar
        title="Produse gata de livrare"
        subtitle="Mobilier standard, cu dimensiuni fixe. Disponibil rapid, fără personalizare."
        primaryCtaText="Vezi produsele"
        primaryCtaHref="/shop/produse"
        secondaryLinkText="Ai nevoie de mobilă pe dimensiuni?"
        secondaryLinkHref="/pe-dimensiuni"
      />
      <ShopIntro />
    </main>
  );
}
