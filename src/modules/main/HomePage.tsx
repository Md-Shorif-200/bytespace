import Banner from "./banner/Banner";
import BrandLogos from "./brand-logs/BrandLogos";
import FeaturedCoures from "./featured-course/FeaturedCoures";
import LearningPath from "./learning-path/LearningPath";

const HomePage = () => {
  return (
    <div>
      <Banner />
       <BrandLogos />
       <FeaturedCoures />
       <LearningPath />
    </div>
  );
};

export default HomePage;
