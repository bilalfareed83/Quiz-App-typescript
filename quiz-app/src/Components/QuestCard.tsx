import React, { useState } from "react";
// import Reveal from "react-reveal/Reveal";

const QuestionCard: React.FC<any> = ({ options, question, handleSubmit }) => {
  const [selectItem, setSelectItem] = useState("");

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectItem(e.target.value);
  };

  return (
    <div className="div-body">
      <div className="div-question">Q. {question}</div>
      {/* <Reveal effect="fadeInUp"> */}
      <form onSubmit={(e) => handleSubmit(e, selectItem)} className="form">
        {options.map((opt: string, i: number) => {
          return (
            <div key={i} className="div-option">
              <label>
                <input
                  required
                  type="radio"
                  name="opt"
                  value={opt}
                  onChange={onChangeHandler}
                  checked={selectItem === opt}
                />
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
