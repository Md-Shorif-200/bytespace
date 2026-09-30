import CourseCreatorSection from "./CourseCreatorSection";
import PlatformStatsSection from "./PlatformStatsSection";

// Soft corner washes from the section reference: lime on the left, lavender on the right.
const backgroundGradient = [
  "radial-gradient(ellipse 46% 42% at 16% 6%, rgba(212, 251, 32, 0.34) 0%, transparent 72%)",
  "radial-gradient(ellipse 42% 50% at 90% 8%, rgba(190, 198, 255, 0.5) 0%, transparent 70%)",
  "radial-gradient(ellipse 26% 22% at 0% 48%, rgba(176, 204, 255, 0.42) 0%, transparent 72%)",
  "radial-gradient(ellipse 44% 40% at 14% 94%, rgba(212, 251, 32, 0.4) 0%, transparent 72%)",
  "radial-gradient(ellipse 42% 38% at 94% 94%, rgba(190, 198, 255, 0.48) 0%, transparent 70%)",
].join(", ");

const PlatformOverviewSection = () => {
  return (
    <div
      className="bg-white"
      style={{
        backgroundImage: backgroundGradient,
        backgroundRepeat: "no-repeat",
      }}
    >
      <PlatformStatsSection />
      <CourseCreatorSection />
    </div>
  );
};

export default PlatformOverviewSection;