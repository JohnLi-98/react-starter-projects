import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Question = ({ title, info }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);
  const accordionHandler = () => {
    setAccordionOpen(!accordionOpen);
  };
  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={accordionHandler}>
          {accordionOpen ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {accordionOpen && <p>{info}</p>}
    </article>
  );
};

export default Question;
