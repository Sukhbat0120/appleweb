"use client";
import { Button } from "./Button";
import { Input } from "./Input";
import { AddButton } from "./AddButton";
import { Task } from "./Task";
import { useState } from "react";
export function FirstPage() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleOnChange = (event) => {
    setInputValue(event.target.value);
    console.log("changed", event.target.value);
  };

  const handleOnClick = () => {
    setTodos([...todos, inputValue]);
    setInputValue("");
    console.log(todos);
  };

  return (
    <div className="flex justify-center p-[60px] ">
      <div className="h-fix w-fix bg-gray-200 rounded-[6px] shadow-xl p-[24px]">
        <h1 className="text-center font-bold mb-3">To-Do list</h1>
        <div className="flex justify-center gap-[10px]">
          <Input handleOnChange={handleOnChange} inputValue={inputValue} />
          <AddButton handleOnClick={handleOnClick} />
        </div>

        <div className="flex justify-center">
          <Button />
        </div>
        {todos.map((el, index, children) => {
          return <Task key={index} todo={el}></Task>;
        })}

        <div className="text-center text-[14px] text-[#6B7280] mt-3"></div>
        <div className="flex justify-center gap-0.5 p-6">
          <p className="text-sm text-[#6B7280] ">Powered by</p>
          <p className="text-sm text-blue-500 ">Pinecone academy</p>
        </div>
      </div>
    </div>
  );
}
