export interface Question {
  id: number;
  question: string;
  answers: (string | number)[];
  correctAnswer: number;
  userSelectedAnswer?: number;
  isCorrectUserAnswer?: boolean;
}
