import Container from "@/components/common/Container";
import CustomInput from "@/components/common/CustomInput";
import CustomPrimaryButton from "@/components/common/CustomPrimaryButton";
import Image from "next/image";
import Link from "next/link";

const logo = "/image/footer/footer_logo.svg";

const courseLinks = [
  { text: "Featured Courses", href: "/courses" },
  { text: "Featured Categories", href: "/categories" },
  { text: "Business", href: "/categories/business" },
  { text: "IT", href: "/categories/it" },
  { text: "Design", href: "/categories/design" },
];

const categoryLinks = [
  { text: "Development", href: "/categories/development" },
  { text: "Marketing", href: "/categories/marketing" },
  { text: "Photography", href: "/categories/photography" },
  { text: "Finance", href: "/categories/finance" },
  { text: "Sport", href: "/categories/sport" },
];

const companyLinks = [
  { text: "Become a Creator", href: "/creator/register" },
  { text: "Affiliate Program", href: "/affiliate" },
  { text: "Contact", href: "/contact" },
  { text: "Help", href: "/help" },
  { text: "About", href: "/about" },
];

const legalLinks = [
  { text: "Privacy Policy", href: "/privacy-policy" },
  { text: "Terms of Service", href: "/terms" },
  { text: "Cookies Settings", href: "/cookies" },
];

const LinkColumn = ({ links }: { links: { text: string; href: string }[] }) => {
  return (
    <ul className="flex flex-col gap-[16px]">
      {links.map((link) => (
        <li key={link.text}>
          <Link
            href={link.href}
            className=" body_s text-[#242528] transition hover:opacity-60"
          >
            {link.text}
          </Link>
        </li>
      ))}
    </ul>
  );
};

const Footer = () => {
  return (
    <footer className="w-full bg-white border-t border-gray-100 shadow-xl pt-14">
      <Container>
        {/* main */}
        <Image src={logo} alt="ByteSpace" width={171} height={37} />
        <div className="grid grid-cols-1  gap-[130px] md:grid-cols-2 mt-6">
          {/* left */}
          <div>
            <p className=" body_s text-[#242528]">
              Stay Up to date with our latest features and releases by joining
              our newsletter.
            </p>

            {/* form */}
            <div className="mt-6 flex items-center gap-5">
              <CustomInput
                type="email"
                placeholder="Enter your email"
                width="max-w-[376px]"
                showIcon={false}
                border="border border-[#D9D9DD]"
              />
              <CustomPrimaryButton text="Search" href="#" />
            </div>

            <p className="mt-6 body_xs text-[#242528]">
              By subscribing, you agree to our Privacy Policy and consent to
              receive updates from our company.
            </p>
          </div>

          {/* links */}
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            <LinkColumn links={courseLinks} />
            <LinkColumn links={categoryLinks} />
            <LinkColumn links={companyLinks} />
          </div>
        </div>

        {/* footer meta */}
        <div className="mt-[100px] flex flex-col gap-4 border-t border-[#E5E7EB] py-6 md:flex-row md:items-center md:justify-between">
          <p className="body_xs text-[#242528]">
            @ 2023 ByteSpace. All rights reserved.
          </p>

          <div className="flex flex-wrap gap-6">
            {legalLinks.map((link) => (
              <Link
                key={link.text}
                href={link.href}
                className="body_xs text-[#242528] transition hover:opacity-60"
              >
                {link.text}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
