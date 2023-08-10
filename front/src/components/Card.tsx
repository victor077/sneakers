import React, { PropsWithChildren, ReactNode } from "react";
import Button from "./Button";

interface CardProps {
  body: ReactNode;
  firstButton: ReactNode;
  secondButton?: ReactNode;
  lastButton: ReactNode;
}

const Card = ({ body, firstButton, secondButton, lastButton }: CardProps) => {
  return (
    <div className="w-4/5 bg-gray-100 shadow-sm shadow-slate-400 border rounded-md ">
      <div className="flex  justify-center py-10 px-16 gap-10 flex-col">
        <header className="flex gap-4 flex-col items-center">
          <p className="md:text-4xl font-semibold">Titulo</p>
          <p className="md:text-2xl font-normal text-gray-600">
            Esse formulario tera como intuito conseguir filtrar os tenis que
            estão sendo mais procurados no mundo dos tenis nossa nova loja de
            tenis terá como objetivo facilitar a sua procura dos tenis pouco
            visto nas lojas tradicionais
          </p>
        </header>
        {body}
        <footer className="flex justify-end items-center ">
          <div className="flex space-x-2">
            <span>{firstButton}</span>
            <span>{secondButton}</span>
            <span>{lastButton}</span>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Card;
