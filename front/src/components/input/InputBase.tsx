import React, { InputHTMLAttributes, forwardRef } from "react";

interface InputBaseProps extends InputHTMLAttributes<HTMLInputElement> {
  title?: string;
  isIcon?: boolean;
}

const InputBase = forwardRef<HTMLInputElement, InputBaseProps>(
  ({ title, isIcon, ...props }, ref) => {
    const inputDefault = `bg-transparent p-2 outline-none shadow-md border  border-solid border-gray-300 text-gray-600 rounded-lg`;
    const inputWithIcon = `bg-zinc-900 py-2 pl-16 outline-none shadow-md border  border-solid border-gray-300 text-gray-300 rounded-lg`;
    const labelDefault = `text-base text-gray-600 flex text-start`;
    return (
      <div className="flex flex-col justify-start gap-1">
        <label className={title ? labelDefault : "hidden"}>{title}</label>
        <input
          {...props}
          ref={ref}
          className={isIcon ? inputWithIcon : inputDefault}
        />
      </div>
    );
  }
);

export default InputBase;
