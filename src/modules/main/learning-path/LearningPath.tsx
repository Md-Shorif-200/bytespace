import Image from "next/image";
import Container from "@/components/common/Container";
import CustomSectionHeading from "@/components/common/CustomSectionHeading";

const learning_path_icon_1 = "/image/learning-paths/icon_1.svg";
const learning_path_icon_2 = "/image/learning-paths/icon_2.svg";
const learning_path_icon_3 = "/image/learning-paths/icon_3.svg";
const learning_path_icon_4 = "/image/learning-paths/icon_4.svg";
const learning_path_icon_5 = "/image/learning-paths/icon_5.svg";
const learning_path_icon_6 = "/image/learning-paths/icon_6.svg";

// Data for all cards
const learningPaths = [
  { id: 1, title: "Design", icon: learning_path_icon_1 },
  { id: 2, title: "Development", icon: learning_path_icon_2 },
  { id: 3, title: "IT & Software", icon: learning_path_icon_3 },
  { id: 4, title: "Business", icon: learning_path_icon_4 },
  { id: 5, title: "Marketing", icon: learning_path_icon_5 },
  { id: 6, title: "Photography", icon: learning_path_icon_6 },
];

const LearningPath = () => {
  return (
    <section className="py-16">
      <Container>

         <CustomSectionHeading
         title="Explore Diverse Learning Paths at Bytespace"
         description="At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories."

         titleSize="text-[36px]"
         descriptionSize="text-[18px]"
         />


        {/* Cards row */}
        <div className="flex flex-wrap items-center justify-center gap-8">
          {learningPaths.map((item) => (
            // One card
            <div
            key={item.id}
            className="flex h-[167px] w-[167px] flex-col items-center justify-center gap-2 rounded-3xl border border-[#CED0D3] bg-white p-4"
          >
            {/* Circle with icon */}
            <div className="flex h-[60px] w-[60px] items-center justify-center rounded-full bg-primary p-3">
              <Image
                src={item.icon}
                alt={item.title}
                width={36}
                height={24}
                className="h-6 w-9 object-contain"
              />
            </div>
          
            {/* Title */}
            <p className="font-satoshi text-[20px] font-medium text-dark">
              {item.title}
            </p>
          </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default LearningPath;