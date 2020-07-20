import { QuizType, QuestionType } from "./../Types/quiz_types";

const shuffleArray = (array: any[]) =>
  [...array].sort(() => Math.random() - 0.5);

export const getQuizData = async (
  totalQuestions: number,
  level: string
): Promise<QuestionType[]> => {
  const res = await fetch(
    `https://opentdb.com/api.php?amount=${totalQuestions}&difficulty=${level}&type=multiple`
  );

  const { results } = await res.json();

  const quiz: QuestionType[] = results.map((obj: QuizType, i: number) => {
    return {
      question: obj.question,
      answer: obj.correct_answer,
      option: shuffleArray(obj.incorrect_answers.concat(obj.correct_answer)),
    };
  });
  return quiz;
};
