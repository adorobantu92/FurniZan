import { ReactNode } from "react";

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col bg-white text-gray-900">
      <header className="px-4 py-6">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 md:flex-row">
          <a href="/" className="text-xl font-bold text-gray-900">
            ZAN Mobilă
          </a>
          <nav className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
            <a
              href="/pe-dimensiuni"
              className="text-sm text-gray-900 hover:text-blue-600"
            >
              Mobilă pe dimensiuni
            </a>
            <a
              href="/shop"
              className="text-sm text-gray-900 hover:text-blue-600"
            >
              Produse gata de livrare
            </a>
            <a
              href="/cum-functioneaza"
              className="text-sm text-gray-900 hover:text-blue-600"
            >
              Cum funcționează
            </a>
            <a
              href="/masuratori-montaj"
              className="text-sm text-gray-900 hover:text-blue-600"
            >
              Măsurători & montaj
            </a>
            <a
              href="/contact"
              className="text-sm text-gray-900 hover:text-blue-600"
            >
              Contact
            </a>
          </nav>
          <a
            href="/cerere-oferta"
            className="bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
          >
            Cere ofertă
          </a>
        </div>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div>
              <h4 className="mb-4 text-sm font-bold text-gray-900">
                Link-uri utile
              </h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/masuratori"
                    className="text-sm text-gray-900 hover:text-blue-600"
                  >
                    Măsurători
                  </a>
                </li>
                <li>
                  <a
                    href="/montaj"
                    className="text-sm text-gray-900 hover:text-blue-600"
                  >
                    Montaj
                  </a>
                </li>
                <li>
                  <a
                    href="/faq"
                    className="text-sm text-gray-900 hover:text-blue-600"
                  >
                    FAQ
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="text-sm text-gray-900 hover:text-blue-600"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 text-sm font-bold text-gray-900">
                Despre noi
              </h4>
              <p className="text-sm text-gray-900">
                Mobilă pe dimensiuni exacte. Măsori, noi producem, tu montezi.
              </p>
            </div>
            <div>
              <h4 className="mb-4 text-sm font-bold text-gray-900">
                Contact
              </h4>
              <p className="text-sm text-gray-900">ZAN Mobilă SRL</p>
              <p className="text-sm text-gray-900">contact@zanmobila.ro</p>
              <p className="text-sm text-gray-900">București, România</p>
            </div>
          </div>
          <div className="mt-12 pt-8 text-center">
            <p className="text-xs text-gray-900">
              © 2026 ZAN Mobilă. Toate drepturile rezervate.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
