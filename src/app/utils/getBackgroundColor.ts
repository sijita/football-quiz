import { type Question as QuestionType } from "@/app/types";

export const getBackgroundColor = (info: QuestionType, index: number) => {
  const { userSelectedAnswer, correctAnswer } = info;

  if (index !== userSelectedAnswer && index !== correctAnswer)
    return "transparent";
  if (index === correctAnswer && index === userSelectedAnswer) return "success";
  if (index === userSelectedAnswer) return "danger";

  return "transparent";
};
