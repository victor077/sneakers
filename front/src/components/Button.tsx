import React, { PropsWithChildren } from "react";

const Button = ({ children }: PropsWithChildren) => {
  return (
    <button className="bg-slate-50 text-base text-zinc-900 py-2 px-4 border rounded-xl shadow-lg shadow-zinc-800 font-semibold">
      {children}
    </button>
  );
};

export default Button;
