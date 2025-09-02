import Image from "next/image";
import { Card } from "./components/Card";
import { Short } from "./components/Short";
export default function Home() {
  return (
    <>
      <div className="flex gap-2">
        <Short />
        <Short />
        <Short />
        <Short />
        <Short />
        <Short />
      </div>
      <div></div>
      <div className="flex flex-col gap-2">
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
}
