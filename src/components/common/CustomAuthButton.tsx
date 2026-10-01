type CustomAuthButtonProps = {
  text: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  className?: string;
};

const CustomAuthButton = ({
  text,
  type = "button",
  onClick,
  className = "",
}: CustomAuthButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`flex h-[44px] w-[123px] cursor-pointer items-center justify-center rounded-[24px] bg-primary text-dark transition hover:opacity-90 ${className}`}
    >
      {text}
    </button>
  );
};

export default CustomAuthButton;
