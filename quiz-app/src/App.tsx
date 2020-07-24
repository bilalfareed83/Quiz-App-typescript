import React, { useEffect, useState } from "react";
import "./App.css";
import { getQuizData } from "./../src/services/quiz_service";
import { QuestionType } from "./Types/quiz_types";
import QuestionCard from "./Components/QuestCard";

function App() {
  const [quiz, setQuiz] = useState<QuestionType[]>([]);
  let [currentStep, setCurrentStep] = useState(0);
  let [score, setScore] = useState(0);
  let [showScore, setShowScore] = useState(false);

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

  const handleSubmit = (e: React.FocusEvent<EventTarget>, userAns: String) => {
    e.preventDefault();
    console.log(userAns);
    let currentQuestion: QuestionType = quiz[currentStep];
    if (userAns === currentQuestion.answer) {
      setScore(++score);
    }
    if (currentStep !== quiz.length - 1) {
      setCurrentStep(++currentStep);
    } else {
      setCurrentStep(0);
      // setScore(0);
      setShowScore(true);
    }
  };
  console.log(score);
  return (
    <div
      className="App"
      data-aos="fade-zoom-in"
      data-aos-easing="ease-in-back"
      data-aos-delay="300"
      data-aos-offset="0"
    >
      <div className="div-quiz">
        <div className="div-header">Quiz</div>
        {showScore ? (
          <div className="scoreCard" data-aos="zoom-in" data-aos-delay="400">
            Your score is {score}/5 <br />
            <br />
            <button
              className="div-button-2"
              onClick={() => {
                setScore(0);
                setShowScore(false);
                window.location.reload(false);
              }}
            >
              Start Agian
            </button>
          </div>
        ) : (
          <QuestionCard
            options={quiz[currentStep].option}
            question={quiz[currentStep].question}
            handleSubmit={handleSubmit}
          />
        )}
      </div>
    </div>
  );
}

export default App;
