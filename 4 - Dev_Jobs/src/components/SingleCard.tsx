import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { data } from "../api/constraints";

export interface SingleCarddProps {
  company: string;
  logo: string;
  logoBackground: string;
  position: string;
  postedAt: string;
  location: string;
  website: string;
  apply: string;
  description: string;
  requirements: {
    content: string;
    items: string[];
  };
  role: {
    content: string;
    items: string[];
  };
  contract: string;
}
//

export default function SingleCard() {
  const { id }: any = useParams();
  const [singleCardData, setSingleCardData] = useState<SingleCarddProps | null>(
    null
  );

  function fetchData() {
    if (!id) {
      return;
    }
    setSingleCardData(data[id - 1]);
  }

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <section className="max-w-[760px] px-6 md:px-0 relative -top-12 mx-auto">
        <div className="md:h-[140px] h-[180px]   flex ">
          <div
            className={` justify-center items-center md:hidden rounded-2xl left-[45%] -top-6  absolute h-[52px] w-[52px] flex`}
            style={{ backgroundColor: `${singleCardData?.logoBackground}` }}
          >
            <img src={singleCardData?.logo} className="h-sm" alt="" />
          </div>

          <div
            className={`md:flex justify-center items-center hidden   w-[140px]`}
            style={{ backgroundColor: `${singleCardData?.logoBackground}` }}
          >
            <img src={singleCardData?.logo} className="w-[80px] " alt="" />
          </div>
          <div className="bg-white flex-grow flex flex-col justify-center">
            <div className="md:pl-10 space-y-6 md:space-y-0 flex items-center md:text-left text-center md:flex-row flex-col justify-center md:justify-between">
              <div className="w-[50%] space-y-2">
                <h1 className="text-2xl font-bold">
                  {" "}
                  {singleCardData?.company}
                </h1>
                <h2 className="text-sm text-[#6e8098]">
                  {singleCardData?.website?.replace("https://", "")}
                </h2>
              </div>
              <div className="md:pr-10 ">
                <a
                  target="_blank"
                  href={`${singleCardData?.website}`}
                  className="bg-[#c5c9f4] hover:bg-opacity-70 duration-300 ease-in-out rounded-md px-6 py-3 bg-opacity-30 font-bold text-[#5964e0]"
                >
                  Company Site
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 border    bg-white p-6 md:p-10">
          <div>
            <div className="flex gap-x-3 items-center">
              <h1 className="text-[#6e8098]">{singleCardData?.postedAt}</h1>
              <span className="h-1 w-1 bg-[#6e8098] rounded-full"></span>
              <h1 className="text-[#6e8098]">{singleCardData?.contract}</h1>
            </div>
            <div className="flex flex-col md:flex-row md:justify-between md:items-center">
              <div>
                <h1 className="font-bold md:text-3xl mb-1 text-lg md:mb-2">
                  {singleCardData?.position}
                </h1>
                <p className="text-[#5964e0] mb-2 md:mb-0 text-sm">
                  {singleCardData?.location}
                </p>
              </div>
              <a target="_blank" href={`${singleCardData?.apply}`}>
                <button className="text-white w-full font-bold duration-300 ease-in-out hover:bg-opacity-70 bg-[#5964e0] rounded-lg p-3 px-8">
                  Apply Now
                </button>
              </a>
            </div>
            <h1 className="mt-[40px] text-[#6e8098]">
              {singleCardData?.description}
            </h1>
            <h2 className="py-8 font-bold text-2xl">Requirements</h2>
            <p className="text-[#6e8098]">
              {singleCardData?.requirements.content}
            </p>
            <div className="my-6 text-[#6e8098] space-y-2">
              <div className="flex relative ">
                <div className="h-2 absolute top-2 w-2 bg-gray-500 rounded-lg"></div>
                <p className="pl-4">{singleCardData?.requirements.items[0]}</p>
              </div>
              <div className="flex relative ">
                <div className="h-2 absolute top-2 w-2 bg-gray-500 rounded-lg"></div>
                <p className="pl-4">{singleCardData?.requirements.items[1]}</p>
              </div>
              <div className="flex relative ">
                <div className="h-2 absolute top-2 w-2 bg-gray-500 rounded-lg"></div>
                <p className="pl-4">{singleCardData?.requirements.items[2]}</p>
              </div>
              <div className="flex relative ">
                <div className="h-2 absolute top-2 w-2 bg-gray-500 rounded-lg"></div>
                <p className="pl-4">{singleCardData?.requirements.items[3]}</p>
              </div>
            </div>

            <h2 className="py-8 font-bold text-2xl">What You Will Do</h2>
            <div>
              <h1 className="text-[#6e8098]">{singleCardData?.role.content}</h1>
              <div className="my-6 text-[#6e8098] space-y-2">
                <div className="flex relative ">
                  <div className="h-2 absolute top-2 w-2 bg-gray-500 rounded-lg"></div>
                  <p className="pl-4">{singleCardData?.role.items[0]}</p>
                </div>
                <div className="flex relative ">
                  <div className="h-2 absolute top-2 w-2 bg-gray-500 rounded-lg"></div>
                  <p className="pl-4">{singleCardData?.role.items[1]}</p>
                </div>
                <div className="flex relative ">
                  <div className="h-2 absolute top-2 w-2 bg-gray-500 rounded-lg"></div>
                  <p className="pl-4">{singleCardData?.role.items[2]}</p>
                </div>
                <div className="flex relative ">
                  <div className="h-2 absolute top-2 w-2 bg-gray-500 rounded-lg"></div>
                  <p className="pl-4">{singleCardData?.role.items[3]}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FooterSingle singleCardData={singleCardData} />
    </>
  );
}

function FooterSingle({
  singleCardData,
}: {
  singleCardData: SingleCarddProps | null;
}) {
  return (
    <footer className="bg-white    ">
      <div className="max-w-[760px]  flex justify-between items-center mx-auto py-4">
        <div className="hidden md:flex flex-col">
          <h1 className="font-bold text-lg">{singleCardData?.position}</h1>
          <h2 className="text-[#6e8098]">{singleCardData?.company}</h2>
        </div>
        <a target="_blank" className="w-full md:w-auto px-6 md:px-0" href={`${singleCardData?.apply}`}>
          <button className="text-white  md:w-auto w-full font-bold duration-300 ease-in-out hover:bg-opacity-70 bg-[#5964e0] rounded-lg p-3 px-8">
            Apply Now
          </button>
        </a>
      </div>
    </footer>
  );
}
