import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
export default function App() {


  return (
    <section
      className="bg-cover bg-top w-full min-h-screen my-component"
    >
      <div className="max-w-[1400px] mx-auto p-10 md:p-20">
        <img src="/logo.svg" alt="" />
        <div className="mt-20 flex flex-col lg:flex-row gap-x-12">
          <img className="lg:w-[50%] object-cover"  src="/illustration-mockups.svg" alt="" />
          <div className="lg:w-[50%] lg:text-left text-center text-white  mt-10 md:mt-0 space-y-8 xl:mt-10">
            <h1 className="md:text-4xl xl:text-5xl text-2xl leading-[40px] tracking-wider md:leading-[60px]">
              Build The community <br /> Your Fans Will Love
            </h1>
            <p className="leading-[24px] opacity-60">
              Huddle re-imagines the way we build communities. You have a voice,
              but so does your audience. Create connections with your users as
              you engage in genuine discussion.
            </p>
            <button
              className="bg-white text-hover default-color duration-150 hover:text-white transition-all shadow-2xl  py-4 text-lg px-16 border border-black rounded-full"
              style={{}}
            >
              Register
            </button>
          </div>
        </div>
        <div className="flex justify-center mt-[30px] lg:justify-end items-center">
          <Icons href="https://www.facebook.com/" icon={<FaFacebookF />} />
          <Icons href="https://twitter.com/" icon={<FaTwitter />} />
          <Icons href="https://www.instagram.com/" icon={<FaInstagram />} />
        </div>
      </div>
    </section>
  );
}

function Icons({ icon, href }: { icon: React.ReactElement; href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      className="text-white ml-4 icon-color cursor-pointer duration-150 text-lg border border-white rounded-full p-2"
    >
      {icon}
    </a>
  );
}
