import { useState } from "react";
import { Input } from "./Input";

export const Task = ({ todo, onDelete }) => {
  return (
    <div className="bg-gray-300 border-1 rounded-[10px] w-[300px] h-[42px] flex items-center  justify-around mt-2">
      <input type="checkbox" />
      {todo}
      <button
        onClick={onDelete}
        className="text-red-500 text-4xl font-bold hover:opacity-50"
      >
        ×
      </button>
    </div>
  );
};
