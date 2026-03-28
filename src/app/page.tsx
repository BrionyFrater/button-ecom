import Image from "next/image";
import DiscountBanner from "@/components/discount-banner";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <div className="relative h-screen overflow-hidden bg-primary font-sans">
      <DiscountBanner />
      <Navbar />

      <main className="px-page-x py-page-y">
        <section>
          <div className="pointer-events-none top-20 left-0 select-none bg-accent p-1">
            <Image
              alt=""
              className="relative z-10 object-cover"
              draggable={false}
              height={600}
              src="/logo-text.png"
              width={600}
            />
          </div>
          <div className="relative z-2">
            <h1 className="mt-section-xl max-w-xl font-black text-dark text-display uppercase">
              <span className="bg-accent">Jewelry to match your energy</span>
            </h1>
            <h5 className="mt-section-sm max-w-xl font-black text-dark text-h5">
              <span className="bg-accent px-2 py-1">
                Choose from our bold ready-to-wear rings
              </span>
              <span className="mt-2 block w-fit bg-accent px-2 py-1">
                or craft your own.
              </span>
            </h5>
          </div>

          <Image
            alt="Man wearing bold streetwear rings on each finger"
            className="pointer-events-none absolute top-0 mt-section-md h-full w-full select-none object-cover object-top"
            draggable={false}
            height={1080}
            src="/hero-img-1.1.png"
            width={1920}
          />
          {/* <Image
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute top-0 mt-section-md w-full animate-crossfade select-none object-cover"
            draggable={false}
            height={1080}
            src="/hero-img-2.png"
            width={1920}
          /> */}
        </section>
      </main>
    </div>
  );
}
