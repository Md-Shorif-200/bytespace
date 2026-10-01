import Banner from "./banner/Banner";
import BrandLogos from "./brand-logs/BrandLogos";
import ClientsReview from "./clients-review/ClientsReview";
import FeaturedCoures from "./featured-course/FeaturedCoures";
import JoinAsCreator from "./join-as-creator/JoinAsCreator";
import LearningPath from "./learning-path/LearningPath";
import PlatformOverviewSection from "./platform-overview/PlatformOverviewSection";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <BrandLogos />
      <FeaturedCoures />
      <LearningPath />
      <PlatformOverviewSection />
      <JoinAsCreator />
      <ClientsReview />
    </div>
  );
};

export default HomePage;
