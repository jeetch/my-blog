"use client";
import { FC } from "react";
import Background from "./Background";
import { TypeAnimation } from "react-type-animation";

interface BannerProps {}

const Banner: FC<BannerProps> = ({}) => {
  return (
    <div className="relative flex flex-col gap-2 w-full z-10 shadow-sm text-left  py-12 px-4 sm:px-12 ">
      <Background />
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
        />
      </h2>

      <p className="text-slate-400 text-sm pt-2 ">
        I'm a data scientist at{" "}
        <a href="https://www.speklesolutions.com" className="hover:underline">
          Spekle
        </a>
        . I aspire to build a lot of useful, good-looking, cool stuff. Welcome
        to my digital garden 🌱
      </p>
    </div>
  );
};

export default Banner;
