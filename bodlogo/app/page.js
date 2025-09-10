"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [value, setValue] = useState("");
  const genNer = () => {
    setValue(value + "Sukhbat");
  };
  const genNas = () => {
    setValue(value + "26");
  };

  const genHuis = () => {
    setValue(value + "Male");
  };

  const genRed = () => {};
  const genGreen = () => {};
  return (
    <>
      <h2 className="font-bold text-5xl">{value}</h2>

      <button
        className="px-4 py-2 rounded-md text-light-500 font-bold bg-sky-600 ml-2 "
        onClick={genNer}
      >
        Name
      </button>
      <button
        className="px-4 py-2 rounded-md text-light-500 font-bold bg-sky-600 ml-2 "
        onClick={genNas}
      >
        Age
      </button>
      <button
        className="px-4 py-2 rounded-md text-light-500 font-bold bg-sky-600 ml-2 "
        onClick={genHuis}
      >
        Gender
      </button>
      <div className="w-[300px] h-[300px] mt-10 ml-10 bg-sky-200"></div>
      <button
        className="px-4 py-2 rounded-md text-light-500 font-bold bg-sky-600 ml-2"
        onClick={genRed}
      >
        red
      </button>
      <button
        className="px-4 py-2 rounded-md text-light-500 font-bold bg-sky-600 ml-2"
        onClick={genGreen}
      >
        green
      </button>
    </>
  );
}
