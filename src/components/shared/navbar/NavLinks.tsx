import Link from "next/link";

const links = [
  { name: "Home", href: "/" },
  { name: "Courses", href: "/courses" },
  { name: "Creators", href: "/creators" },
];

const NavLinks = () => {
  return (
    <ul className="hidden items-center gap-6 md:flex ">
      {links.map((link) => (
        <li key={link.name}>
          <Link
            href={link.href}
            className="inline-block font-satoshi font-medium text-[16px] text-muted transition duration-300 hover:-translate-y-1 hover:text-white"
          >
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;