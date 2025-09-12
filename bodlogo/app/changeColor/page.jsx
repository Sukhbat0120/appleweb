"use client";
import { useState } from "react";

export default function ChangeColor() {
  const [Bg, setBg] = useState(true);
  const [isGreen, setGreen] = useState(true);

  return (
    <div>
      <a href="/">
        <button className="px-4 py-2 rounded-md text-light-600 font-bold bg-gray-400 ml-2">
          Home
        </button>
      </a>

      <div
        className={`w-[300px] h-[300px] mt-10 ml-10  ${
          (Bg ? "bg-sky-200" : "bg-red-600",
          isGreen ? "bg-red-600" : "bg-green-600")
        } `}
      ></div>

      <button
        className="px-4 py-2 rounded-md text-light-500 font-bold bg-sky-600 ml-2"
        onClick={() => setBg(!Bg)}
      >
        red
      </button>
      <button
        className="px-4 py-2 rounded-md text-light-500 font-bold bg-sky-600 ml-2"
        onClick={() => setGreen(!isGreen)}
      >
        green
      </button>
    </div>
  );
}
