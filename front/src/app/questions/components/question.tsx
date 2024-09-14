import Button from "@/components/Button"

export interface QuestionProps {
    id: number
    question: string
    options: string[]
}


export const Question = ({ question, options }: QuestionProps) => {
    return (
        <>
            <div className="space-y-4">
                {/* Quais sites você costuma acessar para pesquisar sobre seus tenis ? */}
                <p className="md:text-xl font-normal text-gray-700">{question} </p>
                <ul className="space-y-1 md:text-lg font-normal text-gray-700 ">
                    {options.map((optiom) => (
                        <>
                            <li className="flex items-center"><input type="checkbox" className="mr-2 h-6 w-[20px] cursor-pointer" />{optiom}</li>
                        </>
                    ))}
                    {/* <li className="flex items-center"><input type="checkbox" className="mr-2 h-6 w-[20px]" />Authentic feet</li> */}
                    {/* <li className="flex items-center"><input type="checkbox" className="mr-2 h-6 w-[20px]" />Nike</li> */}
                    {/* <li className="flex items-center"><input type="checkbox" className="mr-2 h-6 w-[20px]" />Outros</li> */}
                </ul>
            </div>
           
        </>
    )
}
