import React, { useState } from "react";
import QuizModal from "./components/QuizModal";
import QuizNavigation from "./components/QuizNavigation";
import { quizData } from "../../../utils/quizData";
import ScoreDialog from "./components/ScoreDialog";

function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<string[]>(
    Array(quizData.length).fill("q")
  );
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswer = (questionIndex: number, answer: string) => {
    const newAnswers = [...userAnswers];
    newAnswers[questionIndex] = answer;
    setUserAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const navigateToQuestion = (index: number) => {
    setCurrentQuestion(index);
  };

  const calculateScore = () => {
    let totalScore = 0;
    userAnswers.forEach((answer, index) => {
      if (answer === quizData[index].correctAnswer) {
        totalScore++;
      }
    });
    setScore(totalScore);
    setShowScore(true);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setUserAnswers(Array(quizData.length).fill("q"));
    setShowScore(false);
    setScore(0);
  };

  const getScoreComment = () => {
    const percentage = (score / quizData.length) * 100;
    if (percentage === 100) return "Perfect! Outstanding work!";
    if (percentage >= 80) return "Excellent! Great job!";
    if (percentage >= 60) return "Good effort! Keep practicing!";
    if (percentage >= 40) return "Not bad! Room for improvement.";
    return "Keep studying and try again!";
  };

  const nextButtonText =
    currentQuestion === quizData.length - 1 ? "Finish" : "Next";

  return (
    <div className="">
      <div className="my-5 ">
        <div className="w-full">
          <div className="flex justify-center w-full">
            <h1 className="text-lg md:text-3xl font-bold font-Geist ">
              Knowledge Quiz
            </h1>
          </div>

          <div className="flex justify-center w-full">
            <h2 className="text-sm sm:text-base text-center">
              Test your knowledge and track your progress
            </h2>
          </div>
        </div>
      </div>

      <div className="grid  lg:grid-cols-[8fr_2fr] gap-4 px-4">
        <div className="lg:hidden">
          <QuizNavigation
            calculateScore={calculateScore}
            userAnswers={userAnswers}
            currentQuestion={currentQuestion}
            onNavigate={navigateToQuestion}
          />
        </div>
        <div className="">
          <QuizModal
            userAnswers={userAnswers}
            onAnswer={handleAnswer}
            currentQuestion={currentQuestion}
            onNext={handleNext}
            onPrevious={handlePrevious}
            nextButtonText={nextButtonText}
          />
        </div>
        <div className="hidden lg:block">
          <QuizNavigation
            calculateScore={calculateScore}
            userAnswers={userAnswers}
            currentQuestion={currentQuestion}
            onNavigate={navigateToQuestion}
          />
        </div>
      </div>

      <div className="">
        <ScoreDialog
          score={score}
          onReset={resetQuiz}
          scoreComment={getScoreComment()}
          openDialog={showScore}
          setOpenDialog={setShowScore}
        />
      </div>
    </div>
  );
}

export default QuizPage;
