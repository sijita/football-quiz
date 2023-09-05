import { useQuestionsStore } from "../store/questions";

export default function useStartGame() {
  const fetchQuestions = useQuestionsStore((state) => state.fetchQuestions);

  const handleClick = () => {
    fetchQuestions();
  };

  return {
    handleClick,
  };
}
