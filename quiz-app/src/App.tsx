import React, { useEffect, useState } from "react";
import "./App.css";
import { getQuizData } from "./../src/services/quiz_service";
import { QuestionType } from "./Types/quiz_types";
import QuestionCard from "./Components/QuestCard";

function App() {
  const [quiz, setQuiz] = useState<QuestionType[]>([]);
  let [currentStep, setCurrentStep] = useState(0);

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

  console.log(quiz);
  const handleSubmit = (e: React.FocusEvent<EventTarget>) => {
    e.preventDefault();
    if (currentStep !== quiz.length - 1) {
      setCurrentStep(++currentStep);
    } else {
      alert("Quiz completed");
      setCurrentStep(0);
    }
  };
  return (
    <div className="App">
      <h1>Quiz</h1>
      <QuestionCard
        options={quiz[currentStep].option}
        question={quiz[currentStep].question}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default App;
