import { Navbar } from "@/components/landing/Navbar";
import { ShopClient } from "@/components/shop/ShopClient";
import { Footer } from "@/components/landing/Footer";

export default function ShopPage() {
  return (
    <>
      <Navbar />
      <ShopClient />
      <Footer />
    </>
  );
}
