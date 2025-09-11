"use client";
import Image from "next/image";
import { useState } from "react";
import { Box } from "../component/box";

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

  return <Box />;
}
