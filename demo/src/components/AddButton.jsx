export const AddButton = ({ children, handleOnClick }) => {
  return (
    <>
      <button
        className="bg-[#3C82F6] hover:opacity-80  w-[59px] h-[40px] text-[#F9F9F9] text-[14px] font-semibold p-[8px 16px] rounded-[6px]"
        onClick={handleOnClick}
      >
        Add
      </button>
    </>
  );
};
