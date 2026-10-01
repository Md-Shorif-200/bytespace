import Container from "@/components/common/Container";
import CustomTabs from "@/components/common/CustomTabs";
import FeaturedCourseSectionHeading from "./FeaturedCourseSectionHeading";
import FeaturedCourseCard from "./FeaturedCourseCard";
import { coursesData, tabs } from "./data";





const FeaturedCourses = () => {
  return (
    <section className="custom_padding_t">
      <Container>
        <FeaturedCourseSectionHeading
          title_1="Discover Your Passion,"
          title_2="Build Your Skills"
          description="At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life."
        />
        <div className="max-w-[1086px] mx-auto">
          <CustomTabs tabs={tabs} variant="centered-pyramid" />
        </div>

        {/* Grid Container for Cards */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 xl:gap-10  ">
          {coursesData.map((course) => (
            <FeaturedCourseCard key={course.id} course={course} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FeaturedCourses;
