import React, { InputHTMLAttributes } from "react";

interface InputBaseProps extends InputHTMLAttributes<HTMLInputElement> {}

const InputBase = (props: InputBaseProps) => {
  return (
    <input
      {...props}
      className="bg-[#121214] shadow-md border  border-solid border-gray-300 text-gray-300 rounded-lg py-2 pl-16 outline-none "
    />
  );
};

export default InputBase;
