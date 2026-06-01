import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { ValueProps } from "@/components/landing/ValueProps";
import { FeaturedProducts } from "@/components/landing/FeaturedProducts";
import { EventosSection } from "@/components/landing/EventosSection";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { CustomOrder } from "@/components/landing/CustomOrder";
import { ShopCTA } from "@/components/landing/ShopCTA";
import { Footer } from "@/components/landing/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <ValueProps />
      <FeaturedProducts />
      <EventosSection />
      <HowItWorks />
      <CustomOrder />
      <ShopCTA />
      <Footer />
    </>
  );
}
