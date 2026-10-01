import Container from "@/components/common/Container";
import CustomInput from "@/components/common/CustomInput";
import CustomPrimaryButton from "@/components/common/CustomPrimaryButton";
import { ChevronDown } from "lucide-react";


const SectionBanner = () => {
  return (
    <section className="relative w-full overflow-hidden bg-accent">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.12) 1px, transparent 1px)",
          backgroundSize: "120px 120px",
          backgroundPosition: "center top",
        }}
      />

    <Container>
           <div className="relative z-10  flex w-full  flex-col items-center px-4 pb-16 pt-[120px] md:pb-[84px]">
        {/* Heading */}
        <div className="flex min-h-[120px] items-center justify-center">
          <h1 className=" heading_s text-[#F5F5F6] text-center  text-[28px]  sm:text-[34px] md:text-[40px]">
            Find Your Next Course
          </h1>
        </div>

 
        <div className="flex w-full flex-col items-center justify-center gap-3 min-[450px]:flex-row">
          <CustomInput placeholder="Search" width="max-w-[461px]" />
          <CustomPrimaryButton
            text="Courses"
            href="/courses"
            width="w-full min-[450px]:w-[148px]"
            icon={<ChevronDown size={18} />}
          />
        </div>
      </div>
    </Container>
    </section>
  );
};

export default SectionBanner;