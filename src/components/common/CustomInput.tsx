import { Search } from "lucide-react";

type CustomInputProps = {
  type?: string;
  placeholder?: string;
  width?: string;
  showIcon?: boolean;
  border?: string;
};

const CustomInput = ({
  type = "text",
  placeholder = "Course, topic, creator",
  width = "max-w-[461px]",
  showIcon = true,
  border = "border-none",
}: CustomInputProps) => {
  return (
    <div
      className={`flex h-[52px] w-full items-center gap-3 rounded-[100px] bg-white px-6 ${width} ${border}`}
    >
      {showIcon && <Search size={20} className="text-[#82868E]" />}
      <input
        type={type}
        placeholder={placeholder}
        className="w-full bg-transparent font-satoshi text-[16px] text-[#242528] outline-none placeholder:text-[#82868E]"
      />
    </div>
  );
};

export default CustomInput;
