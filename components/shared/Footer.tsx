import Link from "next/link";
import { MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react";

const serviceLinks = [
  { label: "Vinil Textil",           href: "/servicios/vinil-textil"        },
  { label: "Vinil Autoadherible",    href: "/servicios/vinil-autoadherible"  },
  { label: "Sublimación",            href: "/servicios/sublimacion"          },
  { label: "Gran Formato",           href: "/servicios/gran-formato"         },
  { label: "Bordado",                href: "/servicios/bordado"              },
  { label: "Corte Láser y CNC",      href: "/servicios/corte-laser-cnc"      },
  { label: "Impresos",               href: "/servicios/impresos"             },
  { label: "DTF y DTF UV",           href: "/servicios/dtf-dtf-uv"           },
  { label: "Letras Volumétricas",    href: "/servicios/letras-volumetricas"  },
];

const companyLinks = [
  { label: "Inicio",     href: "/"           },
  { label: "Servicios",  href: "/tienda"  },
  { label: "Trabajos",   href: "/#trabajos"  },
  { label: "Contacto",   href: "/#contacto"  },
];

export function Footer() {
  return (
    <footer id="contacto-footer" className="bg-negro border-t border-zinc/20">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-12 border-b border-zinc/20">

          {/* Brand */}
          <div className="md:col-span-1 space-y-4">
            <div>
              <p className="font-space font-bold text-base tracking-widest uppercase text-blanco">
                CORTANDO VINIL
              </p>
              <div className="h-[2px] w-full bg-acento mt-1" />
            </div>
            <p className="font-inter text-sm text-texto-muted leading-relaxed">
              Producción promocional desde 2009. CDMX.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com/cortandovinil"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-texto-muted hover:text-blanco transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://facebook.com/cortandovinil"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-texto-muted hover:text-blanco transition-colors"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-space text-xs tracking-widest uppercase text-texto-muted">
              Servicios
            </h4>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-inter text-sm text-texto-light hover:text-blanco transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="font-space text-xs tracking-widest uppercase text-texto-muted">
              Empresa
            </h4>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-inter text-sm text-texto-light hover:text-blanco transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-space text-xs tracking-widest uppercase text-texto-muted">
              Contacto
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+525571596138"
                  className="flex items-start gap-2.5 font-inter text-sm text-texto-light hover:text-blanco transition-colors"
                >
                  <Phone size={14} className="mt-0.5 shrink-0" />
                  55 7159 6138
                </a>
              </li>
              <li>
                <a
                  href="mailto:publicidad@cortandovinil.com"
                  className="flex items-start gap-2.5 font-inter text-sm text-texto-light hover:text-blanco transition-colors"
                >
                  <Mail size={14} className="mt-0.5 shrink-0" />
                  publicidad@cortandovinil.com
                </a>
              </li>
              <li>
                <a
                  href="https://maps.google.com/?q=Marcelino+Dávalos+45+Local+D+Algrarín+CDMX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2.5 font-inter text-sm text-texto-light hover:text-blanco transition-colors"
                >
                  <MapPin size={14} className="mt-0.5 shrink-0" />
                  Marcelino Dávalos 45 Local D,<br />Algrarín, CDMX
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-3 text-texto-muted text-xs font-inter">
          <p>© {new Date().getFullYear()} Cortando Vinil. Todos los derechos reservados.</p>
          <p>Hecho en CDMX 🇲🇽</p>
        </div>
      </div>
    </footer>
  );
}
