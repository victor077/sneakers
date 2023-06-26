import React from "react";
import FormRegister from "./components/formRegister";
import Image from "next/image";
import register from "../../../assests/registerPhoto.svg";

const Page = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-3/4 border rounded-3xl flex justify-between bg-gray-50 ">
        <div className="w-1/2 flex flex-col justify-center items-center gap-6">
          <h1 className="text-4xl font-bold text-zinc-700">Register</h1>
          <FormRegister />
        </div>
        <div className="w-1/2">
          <Image alt="register" className="w-full h-full" src={register} />
        </div>
      </div>
    </div>
  );
};

export default Page;
