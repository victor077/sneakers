import { Question, QuestionProps } from "@/app/questions/components/question";
import Button from "@/components/Button";
import React, { useState } from "react";


interface ListQuestions {
    list: QuestionProps[]
}
const CardQuestion = ({ list }: ListQuestions) => {
    const [step, setStep] = useState<number>(1)
    function nextStep() {
        setStep(step + 1)
    }

    function backStep() {
        setStep(step - 1)
    }

    const lastStep = list.length



    console.log(lastStep);


    return (
        <div className="w-4/5 bg-gray-100 shadow-sm shadow-slate-400 border rounded-md ">
            <div className="flex  justify-center py-10 px-16 gap-10 flex-col">
                <header className="flex gap-4 flex-col items-center">
                    <p className="md:text-4xl font-semibold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">Feedback SNKS</p>
                    <p className="md:text-2xl font-normal text-gray-800">
                        Esse formulario tera como intuito conseguir filtrar os tenis que
                        estão sendo mais procurados no mundo dos tenis nossa nova loja de
                        tenis terá como objetivo facilitar a sua procura dos tenis pouco
                        visto nas lojas tradicionais
                    </p>
                </header>
                {list.map((value) => (
                    <>
                        {value.id == step && (
                            < Question id={value.id} question={value.question} options={value.options} />
                        )}
                    </>
                ))}
                <footer className="flex justify-end items-center">
                    <div className="flex space-x-2">
                        {step === 1 ? (
                            <Button disabled onClick={backStep} color="outline">Voltar</Button>
                        ) : (
                            <Button onClick={backStep} color="outline">Voltar</Button>
                        )
                        }
                        {
                            step === lastStep ? (
                                <Button>Finalizar</Button>
                            ) : (
                                <Button onClick={nextStep}>Proximo</Button>
                            )
                        }
                    </div>
                </footer>
            </div >
        </div >
    );
};

export default CardQuestion;
