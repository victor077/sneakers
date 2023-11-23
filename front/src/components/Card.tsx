import React, { ReactNode } from "react";
interface CardProps {
  body: ReactNode;
}

const Card = ({ body }: CardProps) => {
  return (
    <div className="w-4/5 bg-gray-100 shadow-sm shadow-slate-400 border rounded-md ">
      <div className="flex  justify-center py-10 px-16 gap-10 flex-col">
        <header className="flex gap-4 flex-col items-center">
          <p className="md:text-4xl font-semibold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent ">Feedback SNKS</p>
          <p className="md:text-2xl font-normal text-gray-800">
            Esse formulario tera como intuito conseguir filtrar os tenis que
            estão sendo mais procurados no mundo dos tenis nossa nova loja de
            tenis terá como objetivo facilitar a sua procura dos tenis pouco
            visto nas lojas tradicionais
          </p>
        </header>
        {body}
      </div>
    </div>
  );
};

export default Card;
