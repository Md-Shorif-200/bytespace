type FeaturedCourseSectionHeadingProps = {
  title_1: string;
  title_2: string;
  description: string;
};

const FeaturedCourseSectionHeading = ({
  title_1,
  title_2,
  description,
}: FeaturedCourseSectionHeadingProps) => {
  return (
    <div className="mx-auto max-w-[917px] text-center mb-16">
      <div className="flex flex-col items-center justify-center">
        <h2
          className={`font-poppins font-bold text-[#040819] leading-[1.2] tracking-[-0.01em] text-[44px]`}
        >
          {title_1}
        </h2>

        <h2
          className={`font-poppins font-bold text-[#040819] leading-[1.2] tracking-[-0.01em] text-[44px]`}
        >
          {title_2}
        </h2>
      </div>
      <p
        className={`mt-4 font-satoshi leading-[1.6] text-[#82868E] text-[18px]`}
      >
        {description}
      </p>
    </div>
  );
};

export default FeaturedCourseSectionHeading;
