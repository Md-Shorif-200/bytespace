import Container from "@/components/common/Container";
import Image from "next/image";

const course_stats_img = "/image/course-stats/course_stats_img.png";

// Small data for the 3 numbers
const stats = [
  { value: "12K", label: "Students" },
  { value: "70+", label: "Courses" },
  { value: "16", label: "Creators" },
];

const PlatformStatsSection = () => {
  return (
    <section className="relative overflow-hidden bg-transparent custom_margin_t pt-10 xl:pt-18 ">
      <Container>
      

        {/* main content */}
        <div className="relative h-190 md:h-100 xl:h-130 w-full grid items-center    xl:gap-[63px]  md:grid-cols-2">
          {/* left side: text */}
          <div>
            <h2 className="font-poppins font-semibold text-[30px] sm:text-[36px] md:text-[28px]   xl:text-[44px] leading-[1.2] text-dark">
              Your Path to Professional <br /> Growth Starts Here!
            </h2>

            <p className="font-satoshi font-normal text-[14px] sm:text-[16px] md:text-[14px] lg:text-[18px] leading-[1.6] my-8 xl:my-10">
              Explore our curated selection of courses tailored to enhance your
              capabilities and accelerate your career journey. Whether you are
              looking to sharpen specific skills, gain industry expertise, or
              embark on a new career path entirely, we have the resources you
              need.
            </p>

            {/* stats */}
            <div className=" flex gap-[26px] xl:gap-[56px]">
              {stats.map((item) => (
                <div key={item.label}>
                  <p className="text-[32px] xl:text-[36px] leading-[34px] xl:leading-[44px] font-semibold text-accent font-poppins">
                    {item.value}
                  </p>
                  <p className="text-[18px] leading-[1.6] text-[#4B4C53]">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* right side image */}
          <div className="relative h-full min-h-[320px] xl:min-h-[420px] w-full">
            <Image
              src={course_stats_img}
              alt="Student learning online"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-contain xl:object-right"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default PlatformStatsSection;
