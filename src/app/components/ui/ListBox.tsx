"use client";
import { useState } from "react";
import { Listbox, ListboxItem } from "@nextui-org/react";
import { useQuestionsStore } from "@/app/store/questions";
import { type Question as QuestionType } from "@/app/types";

const getBackgroundColor = (info: QuestionType, index: number) => {
  const { userSelectedAnswer, correctAnswer } = info;

  if (index !== userSelectedAnswer && index !== correctAnswer)
    return "transparent";
  if (index === correctAnswer && index === userSelectedAnswer) return "success";
  if (index === userSelectedAnswer) return "danger";

  return "transparent";
};

export default function ListBox({ info }: { info: QuestionType }) {
  const selectAnswer = useQuestionsStore((state) => state.selectAnswer);

  const handleClick = (answerIndex: number) => () => {
    selectAnswer(info.id, answerIndex);
  };

  return (
    <Listbox
      aria-label="Single selection example"
      variant="faded"
      disallowEmptySelection
      selectionMode="single"
    >
      {info.answers.map((answer, i) => (
        <ListboxItem
          key={i}
          onClick={handleClick(i)}
          className={`bg-${getBackgroundColor(info, i)}`}
        >
          {answer}
        </ListboxItem>
      ))}
    </Listbox>
  );
}
