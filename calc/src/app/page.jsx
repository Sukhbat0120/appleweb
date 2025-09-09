import Image from "next/image";
import { Button } from "../components/button";
export default function Home() {
  return (
    <>
      <div className="ml-30">
        <input
          type="text"
          className="w-[622px] h-[60px] rounded-[16px] border-solid border "
        />
      </div>
      <Button isPrimary={true}></Button>
    </>
  );
}
