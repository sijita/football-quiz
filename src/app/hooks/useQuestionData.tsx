import { useQuestionsStore } from "../store/questions";

export default function useQuestionData() {
  const questions = useQuestionsStore((state) => state.questions);
  const currentQuestion = useQuestionsStore((state) => state.currentQuestion);
  const questionInfo = questions[currentQuestion];
  const goToNextQuestion = useQuestionsStore((state) => state.goToNextQuestion);
  const goToPreviousQuestion = useQuestionsStore(
    (state) => state.goToPreviousQuestion
  );
  const reset = useQuestionsStore((state) => state.reset);

  let correct = 0;
  let incorrect = 0;
  let unanswered = 0;

  questions.forEach((question) => {
    const { userSelectedAnswer, correctAnswer } = question;
    if (userSelectedAnswer == null) unanswered++;
    else if (userSelectedAnswer === correctAnswer) correct++;
    else incorrect++;
  });

  return {
    correct,
    incorrect,
    unanswered,
    questions,
    currentQuestion,
    questionInfo,
    goToNextQuestion,
    goToPreviousQuestion,
    reset,
  };
}
