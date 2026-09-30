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
    <section className="relative overflow-hidden bg-transparent pb-18 pt-6">
      <Container>
     

        {/* main content */}
        <div className="relative h-[596px] w-full grid items-center  gap-[63px]  md:grid-cols-2">
          {/* left side : image */}
          <div className="relative h-full min-h-[420px] w-full">
            <Image
              src={course_creator_sidebar_img}
              alt="create and manage"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-contain object-right"
            />
          </div>

          {/* right side: text */}
          <div>
            <h2 className="heading_m text-dark">
              Create &amp; Manage <br /> Courses Easily.
            </h2>

            <p className="my-8 text-[18px] leading-[28px] text-[#4B4C53] font-normal   ">
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
