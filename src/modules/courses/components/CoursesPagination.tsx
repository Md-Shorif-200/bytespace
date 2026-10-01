import { ChevronLeft, ChevronRight } from "lucide-react";

const pages = [1, 2, 3, 4, 5];

const arrowClass =
  "flex size-10 shrink-0 items-center justify-center rounded-full border border-[#E1E3E6] bg-white text-[#242528] transition duration-300 hover:bg-[#F5F6F7]";

const CoursesPagination = () => {
  return (
    <nav
      aria-label="Courses pagination"
      className="flex items-center justify-center gap-4 pt-10 md:pt-14 lg:pt-18"
    >
      <button type="button" aria-label="Previous page" className={arrowClass}>
        <ChevronLeft size={20} />
      </button>

      <ul className="flex items-center gap-5">
        {pages.map((page) => (
          <li
            key={page}
            className={`font-satoshi text-[16px] font-medium ${
              page === 1 ? "text-[#C9CBCF]" : "text-[#242528]"
            }`}
          >
            {page}
          </li>
        ))}
      </ul>

      <button type="button" aria-label="Next page" className={arrowClass}>
        <ChevronRight size={20} />
      </button>
    </nav>
  );
};

export default CoursesPagination;