import { Button, ButtonGroup, Divider } from "@nextui-org/react";
import { HiArrowCircleLeft, HiArrowCircleRight } from "react-icons/hi";
import { type Question as QuestionType } from "@/app/types";

export default function Footer({
  questions,
  currentQuestion,
  goToNextQuestion,
  goToPreviousQuestion,
  reset,
}: {
  questions: QuestionType[];
  currentQuestion: number;
  goToNextQuestion: () => void;
  goToPreviousQuestion: () => void;
  reset: () => void;
}) {
  return (
    <div className="flex flex-col gap-5">
      <ButtonGroup variant="light" fullWidth>
        <Button
          onClick={goToPreviousQuestion}
          isDisabled={currentQuestion === 0}
        >
          <HiArrowCircleLeft size={20} />
          Anterior
        </Button>
        <Divider orientation="vertical" />
        <Button
          onClick={goToNextQuestion}
          isDisabled={currentQuestion === questions.length - 1}
        >
          Siguiente <HiArrowCircleRight size={20} />
        </Button>
      </ButtonGroup>
      <Button onClick={reset} variant="flat" fullWidth>
        Resetear juego
      </Button>
    </div>
  );
}
