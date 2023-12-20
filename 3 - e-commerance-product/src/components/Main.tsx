import React, { useState } from "react";
import LeftMain from "./LeftMain";
import RightMain from "./RightMain";

export interface MainProps {
  counter: number;
  setCounter: (value: number) => void;
  itemFullscreened: boolean;
  setItemFullscreened: (value: boolean) => void;
  selectedImage: string;
  setSelectedImage: (value: string) => void;
}

export default function Main({
  counter,
  setCounter,
  itemFullscreened,
  setItemFullscreened,
  selectedImage,
  setSelectedImage,
}: MainProps) {
  return (
    <section className=" px-6 md:py-20 py-10 tracking-wide h-[800px] flex flex-col md:flex-row lg:gap-x-12">
      <LeftMain
        selectedImage={selectedImage}
        setSelectedImage={setSelectedImage}
        itemFullscreened={itemFullscreened}
        setItemFullscreened={setItemFullscreened}
      />
      <RightMain
        selectedImage={selectedImage}
        setSelectedImage={setSelectedImage}
        itemFullscreened={itemFullscreened}
        setItemFullscreened={setItemFullscreened}
        counter={counter}
        setCounter={setCounter}
      />
    </section>
  );
}
