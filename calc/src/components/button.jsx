export const Button = ({ isPrimary, children }) => {
  return (
    <button
      className={`h-[42px] w-[90px] rounded-[100px]  ${
        isPrimary ? "bg-gray-900 text-white" : "bg-gray-600 text-white"
      }`}
    >
      {children}
    </button>
  );
};
