import Image from "next/image";
import { Balloon } from "../../components/Balloon";
export default function Home() {
  return (
    <>
      <div className="flex gap-2 ">
        <Balloon color="red" />
        <Balloon color="pink" />
        <Balloon color="purple" />
        <Balloon color="orange" />
        <Balloon color="yellow" />
      </div>
    </>
  );
}
