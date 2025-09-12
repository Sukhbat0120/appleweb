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

  return (
    <>
      <a href="/">
        <button className="px-4 py-2 rounded-md text-light-600 font-bold bg-gray-400 ml-2">
          Home
        </button>
      </a>

      <h2 className="font-bold text-5xl mt-2">{value}</h2>

      <button
        className="px-4 py-2 rounded-md text-light-500 font-bold bg-sky-600 ml-2 "
        onClick={genNer}
      >
        Name
      </button>
      <button
        className="px-4 py-2 rounded-md text-light-500 font-bold bg-sky-600 ml-2"
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
    </>
  );
}
