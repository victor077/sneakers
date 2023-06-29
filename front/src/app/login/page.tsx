import React from "react";

import CardLoginRegister from "@/components/CardLoginRegister";
import FormLogin from "./components/formLogin";
import Image from "next/image";
import fotoLogin from "../../../assests/loginPhoto.svg";

const Page = () => {
  return (
    <CardLoginRegister
      title="Login"
      form={<FormLogin />}
      image={<Image alt="" src={fotoLogin} className="w-full h-full" />}
    ></CardLoginRegister>
  );
};

export default Page;
