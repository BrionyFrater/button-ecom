"use client";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";

const fadeUp = {
  hidden: { y: "100%", opacity: 0 },
  visible: (delay: number) => ({
    y: "0%",
    opacity: 1,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const, delay },
  }),
};

export default function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll();
  const overlayOpacity = useTransform(scrollYProgress, [0.3, 0.7], [0, 0.5]);
  const [loaded, setLoaded] = useState({ logo: false, hero: false });
  const allLoaded = loaded.logo && loaded.hero;

  return (
    <section className="sticky top-0 h-screen overflow-hidden" ref={ref}>
      {/* Loading cover */}
      <motion.div
        animate={{ opacity: allLoaded ? 0 : 1 }}
        className="pointer-events-none absolute inset-0 z-50 bg-primary"
        transition={{ duration: 0.4 }}
      />

      {/* Logo bar */}
      <div className="pointer-events-none relative z-4 flex w-full select-none justify-center bg-secondary py-3 2xl:z-0 2xl:justify-start">
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <Image
            alt=""
            className="object-cover"
            draggable={false}
            height={600}
            onLoad={() => setLoaded((p) => ({ ...p, logo: true }))}
            src="/logo-text-alt.png"
            width={600}
          />
        </motion.div>
      </div>

      {/* Background image */}
      <motion.div
        animate={{ scale: 1 }}
        className="pointer-events-none absolute inset-0"
        initial={{ scale: 1.08 }}
        transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] as const }}
      >
        <Image
          alt="Man wearing bold streetwear rings on each finger"
          className="h-full w-full select-none object-cover object-top"
          draggable={false}
          height={1080}
          onLoad={() => setLoaded((p) => ({ ...p, hero: true }))}
          src="/hero-img-9.png"
          width={1920}
        />
      </motion.div>

      {/* Scroll overlay */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-3 bg-black"
        style={{ opacity: overlayOpacity }}
      />

      {/* Text content */}
      <div className="relative z-4 flex w-full flex-col gap-section-md px-page-x">
        <div className="mt-section-xl overflow-hidden">
          <motion.h1
            animate="visible"
            className="max-w-xl font-black text-display text-light uppercase"
            custom={0.2}
            initial="hidden"
            variants={fadeUp}
          >
            Jewelry to match your energy
          </motion.h1>
        </div>

        <div className="overflow-hidden">
          <motion.h5
            animate="visible"
            className="max-w-lg font-black text-h5 text-light"
            custom={0.45}
            initial="hidden"
            variants={fadeUp}
          >
            Choose from our bold ready-to-wear rings craft your own.
          </motion.h5>
        </div>

        <div className="self-end overflow-hidden">
          <motion.div
            animate="visible"
            custom={0.65}
            initial="hidden"
            variants={fadeUp}
          >
            <Button
              asChild
              className="group bg-accent font-bold text-h5 text-light"
            >
              <Link href={"/"}>
                <span>Shop Rings</span>
                <DotLottieReact
                  autoplay
                  className="group-hover:filter-[brightness(0.12)_saturate(0.2)] size-10 transition-all"
                  loop
                  src="/diamond-light.lottie"
                />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
