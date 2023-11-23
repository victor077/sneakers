import React, { ComponentProps } from "react";
import { tv, VariantProps } from "tailwind-variants"

const button = tv({
  base: ' tracking-wide text-base border rounded-md shadow-sm font-semibold',
  variants: {
    size: {
      default: 'h-10 w-24',
      sm: 'h-8 px-3',
      xs: 'h-6 px-2 text-xs',
      full: "w-full h-10"
    },
    color: {
      primary: 'bg-gray-800 hover:bg-gray-950 text-gray-100 shadow-gray-900 hover:shadow-gray-950 border-none',
      outline: 'bg-transparent text-gray-900 tracking-wide text-base border border-zinc-400  hover:border-gray-950 rounded-md shadow-sm shadow-gray-900',
      secondary: 'bg-gray-200 hover:bg-gray-100 text-gray-800 shadow-gray-900 hover:shadow-gray-950 border-none'
    },
  },
  defaultVariants: {
    size: "default",
    color: "primary"
  },
})

export type ButtonProps = ComponentProps<'button'> & VariantProps<typeof button> & {

}


const Button = ({ color, size, ...buttonProps }: ButtonProps) => {
  return (
    <button
      {...buttonProps}
      className={button({ color, size })}
    >
      {buttonProps.children}
    </button>
  );
};

export default Button;
