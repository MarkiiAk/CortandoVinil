import Link from "next/link";
import Image from "next/image";
import { Instagram } from "lucide-react";

const serviceLinks = [
  { label: "Sublimado", href: "/shop?cat=sublimado" },
  { label: "Corte Láser y CNC", href: "/shop?cat=laser" },
  { label: "Gran Formato", href: "/shop?cat=granformato" },
  { label: "Impresos", href: "/shop?cat=impresos" },
  { label: "Vinil Textil", href: "/shop?cat=viniltextil" },
];

const infoLinks = [
  { label: "Envíos", href: "/#envios" },
  { label: "Preguntas frecuentes", href: "/#faq" },
  { label: "Cotizar por WhatsApp", href: "/#contacto" },
  { label: "Contacto", href: "/#contacto" },
];

const WHATSAPP_NUMBER = "5212296499981";

export function Footer() {
  return (
    <footer
      id="contacto"
      className="bg-oscuro text-lienzo/50 py-16 px-6 md:px-10"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-12 border-b border-lienzo/8">
          {/* Brand */}
          <div className="space-y-4">
            <Image
              src="/logo.png"
              alt="Cortando Vinil"
              width={300}
              height={110}
              className="h-20 w-auto object-contain brightness-0 invert"
            />
            <p className="font-archivo text-lg text-lienzo/40">
              Impresión y corte profesional.
            </p>
            <p className="font-figtree text-sm leading-relaxed max-w-xs">
              Sublimado, corte láser, gran formato, impresos y vinil textil.
              Más de 15 años produciendo para México.
            </p>
            <div className="flex items-center gap-4 pt-1">
              <a
                href="https://instagram.com/cortandovinil"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lienzo/25 hover:text-lienzo transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-figtree text-xs text-lienzo/25 hover:text-lienzo transition-colors duration-200"
              >
                WhatsApp
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-figtree text-xs tracking-[0.2em] uppercase text-lienzo/25">
              Servicios
            </h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-figtree text-sm hover:text-lienzo transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div className="space-y-4">
            <h4 className="font-figtree text-xs tracking-[0.2em] uppercase text-lienzo/25">
              Información
            </h4>
            <ul className="space-y-2.5">
              {infoLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-figtree text-sm hover:text-lienzo transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-figtree text-xs text-lienzo/20">
            © {new Date().getFullYear()} Cortando Vinil. Todos los derechos reservados.
          </p>
          <p className="font-figtree text-xs text-lienzo/20">
            Hecho en México
          </p>
        </div>
      </div>
    </footer>
  );
}
