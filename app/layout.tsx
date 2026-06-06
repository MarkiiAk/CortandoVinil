import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import { FloatingButtons } from "@/components/landing/FloatingButtons";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
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
    default: "Producción Gráfica e Industrial | Cortando Vinil",
  },
  description:
    "Artículos promocionales, publicidad y personalización con tecnología industrial. Sublimado, vinil textil, corte láser, gran formato, bordado, DTF, impresos y más. CDMX, +15 años.",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    images: [{ url: "/logovinil.jpg", alt: "Cortando Vinil" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${spaceGrotesk.variable} ${inter.variable} font-inter bg-negro text-blanco antialiased`}>
        {children}
        <FloatingButtons />
      </body>
    </html>
  );
}
