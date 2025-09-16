export const Button = () => {
  return (
    <>
      <div>
        <button className="bg-[#F3F4F6] hover:opacity-50  w-[38px] h-[32px]  text-[14px]  p-[8px 16px] rounded-[6px]">
          All
        </button>
        <button className="bg-[#F3F4F6] hover:opacity-50  w-[60px] h-[32px] p-[8px 16px] ml-3 mt-2 rounded-[6px]">
          Active
        </button>
        <button className="bg-[#F3F4F6] hover:opacity-50  w-[87px] h-[32px] p-[8px 16px] ml-3 mt-2 rounded-[6px]">
          Completed
        </button>
      </div>
    </>
  );
};
