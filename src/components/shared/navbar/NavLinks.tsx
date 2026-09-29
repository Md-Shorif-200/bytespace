import Link from "next/link";

export const navLinks = [
  { name: "Home", href: "/" },
  { name: "Courses", href: "/courses" },
  { name: "Creators", href: "/creators" },
];

const NavLinks = () => {
  return (
    <ul className="hidden items-center gap-6 md:flex">
      {navLinks.map((link) => (
        <li key={link.name}>
          <Link
            href={link.href}
            className="inline-block font-satoshi text-[16px] font-medium text-muted transition duration-300 hover:-translate-y-1 hover:text-white"
          >
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
