import Link from "next/link";

type CustomPrimaryButtonProps = {
  text: string;
  href: string;
  width?: string;
};

const CustomPrimaryButton = ({
  text,
  href,
  width = "w-full min-[450px]:w-[120px]",
}: CustomPrimaryButtonProps) => {
  return (
    <Link
      href={href}
      className={`flex h-[52px] shrink-0 items-center justify-center rounded-3xl bg-[#D4FB20] font-satoshi text-[16px] font-medium text-[#242528] transition duration-300 hover:bg-[#D4FB20]/90 ${width}`}
    >
      {text}
    </Link>
  );
};

export default CustomPrimaryButton;
