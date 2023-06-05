export interface QuizQuestion {
  id: string;
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
  answers: string[];
  selectedAnswer?: string;
}

export interface QuizQuestionResponse {
  results: QuizQuestion[];
}
