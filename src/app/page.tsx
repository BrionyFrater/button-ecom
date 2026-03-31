import BestsellerSection from "@/app/components/bestseller-section";
import DiscountBanner from "@/components/discount-banner";
import Navbar from "@/components/navbar";
import HeroSection from "./components/hero-section";

export default function Home() {
  return (
    <div className="bg-primary font-sans">
      <div className="overflow-hidden">
        <DiscountBanner />
      </div>
      <Navbar />

      <main id="main-content">
        <HeroSection />
        <BestsellerSection />
      </main>
    </div>
  );
}
