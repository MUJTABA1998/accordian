import "./App.css";
import data from "./data";
import { useState } from "react";
import List from "./List";

function App() {
  const [questions, setQuestions] = useState(data);

  console.log(questions);

  return (
    <div className="w-full bg-secondary">
      <div className="main-container">
        <div className="flex items-center justify-center h-screen">
          <div className="flex flex-col items-center justify-center max-w-[700px] gap-5 px-10 py-10 bg-white rounded-md sm:flex-row drop-shadow-2xl">
            <h1 className="font-extrabold text-gray-600 capitalize text-md md:text-2xl">
              questions and there answers
            </h1>
            <div className="flex flex-col w-full gap-5">
              {questions.map((el) => (
                <List
                  answer={el.answer}
                  question={el.question}
                  key={el.id}
                  active={el.active}
                  questions={questions}
                  setQuestions={setQuestions}
                  id={el.id}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
