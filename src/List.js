import React from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const List = ({ question, answer, active, setQuestions, questions, id }) => {
  const handleShow = (id) => {
    const result = questions.map((el) =>
      el.id === id ? { ...el, active: !el.active } : { ...el, active: false }
    );
    setQuestions(result);
  };

  return (
    <div className="flex flex-col max-w-[500px] gap-2 px-2 py-2 border border-gray-400 rounded">
      <div className="relative flex items-center justify-between">
        <h2 className="tracking-wide text-gray-700 capitalize">{question}</h2>
        <span
          className="absolute text-gray-700 cursor-pointer right-3 top-2"
          onClick={() => handleShow(id)}
        >
          {!active ? <FaAngleDown /> : <FaAngleUp />}
        </span>
      </div>
      <p className="text-sm text-gray-400 capitalize">
        {active ? answer : null}
      </p>
    </div>
  );
};

export default List;
