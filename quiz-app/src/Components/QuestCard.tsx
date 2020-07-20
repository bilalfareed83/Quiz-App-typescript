import React from "react";

const QuestionCard: React.FC<any> = ({ options, question, handleSubmit }) => {
  return (
    <div>
      <div>
        <span>Q. </span>
        {question}
      </div>
      <form onSubmit={handleSubmit}>
        {options.map((opt: string, i: number) => {
          return (
            <div key={i}>
              <label>
                <input type="radio" value={opt} />
                {opt}
              </label>
            </div>
          );
        })}
        <input type="submit" />
      </form>
    </div>
  );
};

export default QuestionCard;
