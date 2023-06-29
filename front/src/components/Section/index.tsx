import React from "react";
import Image from "next/image";

import boneco from "../../../assests/bonecoNike.svg";
import FormEmail from "./components/formEmail";

const Section = () => {
  return (
    <div className="flex justify-center flex-col items-center bg-[#202024] static py-40 gap-8 ">
      <div className="w-10/12 flex items-center justify-between">
        <div className="flex flex-col gap-6">
          <h1 className="text-5xl text-[#FFF] -tracking-tighter font-mono w-1/2 font-semibold ">
            Mude o jogo, eleve-se ao próximo nível no mundo do tênis!!
          </h1>
          <p className="text-gray-300 text-lg ">
            Mantenha-se atualizado e receba todas as últimas notícias.
          </p>
          <FormEmail />
        </div>
        <div className="absolute right-8 top-3/4">
          <Image alt="nike" src={boneco} />
        </div>
      </div>
      <div className=" flex flex-col justify-center items-center gap-2">
        <hr className="text-gray-300 h-2 w-1/2 font-semibold" />
        <p className="text-gray-300 text-2xl font-normal text-center w-2/3">
          Com a chegada de novos desafios nos últimos anos, muitas profissões
          têm se adaptado por meio do uso da tecnologia. Não fique para trás e
          veja os benefícios de ter seu próprio negócio sem burocracia.
        </p>
      </div>
    </div>
  );
};

export default Section;
