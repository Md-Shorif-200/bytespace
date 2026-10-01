import CourseCard from "@/modules/home/components/featured-course/CourseCard"
import { coursesData } from "../data/courses-data"

const Courses = () => {
  return (
    <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 xl:gap-10  ">
          {coursesData.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
  )
}

export default Courses