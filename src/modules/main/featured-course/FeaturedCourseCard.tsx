
import Image from "next/image";
import { FeaturedCourseType } from "./types";

interface FeaturedCourseCardProps {
  course: FeaturedCourseType;
}

const star_icon = "/image/featured-course/star_icon.svg";

const FeaturedCourseCard = ({ course }: FeaturedCourseCardProps) => {
  return (
    // Main Card Container
    <div className="w-[373px] border border-[#CED0D3] rounded-[24px] p-4 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
      {/* Top Image Section with overlay badges */}
      <div className="relative w-full h-[195px] rounded-[12px] overflow-hidden">
        <Image
          src={course.thumbnail}
          alt={course.title}
          fill
          className="object-cover"
        />
      </div>

      {/* Course Title & Rating Section */}
      <div className="mt-4 flex items-start justify-between gap-2">
        <div>
          <h3 className="text-[20px] font-poppins font-bold text-[#000000] leading-tight">
            {course.title}
          </h3>
          <p className="text-[12px] text-[#4F4F4F] mt-1">
            by{" "}
            <span className="text-accent   cursor-pointer">
              {course.author}
            </span>
          </p>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1 text-[#4F4F4F]">
          <span className="text-[18px] mt-[2px]">{course.rating}</span>

          <Image src={star_icon} alt="Rating" width={24} height={24} />
        </div>
      </div>

      {/* Beginner Level Badge & Student Avatars */}
      <div className="mt-4 flex items-center gap-3">
        {/* Beginner Badge */}
        <div className=" w-[97px] h-[32px] flex justify-center items-center gap-1  bg-[#F5F5F6] rounded-full text-[12px] font-medium text-[#4B4C53]">
          <Image
            src="/image/featured-course/biginer_badge_icon.svg"
            alt="Level"
            width={20}
            height={20}
          />
          <span>{course.level}</span>
        </div>

        {/* Enrolled Students Avatars */}
        <div className="flex items-center -space-x-2">
          {course.studentAvatars.map((avatarUrl, index) => (
            <div
              key={index}
              className="relative w-8 h-8 rounded-full   overflow-hidden bg-gray-200"
            >
              <Image
                src={avatarUrl}
                alt="Student"
                fill
                className="object-cover"
              />
            </div>
          ))}

          {/* Total Students Count Badge */}
          <div className="w-8 h-8 rounded-full z-10   bg-primary flex items-center justify-center text-[12px] font-semibold text-[#242528]">
            {course.studentsCount}
          </div>
        </div>
      </div>

      {/* Price Section */}
      <div className="mt-4 flex items-baseline gap-1">
        <span className="text-[20px] font-extrabold text-accent">
          ${course.price}
        </span>
        <span className="text-[12px] text-[#4F4F4F] font-normal">
          /lifetime
        </span>
      </div>
    </div>
  );
};

export default FeaturedCourseCard;
