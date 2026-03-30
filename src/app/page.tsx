import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Image from "next/image";
import Link from "next/link";
import Bestseller from "@/app/components/bestseller";
import DiscountBanner from "@/components/discount-banner";
import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="bg-primary font-sans">
      <div className="overflow-hidden">
        <DiscountBanner />
      </div>
      <Navbar />

      <main id="main-content">
        <section className="relative h-screen overflow-hidden">
          <div className="pointer-events-none relative z-4 flex w-full select-none justify-center bg-light py-3 2xl:z-0 2xl:justify-start">
            <Image
              alt=""
              className="object-cover"
              draggable={false}
              height={600}
              src="/logo-text-alt.png"
              width={600}
            />
          </div>
          <Image
            alt="Man wearing bold streetwear rings on each finger"
            className="pointer-events-none absolute inset-0 h-full w-full select-none object-cover object-top"
            draggable={false}
            height={1080}
            src="/hero-img-9.png"
            width={1920}
          />
          <div className="relative z-2 flex w-full flex-col gap-section-md px-page-x">
            <h1 className="mt-section-xl max-w-xl font-black text-display text-light uppercase">
              Jewelry to match your energy
            </h1>
            <h5 className="max-w-lg font-black text-h5 text-light">
              Choose from our bold ready-to-wear rings craft your own.
            </h5>
            <Button
              asChild
              className="group border-light bg-accent font-bold text-h5 text-light"
            >
              <Link className="self-end" href={"/"}>
                <span>Shop Rings</span>
                <DotLottieReact
                  autoplay
                  className="group-hover:filter-[brightness(0.12)_saturate(0.2)] size-10 transition-all"
                  loop
                  src="/diamond-light.lottie"
                />
              </Link>
            </Button>
          </div>
        </section>

        <section className="bg-light px-page-x py-page-y">
          <hr />
          <div className="flex justify-between gap-2 leading-5">
            <h4>
              <span className="font-black uppercase">Bestsellers</span>
            </h4>
            <h4 className="text-right">
              <span className="font-black uppercase">
                What everyone's <br /> reaching for.
              </span>
            </h4>
          </div>

          <div className="mt-section-lg flex flex-wrap items-center justify-center gap-4">
            <Bestseller
              product={{
                name: "Shooting Star Ring",
                price: 4000,
                rating: 5,
                reviewCount: 40,
                image: "/ShootingStarRing01.png",
              }}
            />
            <Bestseller
              className="[animation-delay:0.5s]"
              product={{
                name: "8 Ball Rings",
                price: 500,
                rating: 4.78,
                reviewCount: 40,
                image: "/8BallRing01.png",
              }}
            />
            <Bestseller
              className="[animation-delay:1s]"
              product={{
                name: "Flame Ring",
                price: 5500,
                rating: 3.5,
                reviewCount: 40,
                image: "/FlameRing01.png",
              }}
            />
          </div>
        </section>
      </main>
    </div>
  );
}
