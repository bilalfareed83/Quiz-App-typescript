import React, { useState } from "react";
// import Reveal from "react-reveal/Reveal";

const QuestionCard: React.FC<any> = ({
  options,
  question,
  handleSubmit,
  onChangHandler,
  selectItem,
}) => {
  return (
    <div className="div-body">
      <div className="div-question">Q. {question}</div>
      {/* <Reveal effect="fadeInUp"> */}
      <form onSubmit={handleSubmit} className="form">
        {options.map((opt: string, i: number) => {
          return (
            <div key={i} className="div-option">
              <label>
                <input type="radio" value={opt} onChange={onChangHandler} />
                {opt}
              </label>
            </div>
          );
        })}

        <input type="submit" className="div-button" />
      </form>
      {/* </Reveal> */}
    </div>
  );
};

export default QuestionCard;
