import Image from "next/image";
import { Star } from "lucide-react";

const avatars = [
  "/image/banner/Ellipse.png",
  "/image/banner/Ellipse_1.png",
  "/image/banner/Ellipse_2.png",
  "/image/banner/Ellipse_3.png",
  "/image/banner/Ellipse_4.png",
  "/image/banner/Ellipse_5.png",
  // "/image/banner/Ellipse_6.png",
];

const HappyStudentsCard = () => {
  return (
    <div className="h-[121px] w-[245px] rounded-2xl bg-white p-4 shadow-lg">
      <h3 className="font-satoshi text-[16px] font-medium text-dark">
        Happy Students
      </h3>

      <div className="mt-1 flex items-center gap-1 font-satoshi text-[12px]">
        <div className="text-dark">4.5 <span className="text-[#82868E]">(240)</span>  </div>
        <Star size={14} className="fill-primary text-primary" />
      </div>

      <div className="mt-2 flex items-center">
        {avatars.map((src, index) => (
          <Image
            key={src}
            src={src}
            alt="Student"
            width={43}
            height={43}
            className={`h-[43px] w-[43px] rounded-full border-2 border-white object-cover ${
              index > 0 ? "-ml-4" : ""
            }`}
          />
        ))}
        <div className="-ml-4 flex h-[43px] w-[43px] shrink-0 items-center justify-center rounded-full border-2 border-white bg-primary font-satoshi text-[12px] font-bold text-dark">
          2K+
        </div>
      </div>
    </div>
  );
};

export default HappyStudentsCard;