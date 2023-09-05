import { type Question as QuestionType } from "@/app/types";
import { Divider } from "@nextui-org/react";
import { HiThumbDown, HiThumbUp, HiQuestionMarkCircle } from "react-icons/hi";

export default function Nav({
  questions,
  currentQuestion,
  correct,
  incorrect,
  unanswered,
}: {
  questions: QuestionType[];
  currentQuestion: number;
  correct: number;
  incorrect: number;
  unanswered: number;
}) {
  return (
    <div className="flex flex-col items-center justify-between gap-5">
      <p className="text-lg">
        {currentQuestion + 1} / {questions.length}
      </p>
      <div className="flex gap-5">
        <div className="text-lg flex items-center gap-2">
          <HiThumbUp /> <span>{correct}</span>
        </div>
        <Divider orientation="vertical" />
        <div className="text-lg flex items-center gap-2">
          <HiThumbDown /> <span>{incorrect}</span>
        </div>
        <Divider orientation="vertical" />
        <div className="text-lg flex items-center gap-2">
          <HiQuestionMarkCircle size={20} /> <span>{unanswered}</span>
        </div>
      </div>
    </div>
  );
}
