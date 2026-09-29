import Image from "next/image";
import Container from "@/components/common/Container";
import CustomSectionHeading from "@/components/common/CustomSectionHeading";
import { learningPaths } from "./data";

const LearningPath = () => {
  return (
    <section className="custom_padding_t">
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
