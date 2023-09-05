"use client";
import { Listbox, ListboxItem } from "@nextui-org/react";
import { useQuestionsStore } from "@/app/store/questions";
import { type Question as QuestionType } from "@/app/types";
import { getBackgroundColor } from "@/app/utils/getBackgroundColor";

export default function ListBox({ info }: { info: QuestionType }) {
  const selectAnswer = useQuestionsStore((state) => state.selectAnswer);

  const handleClick = (answerIndex: number) => () => {
    selectAnswer(info.id, answerIndex);
  };

  const keys = info.answers.map((_, i) => i.toString());

  const answers = info.answers.map((answer, index) => ({
    key: index,
    label: answer,
  }));

  return (
    <Listbox
      items={answers}
      onAction={(key) => handleClick(parseInt(key.toString()))()}
      disabledKeys={info.userSelectedAnswer != null ? keys : []}
      className="p-0"
    >
      {(item) => (
        <ListboxItem
          key={item.key}
          className={`bg-${getBackgroundColor(info, item.key)}`}
        >
          {item.label}
        </ListboxItem>
      )}
    </Listbox>
  );
}
