"use client";
import StartButon from "./StartButton";
import { useQuestionsStore } from "../store/questions";
import Question from "./Question";

export default function Game() {
  const questions = useQuestionsStore((state) => state.questions);
  const currentQuestion = useQuestionsStore((state) => state.currentQuestion);

  const questionInfo = questions[currentQuestion];

  return (
    <div>
      {!questions.length && <StartButon />}
      {questions.length > 0 && <Question info={questionInfo} />}
    </div>
  );
}
