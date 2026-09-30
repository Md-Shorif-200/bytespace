"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Container from "@/components/common/Container";
import Sheet from "@/components/common/Sheet";
import NavLinks, { navLinks } from "./NavLinks";

// Brand logo and cart icon assets
const navLogo = "/image/navbar/logo.svg";
const navShoppingBagIcon = "/image/navbar/shopping-bag.svg";

const Navbar = () => {
  // Controls the mobile menu sheet visibility
  const [isOpen, setIsOpen] = useState(false);

  // Close the mobile menu
  const closeSheet = () => setIsOpen(false);

  return (
    <nav className="h-[120px]">
      <Container className="h-full">
        <div className="flex h-full items-center justify-between">
          {/* Brand logo */}
          <Link href="/">
            <Image
              src={navLogo}
              alt="ByteSpace logo"
              width={171}
              height={37}
              className="h-8 w-auto"
              priority
            />
          </Link>

          <NavLinks />

          {/* Desktop navigation actions */}
          <div className="hidden items-center gap-6 text-[16px] md:flex">
            <Link href="/sign-in" className="text-muted hover:text-white">
              Sign In
            </Link>
            <Link href="/join" className="text-muted hover:text-white">
              Join Us
            </Link>
            <Link href="/cart" aria-label="Cart">
              <Image
                src={navShoppingBagIcon}
                alt="Shopping bag"
                width={24}
                height={24}
                className="h-5 w-5"
              />
            </Link>
          </div>

          {/* Mobile menu trigger */}
          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setIsOpen(true)}
            className="text-white md:hidden"
          >
            <Menu size={28} />
          </button>
        </div>
      </Container>

      <Sheet isOpen={isOpen} onClose={closeSheet}>
        {/* Mobile menu header */}
        <div className="flex items-center justify-between border-b border-white/20 px-5 py-4">
          <p className="font-satoshi text-[18px] font-bold text-white">Menu</p>
          <button
            type="button"
            aria-label="Close menu"
            onClick={closeSheet}
            className="text-white"
          >
            <X size={24} />
          </button>
        </div>

        {/* Navigation links in the mobile menu */}
        <ul className="flex flex-col gap-1 p-4">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                onClick={closeSheet}
                className="block rounded-lg px-3 py-3 font-satoshi text-[16px] font-medium text-white hover:bg-white/10"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Account and cart actions */}
        <div className="mt-auto border-t border-white/20 p-4">
          <Link
            href="/sign-in"
            onClick={closeSheet}
            className="block rounded-lg px-3 py-3 font-satoshi text-[16px] font-medium text-white hover:bg-white/10"
          >
            Sign In
          </Link>
          <Link
            href="/join"
            onClick={closeSheet}
            className="block rounded-lg px-3 py-3 font-satoshi text-[16px] font-medium text-white hover:bg-white/10"
          >
            Join Us
          </Link>
          <Link
            href="/cart"
            onClick={closeSheet}
            aria-label="Cart"
            className="flex items-center gap-3 rounded-lg px-3 py-3 hover:bg-white/10"
          >
            <Image
              src={navShoppingBagIcon}
              alt="Shopping bag"
              width={24}
              height={24}
              className="h-5 w-5"
            />
            <span className="font-satoshi text-[16px] font-medium text-white">
              Cart
            </span>
          </Link>
        </div>
      </Sheet>
    </nav>
  );
};

export default Navbar;
