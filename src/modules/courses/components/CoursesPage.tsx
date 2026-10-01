import Container from "@/components/common/Container";
import CoursesFilters from "./CoursesFilters";
import CoursesTab from "./CoursesTab";
import SectionBanner from "./SectionBanner";
import Courses from "./Courses";
import CoursesPagination from "./CoursesPagination";

const CoursesPage = () => {
  return (
    <main>
      <SectionBanner />
            <section className="py-10 sm:py-14 lg:py-18">
  <Container>
        <CoursesFilters />
        <CoursesTab />
        <Courses />
         <CoursesPagination />
      </Container>
            </section>
    
    </main>
  );
};

export default CoursesPage;
