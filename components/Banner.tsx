"use client";
import { FC } from "react";
import Background from "./Background";
import Image from "next/image";
import { motion } from "framer-motion";

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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.3 } }}
          exit={{ opacity: 0, y: 20 }}
          className="text-md text-lime-400 "
        >
          Hi, I'm Jeet 👋{" "}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.6 } }}
          exit={{ opacity: 0, y: 20 }}
          className="text-3xl text-white font-bold shadow-lime-400"
        >
          I like building websites
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.9 } }}
          exit={{ opacity: 0, y: 20 }}
          className="text-slate-400 text-sm pt-2 mb-6 sm:mb-0"
        >
          Mostly Harmless. MBA Candidate at McCombs School of Business, University of Texas Austin 🤘 Love data, design and code 👨‍💻 
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;
