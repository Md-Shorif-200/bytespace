import Image from "next/image";
import Link from "next/link";

const auth_img = "/image/auth/auth_img.png";
const auth_logo = "/image/auth/auth_page_logo.svg";

const AuthImageSection = () => {
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
      <h2 className="headings_xs text-[#F5F5F6] mt-8 mb-4 ">Sign up and come in</h2>
      <p className="body_l text-[#F5F5F6] mb-14 ">
        The registration process is straightforward, uncomplicated, and
        efficient, allowing users to sign up quickly, easily, and at no cost
      </p>

      {/* image with cards */}
      <div className="">
        <Image
          src={auth_img}
          alt="courses preview"
          width={500}
          height={585}
          className="h-auto w-full "
          priority
        />
      </div>
    </div>
  );
};

export default AuthImageSection;
