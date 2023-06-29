import React, { forwardRef } from "react";

import userIcon from "../../../assests/user.svg";
import Image from "next/image";

import InputBase, { InputBaseProps } from "@/components/input/InputBase";

interface IconInputProps extends InputBaseProps {}

const IconInput = forwardRef<HTMLInputElement, IconInputProps>(
  ({ ...props }, ref) => {
    return (
      <div className="w-56 relative py-6">
        <InputBase
          {...props}
          ref={ref}
          placeholder={props.placeholder}
          isIcon
        />
        <Image
          className="absolute left-2 top-1/2 -translate-y-1/2"
          alt="icon user"
          src={userIcon}
        />
      </div>
    );
  }
);

export default IconInput;
