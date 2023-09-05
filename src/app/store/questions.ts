import { create } from "zustand";
import { type Question } from "../types";
import axios from "axios";

interface State {
  questions: Question[];
  currentQuestion: number;
  fetchQuestions: () => Promise<void>;
  selectAnswer: (questionId: number, answerIndex: number) => void;
}

export const useQuestionsStore = create<State>((set, get) => ({
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

    newQuestions[questionIndex] = {
      ...questionInfo,
      isCorrectUserAnswer,
      userSelectedAnswer: answerIndex,
    };

    set({ questions: newQuestions });
  },
}));
