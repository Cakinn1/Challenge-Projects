import React from "react";

export default function Image({
  value,
  setSelectedImage,
  selectedImage,
}: {
  value: string;
  setSelectedImage: (value: string) => void;
  selectedImage: string;
}) {
  return (
    <div className="relative hidden md:flex">
      <img
        onClick={() => setSelectedImage(value)}
        className={`h-[100px] overflow-hidden hover:-translate-y-2 duration-300    cursor-pointer object-cover rounded-2xl
              `}
        src={`/images/image-product-${value}-thumbnail.jpg`}
        alt=""
      />
      <div
        className={`${
          selectedImage === value
            ? "absolute top-0 w-full h-full transition-colors border-[#ff7d1a] border-[3px]  bg-gray-200 bg-opacity-80 rounded-2xl"
            : ""
        }`}
      ></div>
    </div>
  );
}
