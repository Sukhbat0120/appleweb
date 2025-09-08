export function FirstPage() {
  return (
    <div className="flex justify-center p-[60px]">
      <div className="h-[290px] w-[377px] bg-blue-950 rounded-1xl shadow-xs p-[24px]">
        <h1 className="text-center font-bold mb-3">To-Do list</h1>
        <div className="flex justify-center">
          <input
            type="text"
            maxLength={100}
            placeholder="Add a new task ..."
            className="rounded-[6px] border-solid border p-[12px]"
          ></input>
          <button className="bg-blue-500 p-[12px] ml-3 rounded-[6px]">
            Add
          </button>
        </div>

        <div className="flex justify-center">
          <button className="bg-gray-400 p-[8px] ml-3 mt-2 rounded-[6px]">
            All
          </button>
          <button className="bg-gray-400 p-[8px] ml-3 mt-2 rounded-[6px]">
            Active
          </button>
          <button className="bg-gray-400 p-[8px] ml-3 mt-2 rounded-[6px]">
            Completed
          </button>
        </div>

        <div className="text-center text-gray-400 mt-3">
          No tasks yet. Add one above{" "}
        </div>
        <div className="flex justify-center gap-0.5 p-6">
          <p className="text-sm ">Powered by</p>
          <p className="text-sm text-blue-500 ">Pinecone academy</p>
        </div>
      </div>
    </div>
  );
}
