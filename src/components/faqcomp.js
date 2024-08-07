import React, { useState } from "react";
import "./faqcomp.css";
import plusicon from './Resource/plusicon.svg';
import minusicon from './Resource/minus.svg';

const FaqComp = (props) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <div id="pls" className={`faq ${activeIndex === 0 ? "active" : ""}`}>
        <h3 className="faq-title text-xl font-semibold">
          {props.question}
        </h3>
        <p className="faq-text text-lg">{props.ans}</p>
        <img
          src={activeIndex === 0 ? minusicon : plusicon}
          className="faq-toggle plusicon"
          onClick={() => toggleFaq(0)}
          alt={activeIndex === 0 ? "minus icon" : "plus icon"}
        />
      </div>
    </div>
  );
};

export default FaqComp;
