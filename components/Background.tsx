import { FC } from "react";

interface BackgroundProps {}

const Background: FC<BackgroundProps> = ({}) => {
  return (
    <div className="absolute top-0 left-0 -z-10 h-full w-full flex justify-left">
      <div
        className="absolute w-72 h-72 bg-indigo-900 rounded-full 
      transform -translate-y-4 -translate-x-24 opacity-20 filter blur-xl animate-blob"
      ></div>
      <div
        className="absolute w-72 h-72 bg-red-900
      rounded-full transform -translate-y-4 translate-x-24 opacity-20 filter blur-xl animate-blob animation-delay-4000"
      ></div>
    </div>
  );
};

export default Background;
