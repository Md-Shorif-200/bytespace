import Image from "next/image";

const filter_icon = "/image/courses/filter.svg";
const level_icon = "/image/courses/level.svg";
const category_icon = "/image/courses/category.svg";
const most_relevant_icon = "/image/courses/most_relevent.svg";

const leftFilters = [
  { label: "Filter", icon: filter_icon },
  { label: "Level", icon: level_icon },
  { label: "Category", icon: category_icon },
];

type FilterPillProps = {
  label: string;
  icon: string;
};

// Reusable pill button (icon + text)
const FilterPill = ({ label, icon }: FilterPillProps) => {
  return (
    <button
      type="button"
      className="flex  h-[48px] shrink-0 items-center gap-2 rounded-[24px] border border-[#CED0D3] bg-white px-4  transition duration-300 hover:bg-[#F5F6F7] lebel_m text-[#4B4C53] cursor-pointer"
    >
      <Image src={icon} alt="" width={24} height={24} aria-hidden />
      {label}
    </button>
  );
};

const CoursesFilters = () => {
  return (
    <div className=" flex flex-wrap items-center justify-between gap-3 ">
      <div className="flex flex-wrap items-center gap-3">
        {leftFilters.map((item) => (
          <FilterPill key={item.label} label={item.label} icon={item.icon} />
        ))}
      </div>

      <FilterPill label="Most relevant" icon={most_relevant_icon} />
    </div>
  );
};

export default CoursesFilters;
