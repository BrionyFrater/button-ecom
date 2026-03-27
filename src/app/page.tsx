import DiscountBanner from "@/components/discount-banner";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <div className="bg-primary font-sans">
      <Navbar />
      <DiscountBanner />
      <main className="flex min-h-screen w-full items-center justify-center px-16 py-32">
        <p className="sr-only">Facet</p>
        <h1 className="text-center font-black text-dark text-display uppercase">
          Facet
        </h1>
      </main>
    </div>
  );
}
