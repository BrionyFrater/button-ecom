import {
  IconBasketFilled,
  IconDiamond,
  IconMoodSearch,
} from "@tabler/icons-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 flex w-full items-center justify-center border-dark border-y bg-dark text-primary">
      <div className="flex-1 self-stretch bg-primary p-3 text-dark">
        <span className="font-black text-h3">FACET</span>
      </div>
      <ul className="menu-items flex w-full flex-5 items-center justify-between gap-8 p-5 py-3">
        <li>
          <Link href={"/"}>
            <span>
              Shop <IconDiamond />
            </span>
          </Link>
        </li>
        <li>
          <Link href={"/"}>
            <span>
              Search <IconMoodSearch />
            </span>
          </Link>
        </li>
        <li>
          <Link href={"/"}>
            <span>
              Cart <IconBasketFilled />
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
