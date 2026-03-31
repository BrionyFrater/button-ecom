"use client";

import { Star, StarHalf } from "lucide-react";
import { motion, useAnimate, useInView } from "motion/react";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { cn, formatNumber } from "@/lib/utils";

interface BestsellerProps {
  className?: string;
  product: {
    name: string;
    price: number;
    rating: number;
    reviewCount: number;
    image: string;
  };
}

function StarRating({ rating }: { rating: number }) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  const empty = 5 - full - (half ? 1 : 0);

  return (
    <>
      <div className="sr-only">Rated {rating} out of 5</div>
      <div aria-hidden className="flex items-center gap-1">
        {Array.from({ length: full }).map((_, i) => (
          // biome-ignore lint/suspicious/noArrayIndexKey: static star rating
          <Star className="size-4" fill="currentColor" key={`full-${i}`} />
        ))}
        {half && <StarHalf className="size-4" fill="currentColor" />}
        {Array.from({ length: empty }).map((_, i) => (
          // biome-ignore lint/suspicious/noArrayIndexKey: static star rating
          <Star className="size-4 opacity-70" key={`empty-${i}`} />
        ))}
      </div>
    </>
  );
}

export default function Bestseller({ product, className }: BestsellerProps) {
  const ref = useRef(null);
  const inView = useInView(ref);
  const [scope, animate] = useAnimate();

  useEffect(() => {
    if (inView) {
      animate(
        scope.current,
        { rotate: 360 },
        { duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }
      );
    } else {
      animate(scope.current, { rotate: 0 }, { duration: 0.1 });
    }
  }, [inView, animate, scope]);

  const handleHoverStart = () => {
    animate(
      scope.current,
      { rotate: 0 },
      { duration: 0.4, ease: [0.16, 1, 0.3, 1] as const }
    );
  };

  const handleHoverEnd = () => {
    animate(
      scope.current,
      { rotate: 360 },
      { duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }
    );
  };

  return (
    <motion.div
      className="group relative flex cursor-default flex-col gap-5 overflow-hidden border border-dark pt-15 font-bold text-sm uppercase hover:cursor-pointer"
      onHoverEnd={handleHoverEnd}
      onHoverStart={handleHoverStart}
    >
      <div className="self-center p-5" ref={ref}>
        <motion.div className={cn("select-none", className)} ref={scope}>
          <Image
            alt={product.name}
            className="select-none object-cover"
            draggable={false}
            height={400}
            src={product.image}
            width={400}
          />
        </motion.div>
      </div>

      <div className="mt-section-md border-dark border-t bg-light p-3 py-8 text-dark transition-colors duration-500 group-hover:bg-dark group-hover:text-light">
        <p>{product.name}</p>
        <div className="flex flex-wrap items-center gap-1">
          <StarRating rating={product.rating} />
          <p className="font-normal">
            <span className="sr-only">{product.reviewCount} reviews</span>
            <span aria-hidden>({formatNumber(product.reviewCount)})</span>
          </p>
        </div>
        <p className="font-black">${formatNumber(product.price)} JMD</p>
      </div>
    </motion.div>
  );
}
