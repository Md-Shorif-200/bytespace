import { Search } from "lucide-react";

const CustomInput = () => {
  return (
    <div className="flex h-[52px] w-full max-w-[461px] items-center gap-3 rounded-3xl bg-white px-6">
      <Search size={20} className="text-[#82868E]" />
      <input
        type="text"
        placeholder="Course, topic, creator"
        className="w-full bg-transparent font-satoshi text-[16px] text-[#242528] outline-none placeholder:text-[#82868E]"
      />
    </div>
  );
};

export default CustomInput;