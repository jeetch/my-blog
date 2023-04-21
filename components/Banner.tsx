"use client";
import { FC } from "react";
import Background from "./Background";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";

interface BannerProps {}

const Banner: FC<BannerProps> = ({}) => {
  return (
    <div className="relative flex-col sm:flex sm:flex-row gap-2 w-full items-center z-10 shadow-sm text-left  py-16 sm:py-12 px-4 sm:px-12 ">
      <Background />
      <Image
        className="mb-8 sm:mb-0 sm:p-6 w-1/3 "
        height="1000"
        width="1000"
        alt="8bit"
        src="/images/8bitpix.png"
      />
      <div className="flex w-full sm:w-2/3 flex-col">
        <h2 className="text-md text-lime-400 ">Hi, I'm Jeet 👋 </h2>
        <h2 className="text-3xl text-white font-bold shadow-lime-400">
          {" "}
          <TypeAnimation
            sequence={[
              // Same String at the start will only be typed once, initially
              "I like building websites",
            ]}
            speed={10}
            repeat={0}
            cursor={false}
          />
        </h2>

        <p className="text-slate-400 text-sm pt-2 mb-6 sm:mb-0">
          I'm a data scientist at{" "}
          <a href="https://www.speklesolutions.com" className="hover:underline">
            Spekle
          </a>
          . I aspire to build a lot of useful, cool stuff. I write about my
          journey here..
        </p>
      </div>
    </div>
  );
};

export default Banner;
