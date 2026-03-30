"use client";

import { Star, StarHalf } from "lucide-react";
import { useInView } from "motion/react";
import Image from "next/image";
import { useRef } from "react";
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

  return (
    <div className="relative flex w-fit flex-col gap-5 overflow-hidden border border-dark pt-15 font-bold text-sm uppercase">
      <div className="p-5" ref={ref}>
        <Image
          alt={product.name}
          className={cn(
            "select-none object-cover transition-all",
            inView && cn("animation-duration-[20s] animate-spin", className)
          )}
          draggable={false}
          height={400}
          src={product.image}
          width={400}
        />
      </div>

      <div className="mt-section-md border-dark border-t p-3 py-8">
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
    </div>
  );
}
