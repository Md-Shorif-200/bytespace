import CustomTabs from "@/components/common/CustomTabs";

const courseTabs = [
  "Featured",
  "Music",
  "Drawing & Painting",
  "Marketing",
//   "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
  "Cooking",
];

const CoursesTab = () => {
  return (
    <div className=" py-6 sm:py-8 lg:py-10">
      <CustomTabs tabs={courseTabs} />
    </div>
  );
};

export default CoursesTab;