import { FC } from "react";

interface BackgroundProps {}

const Background: FC<BackgroundProps> = ({}) => {
  return (
    <div className="absolute top-0 left-0 -z-10 h-full w-full flex justify-center">
      <div className="relative h-full w-full">
        <div className="absolute top-0 left-1/4 w-56 h-56 bg-lime-900 rounded-full filter blur-2xl opacity-30 animate-blob "></div>
        <div className="absolute top-0 left-0 w-56 h-56 bg-green-900 rounded-full   filter blur-2xl opacity-30 animate-blob animation-delay-2000"></div>
      </div>
    </div>
  );
};

export default Background;
