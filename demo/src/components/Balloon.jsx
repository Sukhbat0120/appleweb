export function Balloon(props) {
  console.log(props.color);
  return (
    <>
      <div className="bg-relative inline-block">
        <div
          className="w-24 h-32 rounded-full shadow-lg"
          style={{ backgroundColor: props.color }}
        ></div>
        <div className="absolute left-1/2 -bottom-4 -translate-x-1/2 w-0 h-0 border-l-[10px] border-l-transparent bodrer-r-[10px] border-r-transparent border-t-[16px] border-t-amber-50"></div>
        <div className=" h-12 w-[1px] absolute left-1/2 -bottom-12 -translate-x-1/2 bg-amber-50"></div>
      </div>
    </>
  );
}
