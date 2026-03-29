export default function DiscountBanner() {
  const discounts = [
    "FREE SHIPPING ON ORDERS OVER $80.",
    "30-DAY RETURNS - NO HASSLE.",
    "THIS SEASON: STATEMENT RINGS.",
    "LIMITED PIECES - GRAB YOURS.",
  ];

  const repeated = [...discounts, ...discounts];

  return (
    <div className="group relative z-21 w-full cursor-default overflow-x-hidden bg-dark py-1 text-light">
      <p className="sr-only">{discounts.join(" ")}</p>
      <div
        aria-hidden="true"
        className="group-hover:paused flex w-max animate-scroll"
      >
        <div className="flex shrink-0">
          {repeated.map((text, i) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: static array
            <span className="px-8 font-extrabold text-sm uppercase" key={i}>
              {text}
            </span>
          ))}
        </div>
        <div className="flex shrink-0">
          {repeated.map((text, i) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: static array
            <span className="px-8 font-extrabold text-sm uppercase" key={i}>
              {text}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
