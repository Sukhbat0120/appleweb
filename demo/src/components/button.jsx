export const Button = ({
  handleAcive,
  handleComplete,
  children,
  btnColor,
  handleOnClick,
}) => {
  const color = {
    blue: "bg-[#3C82F6] hover:opacity-80 font-semibold  ",
    white: "bg-gray-200",
  };
  return (
    <>
      <div>
        <button
          className={`text-black hover:opacity-50 w-fit   p-2 rounded-[6px] ${color[btnColor]}`}
          onClick={handleOnClick}
        >
          {children}
        </button>
      </div>
    </>
  );
};
