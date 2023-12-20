import React, { useState } from "react";
import SneakerImageFullscreen from "./SneakerImageFullscreen";
import Image from "./ui/Image";

interface LeftMainProps {
  itemFullscreened: boolean;
  setItemFullscreened: (value: boolean) => void;
  selectedImage: string;
  setSelectedImage: (value: string) => void;
}

export default function LeftMain({
  itemFullscreened,
  setItemFullscreened,
  selectedImage,
  setSelectedImage,
}: LeftMainProps) {
  const imageArray = ["1", "2", "3", "4"];

  return (
    <section className="w-full md:w-[50%] h-full pr-6 lg:px-12">
      <figure>
        <img
          src={`/images/image-product-${selectedImage}.jpg`}
          className="rounded-3xl w-[400px] mx-auto m cursor-pointer object-cover "
          alt=""
          onClick={() => setItemFullscreened(!itemFullscreened)}
        />
      </figure>
      <div className="mt-8 items-center justify-center flex gap-x-5">

        
        {imageArray.map((image) => (
          <Image
            selectedImage={selectedImage}
            setSelectedImage={setSelectedImage}
            key={image}
            value={image}
          />
        ))}
      </div>
    </section>
  );
}
