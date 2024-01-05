"use client";

import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";

type NavButtonProps = {
  href: string;
  children: React.ReactNode;
  active: boolean;
};

const NavButton = ({ href, children, active }: NavButtonProps) => {
  const classes = clsx(
    "text-xs font-bold text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md uppercase",
    { "bg-slate-100 hover:bg-slate-200": active }
  );
  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
};

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="bg-white shadow-sm fixed w-screen">
      <nav
        className="mx-auto flex max-w-7xl items-center p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              className="h-8 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt=""
            />
          </a>
        </div>
        <div className="flex gap-x-12 justify-center grow">
          <NavButton href="/tinder" active={pathname === "/tinder"}>
            Offers
          </NavButton>
          <NavButton href="/" active={pathname === "/"}>
            Interests
          </NavButton>
          <NavButton href="/matches" active={pathname === "/matches"}>
            Matches
          </NavButton>
        </div>
      </nav>
    </header>
  );
};

export default Header;
