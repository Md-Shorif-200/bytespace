"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const auth_img = "/image/auth/auth_img.webp";
const auth_logo = "/image/auth/auth_page_logo.svg";

const AuthImageSection = () => {
  const pathname = usePathname();
  const isLoginPage = pathname === "/auth/login";

  const title = isLoginPage ? "Sign in with ease" : "Sign up and come in";
  const description = isLoginPage
    ? "Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge."
    : "The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost";

  return (
    <div className="p-8 text-white md:p-12">
      <Link href="/" className="">
        <Image
          src={auth_logo}
          alt="ByteSpace logo"
          width={28}
          height={31}
          className="h-[31px] w-[28px]"
        />
      </Link>

      {/* title and text */}
      <h2 className="headings_xs mt-8 mb-4 text-[#F5F5F6]">{title}</h2>
      <p className="body_l mb-14 text-[#F5F5F6]">{description}</p>

      {/* image with cards */}
      <div className="">
        <Image
          src={auth_img}
          alt="courses preview"
          width={500}
          height={585}
          className="h-auto w-full"
          priority
        />
      </div>
    </div>
  );
};

export default AuthImageSection;
