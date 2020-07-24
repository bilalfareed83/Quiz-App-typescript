import React, { useState } from "react";
import "aos/dist/aos.css"; // You can also use <link> for styles

const QuestionCard: React.FC<any> = ({ options, question, handleSubmit }) => {
  const [selectItem, setSelectItem] = useState("");

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectItem(e.target.value);
  };

  return (
    <div className="div-body">
      <div className="div-question" data-aos="zoom-in" data-aos-delay="600">
        Q. {question}
      </div>
      <form
        onSubmit={(e) => handleSubmit(e, selectItem)}
        className="form"
        data-aos="fade-up"
        data-aos-delay="600"
      >
        {options.map((opt: string, i: number) => {
          return (
            <div
              key={i}
              className="div-option"
              data-aos="fade-up"
              data-aos-delay="600"
            >
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
