interface CheckoutSummaryProps {
  productName?: string;
  price?: string;
}

export default function CheckoutSummary({
  productName = "Produs selectat",
  price = "—",
}: CheckoutSummaryProps) {
  return (
    <section className="px-4 py-12 md:py-16">
      <div className="mx-auto max-w-xl">
        <h2 className="mb-6 text-2xl font-bold text-gray-900 md:text-3xl">
          Sumar comandă
        </h2>
        <div className="rounded-lg border border-gray-200 bg-white p-6">
          <p className="mb-2 text-lg font-semibold text-gray-900">
            {productName}
          </p>
          <p className="mb-4 text-xl font-bold text-gray-800">
            {price}
          </p>
          <p className="text-sm text-gray-600">
            Vei fi contactat pentru confirmarea comenzii și detalii de livrare.
          </p>
        </div>
      </div>
    </section>
  );
}
