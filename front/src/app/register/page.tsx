import React from "react";
import FormRegister from "./components/formRegister";
import Image from "next/image";
import register from "../../../assests/registerPhoto.svg";
import CardLoginRegister from "@/components/CardLoginRegister";

const Page = () => {
  return (
    <CardLoginRegister
      title="Cadastre - se"
      form={<FormRegister />}
      image={<Image alt="register" className="w-full h-full" src={register} />}
    />
  );
};

export default Page;
