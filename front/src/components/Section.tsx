import React from "react";
import Image from "next/image";

import boneco from "../../assests/bonecoNike.svg";
import InputBase from "./input/InputBase";
import IconInput from "./input/IconInput";
import Button from "./Button";

const Section = () => {
  return (
    <div className="flex justify-center flex-col items-center bg-[#202024] static py-40 gap-8 ">
      <div className="w-10/12 flex items-center justify-between">
        <div className="flex flex-col gap-6">
          <h1 className="text-5xl text-[#FFF] -tracking-tighter font-mono w-1/2 font-semibold ">
            Change the game move to the next level in the world of tennis!!
          </h1>
          <p className="text-gray-300 text-lg ">
            Stay up to date and receive all the latest news
          </p>
          <div className="flex items-center gap-8">
            <Button>Get start</Button>
            <IconInput />
          </div>
        </div>
        <div className="absolute right-8 top-3/4">
          <Image alt="nike" src={boneco} />
        </div>
      </div>
      <div className=" flex flex-col justify-center items-center gap-2">
        <hr className="text-gray-300 h-2 w-1/2 font-semibold" />
        <p className="text-gray-300 text-2xl font-bold text-center w-2/3">
          With the arrival of new challenges in recent years, many professions
          have adapted through the use of technology. Don't be left behind and
          see the benefits of having your own business without bureaucracy
        </p>
      </div>
    </div>
  );
};

export default Section;
