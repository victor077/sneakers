import React, { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVarinat = "primary" | "secondary";
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: ButtonVarinat;
  children: ReactNode;
}

const Button = ({ children, variant, ...buttonProps }: ButtonProps) => {
  const varinat_primary =
    "bg-slate-50 text-base text-zinc-900 py-2 px-4 border rounded-xl shadow-md shadow-zinc-600 font-semibold tracking-wide";
  const variant_secondary =
    "bg-zinc-900 text-base text-slate-100 py-2 px-4 border rounded-xl shadow-lg shadow-slate-200 font-semibold tracking-wide";

  return (
    <button
      {...buttonProps}
      className={variant === "primary" ? varinat_primary : variant_secondary}
    >
      {children}
    </button>
  );
};

export default Button;
