import { create } from "zustand";
import { type Question } from "../types";
import axios from "axios";
import confetti from "canvas-confetti";
import { persist } from "zustand/middleware";

interface State {
  questions: Question[];
  currentQuestion: number;
  fetchQuestions: () => Promise<void>;
  selectAnswer: (questionId: number, answerIndex: number) => void;
  goToNextQuestion: () => void;
  goToPreviousQuestion: () => void;
  reset: () => void;
}

export const useQuestionsStore = create<State>()(
  persist(
    (set, get) => ({
      questions: [],
      currentQuestion: 0,
      fetchQuestions: async () => {
        const { data } = await axios.get("/api/questions");
        const questions = data.sort(() => Math.random() - 0.5);
        set({ questions });
      },
      selectAnswer: (questionId: number, answerIndex: number) => {
        const { questions } = get();
        const newQuestions = structuredClone(questions);
        const questionIndex = newQuestions.findIndex(
          (question) => question.id === questionId
        );
        const questionInfo = newQuestions[questionIndex];
        const isCorrectUserAnswer = questionInfo.correctAnswer === answerIndex;

        if (isCorrectUserAnswer) confetti();

        newQuestions[questionIndex] = {
          ...questionInfo,
          isCorrectUserAnswer,
          userSelectedAnswer: answerIndex,
        };

        set({ questions: newQuestions });
      },
      goToNextQuestion: () => {
        const { currentQuestion, questions } = get();
        const nextQuestion = currentQuestion + 1;

        if (nextQuestion < questions.length) {
          set({ currentQuestion: nextQuestion });
        }
      },
      goToPreviousQuestion: () => {
        const { currentQuestion } = get();
        const previousQuestion = currentQuestion - 1;

        if (previousQuestion >= 0) {
          set({ currentQuestion: previousQuestion });
        }
      },
      reset: () => {
        set({
          currentQuestion: 0,
          questions: [],
        });
      },
    }),
    {
      name: "questions",
    }
  )
);
