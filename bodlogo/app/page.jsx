import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <a href="/nameAgeGender">
        <button className="px-4 py-2 rounded-md text-light-600 font-bold bg-gray-400 ml-2">
          name age gender
        </button>
      </a>
      <a href="/changeColor">
        <button className="px-4 py-2 rounded-md text-light-600 font-bold bg-gray-400 ml-2">
          changeColor
        </button>
      </a>
       <a href="/changeColor">
        <button className="px-4 py-2 rounded-md text-light-600 font-bold bg-gray-400 ml-2">
          changeColor
        </button>
      </a>
       <a href="/changeColor">
        <button className="px-4 py-2 rounded-md text-light-600 font-bold bg-gray-400 ml-2">
          changeColor
        </button>
      </a>
    </>
  );
}
