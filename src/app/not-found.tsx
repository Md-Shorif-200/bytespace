import Image from "next/image";
import Link from "next/link";

const notfount_img = "/image/404-not-found/404.webp";

const NotFound = () => {
  return (
    <section className="flex min-h-screen items-center justify-center bg-accent px-4 py-10 bg-[linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)] bg-[size:48px_48px]">
      <div className="flex flex-col items-center text-center">
        {/* big 404 image */}
        <Image
          src={notfount_img}
          alt="404"
          width={560}
          height={420}
          className="h-auto w-[260px] select-none animate-[float_5s_ease-in-out_infinite] sm:w-[380px] md:w-[480px] xl:w-[560px]"
        />

        {/* heading (overlaps the bottom of the 404 image) */}
        <h1 className="-mt-6 max-w-[300px] animate-[fadeUp_0.7s_ease-out] text-[28px] font-semibold leading-[1.15] text-white sm:max-w-[520px] sm:text-[40px] md:max-w-[640px] md:text-[48px] xl:max-w-[750px] xl:text-[56px] xl:leading-[1.1]">
          The page you are looking for doesn&apos;t exist
        </h1>

        {/* description */}
        <p className="mt-6 animate-[fadeUp_0.9s_ease-out] text-[12px] text-[#E5E6E8] md:text-[14px]">
          Try to use a correct url or go back to homepage to start again
        </p>

        {/* button */}
        <Link
          href="/"
          className="mt-5 flex h-[40px] items-center justify-center rounded-[24px] bg-primary px-6 text-[14px] text-dark transition duration-300 hover:-translate-y-0.5 hover:opacity-90 animate-[fadeUp_1.1s_ease-out]"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
