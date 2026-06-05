import type { Metadata } from "next";
import { Archivo_Black, Figtree } from "next/font/google";
import "./globals.css";
import { FloatingButtons } from "@/components/landing/FloatingButtons";

const archivoBlack = Archivo_Black({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-archivo",
  display: "swap",
});

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-figtree",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ??
      (process.env.VERCEL_URL
        ? `https://${process.env.VERCEL_URL}`
        : "http://localhost:3000")
  ),
  title: {
    template: "%s | Cortando Vinil",
    default: "Impresión y Corte Profesional | Cortando Vinil",
  },
  description:
    "Sublimado, corte láser, gran formato, impresos y vinil textil. Más de 15 años produciendo para negocios, emprendedores y eventos en México.",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${archivoBlack.variable} ${figtree.variable} font-figtree antialiased`}>
        {children}
        <FloatingButtons />
      </body>
    </html>
  );
}
