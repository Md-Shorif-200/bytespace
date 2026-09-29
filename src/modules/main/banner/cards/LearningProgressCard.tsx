const LearningProgressCard = () => {
  return (
    <div className="w-[232px] h-[131px] rounded-2xl bg-white p-4 shadow-lg">
      <h3 className="font-satoshi text-[14px] font-medium text-[#242528] ">
        Learning Progress
      </h3>
      <p className="mt-1 font-poppins text-[48px] font-semibold leading-none text-dark">55%</p>
      <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-[#E8E9EB]">
        <div className="h-full w-[55%] rounded-full bg-primary" />
      </div>
    </div>
  );
};

export default LearningProgressCard;
