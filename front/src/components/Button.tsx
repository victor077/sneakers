import React, { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVarinat = "primary" | "secondary";
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: ButtonVarinat;
  children: ReactNode;
}

const Button = ({ children, variant, ...buttonProps }: ButtonProps) => {
  const varinat_bg_light =
    "bg-slate-200 hover:bg-slate-100 :bg-slate-100  text-base text-zinc-900 py-2 px-4 border rounded-xl shadow-sm shadow-zinc-600 font-semibold tracking-wide";
  const variant_bg_dark =
    "bg-zinc-900 hover:bg-zinc-800 text-base text-slate-100 py-2 px-4 border rounded-xl shadow-lg shadow-slate-200 font-semibold tracking-wide";

  return (
    <button
      {...buttonProps}
      className={variant === "primary" ? varinat_bg_light : variant_bg_dark}
    >
      {children}
    </button>
  );
};

export default Button;
