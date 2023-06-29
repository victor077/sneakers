import React, { ReactNode } from "react";

interface CardLoginRegisterProps {
  form: ReactNode;
  image: ReactNode;
  title: string;
}

const CardLoginRegister = ({ form, image, title }: CardLoginRegisterProps) => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-3/4 border rounded-3xl flex justify-between bg-gray-50 ">
        <div className="w-1/2 flex flex-col justify-center items-center gap-6">
          <h1 className="text-4xl font-bold text-zinc-700">{title}</h1>
          {form}
        </div>
        <div className="w-1/2">{image}</div>
      </div>
    </div>
  );
};

export default CardLoginRegister;
