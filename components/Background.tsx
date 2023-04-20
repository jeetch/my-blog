import { FC } from "react";

interface BackgroundProps {}

const Background: FC<BackgroundProps> = ({}) => {
  return (
    <div className="absolute top-0 left-0 -z-10 h-full w-full flex justify-center">
      <div className="relative h-full w-full">
        <div className="absolute top-0 left-0 w-64 h-64 bg-lime-900 rounded-full filter blur-xl opacity-30 animate-blob "></div>
      </div>
    </div>
  );
};

export default Background;
