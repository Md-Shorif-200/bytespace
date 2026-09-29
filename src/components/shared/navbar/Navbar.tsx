import Image from "next/image";
import Link from "next/link";
import Container from "@/components/common/Container";
import NavLinks from "./NavLinks";

const navLogo = "/image/navbar/logo.svg";
const navShoppingBagIcon = "/image/navbar/shopping-bag.svg";

const Navbar = () => {
  return (
    <nav className="h-[120px] bg-[#0038E6] text-white">
      <Container className="h-full">
        <div className="flex h-full items-center justify-between">
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

          <div className="flex items-center gap-6 text-[16px]">
            <Link href="/sign-in" className="text-muted hover:text-white">
              Sign In
            </Link>
            <Link href="/join" className="text-muted hover:text-white">
              Join Us
            </Link>

            <button aria-label="Cart">
              <Image
                src={navShoppingBagIcon}
                alt="Shopping bag"
                width={24}
                height={24}
                className="h-5 w-5"
              />
            </button>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;