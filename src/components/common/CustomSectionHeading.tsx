type CustomSectionHeadingProps = {
  title: string;
  description: string;
  titleSize?: string;
  descriptionSize?: string;
};

const CustomSectionHeading = ({
  title,
  description,
  titleSize = "text-[44px]",
  descriptionSize = "text-[18px]",
}: CustomSectionHeadingProps) => {
  return (
    <div className="mx-auto max-w-[917px] text-center mb-16">
      <h2 className={`font-poppins font-semibold text-[#040819] leading-[1.2] tracking-[-0.01em] ${titleSize}`}>
        {title}
      </h2>
      <p className={`mt-4 font-satoshi leading-[1.6] text-[#82868E] ${descriptionSize}`}>
        {description}
      </p>
    </div>
  );
};

export default CustomSectionHeading;