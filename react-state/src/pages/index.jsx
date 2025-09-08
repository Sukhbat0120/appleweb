import Image from "next/image";
import { useState } from "react";
export default function Home() {
  const [number, setNumber] = useState(10);

  const handlePlus = () => {
    setNumber(number + 1);
  };
  const handleMinus = () => {
    setNumber(number - 1);
  };

  return (
    <div>
      <p>hello - {number}</p>
      <button className="px-4 py-2 bg-blue-600" onClick={handlePlus}>
        Plus
      </button>
      <button className="px-4 py-2 bg-blue-600 ml-2" onClick={handleMinus}>
        Minus
      </button>
    </div>
  );
}
