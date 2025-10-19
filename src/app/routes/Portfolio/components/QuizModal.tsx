import React from "react";
import CicleSVG from "../../../../assets/svg/CicleSVG";
import CheckedRadioSVG from "../../../../assets/svg/CheckedRadioSVG";
import ChevronLeft from "../../../../assets/svg/ChevronLeft";
import ChevronRight from "../../../../assets/svg/ChevronRight";
import clsx from "clsx";
import { quizData } from "../../../../utils/quizData";

interface IQuizModal {
  currentQuestion: number;
  onNext: () => void;
  onPrevious: () => void;
  onAnswer: (questionIndex: number, answer: string) => void;
  nextButtonText: string;
  userAnswers: string[];
}
function QuizModal(props: IQuizModal) {
  const {
    currentQuestion,
    onNext,
    onPrevious,
    nextButtonText,
    onAnswer,
    userAnswers,
  } = props;

  const question = quizData[currentQuestion];
  const options = [
    { key: "a", text: question.option1 },
    { key: "b", text: question.option2 },
    { key: "c", text: question.option3 },
    { key: "d", text: question.option4 },
  ];
  return (
    <div className=" h-[27rem] rounded-xl shadow-lg border-2 mx-2 px-4">
      <div className="flex items-end h-10">
        <div className="flex justify-between w-full text-muted-foreground text-sm">
          <div className="">
            <span>
              Question {question.number} of {quizData.length}
            </span>
          </div>
          <div className="">
            <span>
              {" "}
              {userAnswers.filter((key) => key !== "q").length} /{" "}
              {quizData.length} answered
            </span>
          </div>
        </div>
      </div>

      {/** Question */}
      <div className="flex items-center h-1/6">
        <div className="text-2xl font-semibold font-Geist">
          <h1>{question.question}</h1>
        </div>
      </div>

      {/** Answers */}
      <div className=" flex flex-col gap-3 w-full">
        {options.map((option) => {
          const isSelected = userAnswers[currentQuestion] === option.key;

          return (
            <div
              key={option.key}
              onClick={() => onAnswer(currentQuestion, option.key)}
              className={clsx(
                "h-10 py-5  border-2 flex items-center rounded-lg w-full cursor-pointer  hover:scale-[1.01]",
                  isSelected
                  ? "border-teal-600 bg-teal-50 "
                  : "border-border hover:border-teal-300 dark:hover:border-teal-800 "
              )}
            >
              <div className="flex h-6">
                <div className="mx-3">

                  {
                    isSelected
                  ? <CheckedRadioSVG strokeColor="#008080" />
                  : <CicleSVG fill="#808080"/> 

                  }
                </div>
                <span>{option.text}</span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex  h-2/6 w-full items-center">
        <div className="flex justify-between w-full">
          <div className="">
            <button
              onClick={onPrevious}
              disabled={currentQuestion < quizData[0].number}
              className={clsx(
                "flex items-center justify-around h-10 w-28 rounded-lg border-2 px-1 text-base text-center transition-colors",
                {
                  "text-muted-foreground opacity-50 cursor-not-allowed":
                    currentQuestion < quizData[0].number,
                  "border-teal-500 text-teal-700 bg-teal-50":
                    currentQuestion >= quizData[0].number,
                }
              )}
            >
              <ChevronLeft />
              <span> Previous</span>
            </button>
          </div>

          <div className="">
            <button
              onClick={onNext}
              className={clsx(
                "border-2 justify-around  text-base h-10 w-24 rounded-lg px-1 text-center flex items-center border-blue-400 text-blue-600 bg-blue-50",
               
              )}
            >
              <span> {nextButtonText}</span>

              <ChevronRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuizModal;
