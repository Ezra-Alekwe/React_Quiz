export interface IconProps {
  width?: number;
  height?: number;
  fill?: string;
  strokeWidth?: number;
  strokeColor?: string;
}

export interface QuizQuestion {
  number: number;
  question: string;
  option1: string;
  option2: string;
  option3: string;
  option4: string;
  correctAnswer: string;
}
