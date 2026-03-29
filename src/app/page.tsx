import Image from "next/image";
import DiscountBanner from "@/components/discount-banner";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-primary font-sans">
      <DiscountBanner />
      <Navbar />

      <main className="">
        <section>
          <div className="pointer-events-none w-full select-none bg-secondary p-5">
            <Image
              alt=""
              className="object-cover"
              draggable={false}
              height={600}
              src="/logo-text-alt.png"
              width={600}
            />
          </div>
          <div className="relative z-2 px-page-x">
            <h1 className="mt-section-xl max-w-xl font-black text-display text-light uppercase">
              Jewelry to match your energy
            </h1>
            <h5 className="mt-section-sm max-w-lg font-black text-h5 text-light">
              Choose from our bold ready-to-wear rings craft your own.
            </h5>
          </div>

          <Image
            alt="Man wearing bold streetwear rings on each finger"
            className="pointer-events-none absolute top-0 mt-section-md h-full w-full select-none object-cover object-top"
            draggable={false}
            height={1080}
            src="/hero-img-9.png"
            width={1920}
          />
        </section>
      </main>
    </div>
  );
}
