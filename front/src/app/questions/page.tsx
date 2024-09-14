"use client";
import React from "react";

import CardQuestion from "./components/cardQuestion";

const Page = () => {
  const listQuestions = [
    {
      id: 1,
      question: "Quais sites você costuma acessar para pesquisar sobre seus tenis ?",
      options: ['Adidas', 'Authentic feet', 'Nike', 'Outros']
    },
    {
      id: 2,
      question: "Pergunta dois ?",
      options: ['Adidas', 'Authentic feet', 'Nike', 'Outros']
    },
    {
      id: 3,
      question: "Pergunta três",
      options: ['Adidas', 'Authentic feet', 'Nike', 'Outros']
    },
  ]
  return (
    <div className=" h-96 flex items-center justify-center">
      <CardQuestion
        list={listQuestions}
      />
    </div>
  );
};

export default Page;
