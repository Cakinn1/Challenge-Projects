import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
export default function SneakerImageFullscreen({
  selectedImage,
  setSelectedImage,
  itemFullscreened,
  setItemFullscreened,
}: {
  selectedImage: string;
  setSelectedImage: (value: string) => void;
  setItemFullscreened: (value: boolean) => void;
  itemFullscreened: boolean;
}) {
  const [sneakerImageSelected, setSneakerImageSelected] =
    useState<string>(selectedImage);
  const imageArray = ["1", "2", "3", "4"];
  const [currentIndex, setCurrentIndex] = useState(imageArray.indexOf(sneakerImageSelected));
console.log(currentIndex)

function handleNextImage() {
  const nextIndex = (currentIndex + 1) % imageArray.length;
  setCurrentIndex(nextIndex);
  setSneakerImageSelected(imageArray[nextIndex]);
}

function handlePreviousImage() {
  const previousIndex = (currentIndex - 1 + imageArray.length) % imageArray.length;
  setCurrentIndex(previousIndex);
  setSneakerImageSelected(imageArray[previousIndex]);
}


  function FullScreenImage({ value }: { value: string }) {
    return (
      <div className="relative">
        <img
          onClick={() => setSneakerImageSelected(value)}
          className={`h-[100px] overflow-hidden hover:-translate-y-2 duration-300    cursor-pointer object-cover rounded-2xl
              `}
          src={`/images/image-product-${value}-thumbnail.jpg`}
          alt=""
        />
        <div
          className={`${
            sneakerImageSelected === value
              ? "absolute top-0 w-full h-full transition-colors border-[#ff7d1a] border-[3px]  bg-gray-200 bg-opacity-80 rounded-2xl"
              : ""
          }`}
        ></div>
      </div>
    );
  }

  return (
    <section className="absolute left-0 top-0 bg-black  z-50 bg-opacity-70 w-full h-full">
      <div className="absolute h-[600px] w-[500px]   top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="flex ">
          <div className="ml-auto mb-4">
            <svg
              onClick={() => setItemFullscreened(!selectedImage)}
              width="14"
              className="cursor-pointer "
              height="15"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
                fill="white"
                className="hover:fill-[#ff7d1a] duration-300 ease-in-out"
                fill-rule="evenodd"
              />
            </svg>
          </div>
        </div>
        <figure className="relative">
          <img
            src={`/images/image-product-${sneakerImageSelected}.jpg`}
            className="object-cover rounded-2xl h-full w-full "
            alt=""
          />

          <div   onClick={() => handlePreviousImage()} className="absolute top-1/2 p-4 rounded-full hover:scale-105 cursor-pointer duration-150 flex justify-center items-center bg-white -left-5">
            <FaChevronLeft />
          </div>
          <div onClick={() => handleNextImage()} className="absolute top-1/2 p-4 rounded-full hover:scale-105 cursor-pointer duration-150 flex justify-center items-center bg-white -right-5">
            <FaChevronRight />
          </div>
        </figure>

        <div className="mt-14 px-6 flex gap-x-6">
          {imageArray.map((value) => (
            <FullScreenImage value={value} key={value} />
          ))}
        </div>
      </div>
    </section>
  );
}
