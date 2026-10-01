import Container from "@/components/common/Container";
import Image from "next/image";

const course_creator_sidebar_img =
  "/image/course-creator/course_creator_img.png";

const chek_icon = "/image/course-creator/chek_icon.svg";

// list items shown with a check icon
const features = [
  "Share Your Expertise",
  "Monetize Your Passion",
  "Flexibility and Autonomy",
  "Build a Community",
];

const CourseCreatorSection = () => {
  return (
    <section className="relative overflow-hidden bg-transparent pb-10 xl:pb-18 lg:pt-10  ">
      <Container>
        {/* main content */}
        <div className="relative w-full h-220 md:h-120 xl:h-149 grid items-center  md:grid-cols-2 xl:gap-[63px]">
          {/* left side : image */}
          <div className="relative order-2 w-full h-full md:order-1 min-h-[420px]">
            <Image
              src={course_creator_sidebar_img}
              alt="create and manage"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="md:object-contain xl:object-right"
            />
          </div>

          {/* right side: text */}
          <div className="order-1 md:order-2 my-10" >
            <h2 className="font-poppins font-semibold text-[30px] sm:text-[36px] md:text-[28px]   xl:text-[44px] leading-[1.2] text-dark">
              Create &amp; Manage <br /> Courses Easily.
            </h2>

            <p className="my-8 text-[16px]   xl:text-[18px] leading-[22px] xl:leading-[28px] text-[#4B4C53] font-normal   ">
              <span className="font-semibold text-[#242528]">ByteSpace</span>{" "}
              supports individuals or entities in the creation, publication, and
              administration of educational courses.
            </p>

            {/* feature list */}
            <ul className=" space-y-3">
              {features.map((text) => (
                <li key={text} className="flex items-center gap-3 label_l">
                  <Image
                    src={chek_icon}
                    alt="check icon"
                    width={20}
                    height={20}
                    className="h-5 w-5 shrink-0"
                  />
                  {text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CourseCreatorSection;
