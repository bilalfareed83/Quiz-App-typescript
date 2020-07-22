import React, { useEffect, useState, ReactEventHandler } from "react";
import "./App.css";
import { getQuizData } from "./../src/services/quiz_service";
import { QuestionType } from "./Types/quiz_types";
import QuestionCard from "./Components/QuestCard";

function App() {
  const [quiz, setQuiz] = useState<QuestionType[]>([]);
  let [currentStep, setCurrentStep] = useState(0);
  let [score, setScore] = useState(0);
  const [selectItem, setSelectItem] = useState("");

  useEffect(() => {
    async function fetchData() {
      const data = await getQuizData(5, "easy");
      setQuiz(data);
    }
    fetchData();
  }, []);

  if (!quiz.length) {
    return <h3>loading...</h3>;
  }

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectItem(e.target.value);
  };

  const handleSubmit = (e: React.FocusEvent<EventTarget>) => {
    e.preventDefault();
    if (currentStep !== quiz.length - 1) {
      setCurrentStep(++currentStep);
    } else {
      alert("Quiz completed");
      setCurrentStep(0);
      setScore(0);
    }
  };
  console.log(selectItem);
  return (
    <div className="App">
      <div className="div-quiz">
        <div className="div-header">Quiz</div>
        <QuestionCard
          options={quiz[currentStep].option}
          question={quiz[currentStep].question}
          handleSubmit={handleSubmit}
          onChangeHandler={onChangeHandler}
          selectItem={selectItem}
        />
      </div>
    </div>
  );
}

export default App;
