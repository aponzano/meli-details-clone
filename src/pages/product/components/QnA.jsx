import {useState} from "react";

import {questionsData} from "../mock";

const quickActions = [
  "Costo y tiempo de envío",
  "Devoluciones gratis",
  "Medios de pago y promociones",
  "Garantía",
  "Cuotas sin tarjeta",
];

const Question = ({text}) => {
  return (
    <div className="group">
      <span>{text}</span>
      <span className="group-hover:visible invisible text-blue-500 ml-2 text-sm  hover:text-indigo-500 cursor-pointer">
        Denunciar
      </span>
    </div>
  );
};
const Answer = ({text}) => {
  return (
    <div className="group mt-1.5 ml-2">
      <span className="pr-2 text-neutral-400">└</span>
      <span className="text-neutral-500">{text}</span>
      <span className="group-hover:visible invisible text-blue-500 ml-2 text-sm  hover:text-indigo-500 cursor-pointer">
        Denunciar
      </span>
    </div>
  );
};

export const QnA = () => {
  const [questions, setQuestions] = useState(questionsData);
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue === "") {
      return;
    }
    const newQuestion = {
      date_created: new Date().toISOString(),
      status: "UNANSWERED",
      text: inputValue,
      id: +new Date(),
    };

    setQuestions([...questions, newQuestion]);
    setInputValue("");
  };

  return (
    <div className="px-11 mb-12">
      <h2 className="text-2xl leading-tight">Preguntas y respuestas</h2>
      <div className="mt-10" id="quickActions">
        <h3 className="font-semibold pb-2 text-lg leading-tight">¿Qué querés saber?</h3>
        <div className="flex space-x-3">
          {quickActions.map((title, _index) => {
            return (
              <div
                key={_index}
                className="bg-blue-100 rounded mt-5 text-sm text-blue-500 h-8 leading-8 px-4 font-semibold cursor-pointer"
              >
                {title}
              </div>
            );
          })}
        </div>
      </div>
      <div className="mt-10">
        <h3 className="font-semibold text-lg leading-tight">Buscá lo que querés saber</h3>
        <div className="mt-4">
          <form className="" onSubmit={handleSubmit}>
            <div className="relative items-center rounded-md min-h-12 ring-1 flex ring-gray-300  focus-within:ring-blue-500 focus-within:ring-2">
              <input
                className="block pl-4 placeholder:text-gray-300 w-full h-6 pr-16  outline-none"
                maxLength={50}
                placeholder="Escribí una pregunta o palabra clave..."
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <div className="absolute inset-y-0 right-0 flex items-center">
                <button className="bg-blue-500 rounded-e w-16 h-full text-2xl pb-0.5 ">🔍</button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="mt-10">
        <h3 className="font-semibold text-lg leading-tight">Últimas realizadas</h3>
        <div className="space-y-6 mt-6">
          {[...questions]
            .sort((a, b) => new Date(b.date_created).getTime() - new Date(a.date_created).getTime())
            .map((q) => {
              return (
                <div key={q.id}>
                  <Question text={q.text} />
                  {q.status === "ANSWERED" && <Answer text={q.answer.text} />}
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};
