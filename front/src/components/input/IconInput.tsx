import React from "react";

import userIcon from "../../../assests/user.svg";
import Image from "next/image";

import InputBase from "@/components/input/InputBase";

const IconInput = () => {
  return (
    <div className="w-56 relative py-6">
      <InputBase placeholder="enter your email" />
      <Image
        className="absolute left-5 top-1/2 -translate-y-1/2"
        alt="icon user"
        src={userIcon}
      />
    </div>
  );
};

export default IconInput;
