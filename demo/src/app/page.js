import Image from "next/image";
import { Card } from "./components/Card";
import { Short } from "./components/Short";
export default function Home() {
  return (
    <>
      <div className="flex gap-2 p-8">
        <Short img="https://hips.hearstapps.com/hmg-prod/images/81st-golden-globe-awards-taylor-swift-on-the-red-carpet-of-news-photo-1719260997.jpg?crop=0.384xw:0.488xh;0.546xw,0.0864xh&resize=640:*" />
        <Short img="https://cdn.britannica.com/81/160781-050-8B7BF24D/Selena-Gomez-2010.jpg" />
        <Short img="https://i.ytimg.com/vi/nHB7ixAkJPQ/oar2.jpg?sqp=-oaymwEoCJUDENAFSFqQAgHyq4qpAxcIARUAAIhC2AEB4gEKCBgQAhgGOAFAAQ==&rs=AOn4CLAKEz-KuYBd8t90lTlacFHCZkuplw" />{" "}
        <Short img="https://i.ytimg.com/vi/vwBQHejdO3o/oardefault.jpg?sqp=-oaymwEoCJUDENAFSFqQAgHyq4qpAxcIARUAAIhC2AEB4gEKCBgQAhgGOAFAAQ==&rs=AOn4CLAQLpB3a5ZWzS8iIHIAh28PAXvxgg" />
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
