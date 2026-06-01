import Link from "next/link";
import { Instagram } from "lucide-react";

const productLinks = [
  { label: "Vasos personalizados", href: "/shop?cat=vasos" },
  { label: "Playeras con texto", href: "/shop?cat=ropa" },
  { label: "Llaveros", href: "/shop?cat=llaveros" },
  { label: "Etiquetas para fiesta", href: "/shop?cat=fiestas" },
  { label: "Cajitas de regalo", href: "/shop?cat=packaging" },
];

const infoLinks = [
  { label: "Envíos", href: "/#envios" },
  { label: "Devoluciones", href: "/#devoluciones" },
  { label: "Preguntas frecuentes", href: "/#faq" },
  { label: "Contacto por WhatsApp", href: "/#contacto" },
];

export function Footer() {
  return (
    <footer
      id="contacto"
      className="bg-carbon text-crema/60 py-16 px-6 md:px-10"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-12 border-b border-crema/10">
          {/* Brand */}
          <div className="space-y-4">
            <span className="font-cormorant text-3xl italic text-crema block">
              Casa Alessia
            </span>
            <p className="font-dm text-sm leading-relaxed max-w-xs">
              Cosas bonitas hechas a mano, con tu nombre y a tu manera.
              Te llegan a cualquier parte de México.
            </p>
            <div className="flex items-center gap-4 pt-1">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-crema/30 hover:text-crema transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h4 className="font-dm text-xs tracking-[0.2em] uppercase text-crema/30">
              Productos
            </h4>
            <ul className="space-y-2.5">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-dm text-sm hover:text-crema transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div className="space-y-4">
            <h4 className="font-dm text-xs tracking-[0.2em] uppercase text-crema/30">
              Información
            </h4>
            <ul className="space-y-2.5">
              {infoLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-dm text-sm hover:text-crema transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-dm text-xs text-crema/25">
            © {new Date().getFullYear()} Casa Alessia. Todos los derechos reservados.
          </p>
          <p className="font-dm text-xs text-crema/25">
            Hecho en México
          </p>
        </div>
      </div>
    </footer>
  );
}
