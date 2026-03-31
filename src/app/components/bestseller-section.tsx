"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import Bestseller from "./bestseller";

const ease = [0.16, 1, 0.3, 1] as const;

export default function BestsellerSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start start"],
  });

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  const clipPath = useTransform(
    scrollYProgress,
    [0.6, 1],
    [
      "polygon(0 0%, 100% 0%, 100% 100%, 0% 100%)",
      isMobile
        ? "polygon(0 2%, 100% 0%, 100% 100%, 0% 100%)"
        : "polygon(0 10%, 100% 0%, 100% 100%, 0% 100%)",
    ]
  );

  return (
    <motion.section
      className="relative z-10 bg-light px-page-x pt-section-xl pb-page-y shadow-2xl"
      ref={ref}
      style={{ clipPath }}
    >
      <hr />
      <div className="mt-2 flex justify-between gap-2 leading-5">
        <h4>
          <span className="font-black uppercase">Bestsellers</span>
        </h4>
        <h4 className="text-right">
          <span className="font-black uppercase">
            What everyone's <br /> reaching for.
          </span>
        </h4>
      </div>

      <div className="bestseller-grid mt-section-lg grid gap-10">
        <div className="bestseller-grid-a flex flex-col gap-10">
          <Bestseller
            product={{
              name: "Shooting Star Ring",
              price: 4000,
              rating: 5,
              reviewCount: 321,
              image: "/ShootingStarRing01.png",
            }}
          />
          <motion.p
            className="font-black text-primary uppercase"
            initial={{ x: -40, opacity: 0 }}
            transition={{ duration: 0.7, ease }}
            viewport={{ once: true }}
            whileInView={{ x: 0, opacity: 1 }}
          >
            <span>Made from</span>
            <br />
            <span>premium silver alloys</span>
            <br />
            <span>with a lasting finish.</span>
          </motion.p>
        </div>

        <div className="bestseller-grid-b flex items-start">
          <motion.h2
            className="px-1 font-black text-h2 uppercase leading-16"
            initial={{ y: -100, opacity: 0 }}
            transition={{ duration: 1, ease }}
            viewport={{ once: true, amount: 0.7 }}
            whileInView={{ y: 0, opacity: 1 }}
          >
            <span className="bg-secondary box-decoration-clone p-1">
              Our most popular
            </span>
            <br />
            <span className="bg-secondary box-decoration-clone p-1">
              rings, loved for their style and quality.
            </span>
          </motion.h2>
        </div>

        <div className="bestseller-grid-c">
          <Bestseller
            className="[animation-delay:0.5s]"
            product={{
              name: "8 Ball Ring",
              price: 5500,
              rating: 4.78,
              reviewCount: 232,
              image: "/8BallRing01.png",
            }}
          />
        </div>

        <div className="bestseller-grid-d flex flex-col gap-10">
          <Bestseller
            className="[animation-delay:1s]"
            product={{
              name: "Flame Ring",
              price: 5500,
              rating: 4.7,
              reviewCount: 129,
              image: "/FlameRing01.png",
            }}
          />
          <motion.p
            className="text-right font-black text-primary uppercase"
            initial={{ x: 40, opacity: 0 }}
            transition={{ duration: 0.7, ease }}
            viewport={{ once: true }}
            whileInView={{ x: 0, opacity: 1 }}
          >
            <span>Designed to be</span>
            <br />
            <span>worn daily, built</span>
            <br />
            <span>to last a lifetime.</span>
          </motion.p>
        </div>
      </div>
    </motion.section>
  );
}
