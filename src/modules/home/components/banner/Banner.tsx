"use client";
import Image from "next/image";
import { useState } from "react";
import Container from "@/components/common/Container";
import CustomInput from "@/components/common/CustomInput";
import CustomPrimaryButton from "@/components/common/CustomPrimaryButton";
import UiUxCard from "./cards/UiUxCard";
import HappyStudentsCard from "./cards/HappyStudentsCard";
import LearningProgressCard from "./cards/LearningProgressCard";

// Banner background and hero images
const ractanguler_shape_img = "/image/banner/rectanguler_shape.webp";
const rounded_shape_img = "/image/banner/rounded_shape.webp";
const men_img = "/image/banner/men_img.webp";

const Banner = () => {
  const [rectLoaded, setRectLoaded] = useState(false);
  const [roundedLoaded, setRoundedLoaded] = useState(false);
  const [menLoaded, setMenLoaded] = useState(false);
  return (
    <section className="banner-bg relative h-[780px] sm:h-[904px] overflow-hidden">
      <Image
        src={ractanguler_shape_img}
        alt=""
        width={1440}
        height={804}
        onLoadingComplete={() => setRectLoaded(true)}
        className={`pointer-events-none absolute xl:z-10 inset-x-0 bottom-0 h-auto w-full transition-opacity duration-700 ease-out transform ${rectLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        priority
      />

      <Container className="relative z-20 pt-24 sm:pt-30 lg:pt-35 text-center">
        {/* Main hero text */}
        <h1 className=" heading_l  max-w-[935px] mx-auto   text-[#FFFFFF]">
          Get Access to Hundreds Courses Available
        </h1>

        <p className=" body_l  mt-4 max-w-[819px] mx-auto  text-[#E5E6E8] ">
          Unlock your creativity, gain valuable knowledge, and grow your
          business with our wide range of courses.
        </p>

        <div className=" mt-8 flex w-full max-w-[580px] mx-auto flex-col items-center gap-3 min-[450px]:flex-row">
          {/* Search field and button */}
          <div className="w-full min-w-0 flex-1">
            <CustomInput />
          </div>
          <CustomPrimaryButton text="Search" href="/courses" />
        </div>
      </Container>

      <div className="absolute bottom-0 left-1/2 z-0 w-full max-w-[1149px] -translate-x-1/2">
        {/* Hero illustration and floating cards */}
        <Image
          src={rounded_shape_img}
          alt=""
          width={1149}
          height={430}
          onLoadingComplete={() => setRoundedLoaded(true)}
          className={`pointer-events-none absolute bottom-0 left-1/2 h-auto w-[90%] -translate-x-1/2 transition-opacity duration-700 ease-out transform ${roundedLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          priority
        />

        <Image
          src={men_img}
          alt="Student with laptop"
          width={630}
          height={541}
          onLoadingComplete={() => setMenLoaded(true)}
          className={`relative z-10 left-[5%] min-[700px]:left-[10%] md:left-[15%] lg:left-[25%] h-auto transition-opacity duration-700 ease-out transform ${menLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          priority
        />

        <div className="absolute top-[24%] lg:top-[22%] left-[10%] min-[700px]:left-[15%] md:left-[18%] lg:left-[22%]  z-20 hidden sm:block">
          <UiUxCard />
        </div>

        <div className="absolute bottom-[12%] lg:bottom-[9%] left-[2%] lg:left-[17%] z-20 hidden sm:block">
          <HappyStudentsCard />
        </div>

        <div className="absolute top-[33%] lg:top-[28%]  xl:top-[26%] right-[8%] min-[650px]:right-[12%] min-[700px]:right-[10%] min-[800px]:right-[12%] min-[850px]:right-[18%] min-[900px]:right-[20%] min-[950px]:right-[25%] lg:right-[21%]  z-20 hidden sm:block">
          <LearningProgressCard />
        </div>
      </div>
    </section>
  );
};

export default Banner;
