import Image from "next/image";
import Container from "@/components/common/Container";
import CustomInput from "@/components/common/CustomInput";
import CustomPrimaryButton from "@/components/common/CustomPrimaryButton";
import UiUxCard from "./cards/UiUxCard";
import HappyStudentsCard from "./cards/HappyStudentsCard";
import LearningProgressCard from "./cards/LearningProgressCard";

const ractanguler_shape_img = "/image/banner/rectanguler_shape.png";
const rounded_shape_img = "/image/banner/rounded_shape.png";
const men_img = "/image/banner/men_img.png";

const Banner = () => {
  return (
    <section className="banner-bg relative h-[904px] overflow-hidden">
      <Image
        src={ractanguler_shape_img}
        alt=""
        width={1440}
        height={804}
        className="pointer-events-none absolute z-10 inset-x-0 bottom-0 h-auto w-full"
        priority
      />

      <Container className="relative z-20 pt-[140px] text-center">
        <h1 className="mx-auto max-w-[935px] font-poppins text-[72px] font-bold leading-tight text-[#FFFFFF]">
          Get Access to Hundreds Courses Available
        </h1>

        <p className="mx-auto mt-4 max-w-[819px] font-satoshi  leading-relaxed text-[#E5E6E8] text-[14px">
          Unlock your creativity, gain valuable knowledge, and grow your business
          with our wide range of courses.
        </p>

        <div className="mx-auto mt-8 flex w-full max-w-[580px] flex-col items-center gap-3 sm:flex-row">
          <div className="w-full min-w-0 flex-1">
            <CustomInput />
          </div>
          <CustomPrimaryButton text="Search" href="/courses" />
        </div>
      </Container>

      <div className="absolute bottom-0 left-1/2 z-0 w-full max-w-[1149px] -translate-x-1/2">
        <Image
          src={rounded_shape_img}
          alt=""
          width={1149}
          height={430}
          className="pointer-events-none absolute bottom-0 left-1/2 h-auto w-[90%] -translate-x-1/2"
          priority
        />

        <Image
          src={men_img}
          alt="Student with laptop"
          width={630}
          height={541}
          className="relative z-10 left-[25%] h-auto "
          priority
        />

        <div className="absolute top-[22%] left-[22%] z-20 hidden md:block">
          <UiUxCard />
        </div>

        <div className="absolute bottom-[9%] left-[17%] z-20 hidden md:block">
          <HappyStudentsCard />
        </div>

        <div className="absolute top-[26%] right-[21%] z-20 hidden md:block">
          <LearningProgressCard />
        </div>
      </div>
    </section>
  );
};

export default Banner;
