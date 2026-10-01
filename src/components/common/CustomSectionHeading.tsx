type CustomSectionHeadingProps = {
  title: string;
  description: string;
  descriptionSize?: string;
};

const CustomSectionHeading = ({
  title,
  description,
  descriptionSize = "text-[18px]",
}: CustomSectionHeadingProps) => {
  return (
    <div className="mx-auto max-w-[917px] text-center mb-16">
      <h2 className={` heading_s text-[#040819] `}>{title}</h2>
      <p className={` body_l mt-4 text-[#82868E] ${descriptionSize}`}>
        {description}
      </p>
    </div>
  );
};

export default CustomSectionHeading;
