import CustomPrimaryButton from "@/components/common/CustomPrimaryButton";
import Image from "next/image";


const section_banner = "/image/join-as-creator/section_banner_img.png";

const JoinAsCreator = () => {
  return (
    <section className="relative isolate flex  w-full h-[488px] items-center justify-center overflow-hidden bg-accent">
      {/* Background image (blue grid + 3D shapes) */}
      <Image
        src={section_banner}
        alt=""
        fill
        priority={false}
        sizes="100vw"
        className="-z-10 object-cover object-center"
      />

      <div className=" max-w-[964px] mx-auto  flex flex-col items-center text-center">
        <h2 className="heading_m text-white">
          Unlock Your Potential as a
          <br/> Creator with ByteSpace
        </h2>

        <p className="body_l text-[#F5F5F6] my-8">
          Experience the collaboration of numerous creators and an expanding
          selection of courses. Register now and become a part of a community
          comprising over 10,000 local and international creators. Utilize our
          Course Editor, and showcase your expertise by publishing your finest
          course on the ByteSpace Course Library.
        </p>

        <div className="">
          <CustomPrimaryButton
            text="Join as Creator"
            href="/creator/register"
            width="w-[172px]"
          />
        </div>
      </div>
    </section>
  );
};

export default JoinAsCreator;