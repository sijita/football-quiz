"use client";
import StartButon from "./StartButton";
import Question from "./Question";
import Footer from "./ui/Footer";
import Nav from "./ui/Nav";
import useQuestionData from "../hooks/useQuestionData";
import { useEffect, useState } from "react";
import { Spinner } from "@nextui-org/react";

export default function Game() {
  const [loading, setLoading] = useState(true);
  const {
    questions,
    currentQuestion,
    questionInfo,
    goToNextQuestion,
    goToPreviousQuestion,
    correct,
    incorrect,
    unanswered,
    reset,
  } = useQuestionData();

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <>
      {loading ? (
        <div className="flex gap-5 items-center animate-pulse">
          <p className="text-2xl">Cargando...</p>
          <Spinner color="default" size="sm" />
        </div>
      ) : (
        <>
          {!questions.length && <StartButon />}
          {questions.length > 0 && (
            <div className="flex flex-col gap-10 border border-default p-5 rounded-xl">
              <Nav
                {...{
                  questions,
                  currentQuestion,
                  correct,
                  incorrect,
                  unanswered,
                }}
              />
              <Question info={questionInfo} />
              <Footer
                {...{
                  questions,
                  currentQuestion,
                  goToNextQuestion,
                  goToPreviousQuestion,
                  reset,
                }}
              />
            </div>
          )}
        </>
      )}
    </>
  );
}
