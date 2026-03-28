import {
  IconBasketFilled,
  IconDiamond,
  IconMoodSearch,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-20 flex w-full items-center justify-center border-dark border-y bg-primary text-dark">
      <div className="flex flex-1 justify-center self-stretch border-dark border-r bg-primary p-3 text-dark">
        <Image
          alt="FACET LOGO"
          className="select-none object-cover"
          draggable={false}
          height={40}
          src="/logo.png"
          width={40}
        />
      </div>
      <ul className="menu-items flex w-full flex-5 items-center justify-between gap-8 p-5 py-3 font-normal text-h6 uppercase">
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
