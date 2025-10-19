import clsx from "clsx";
import React from "react";

interface IQuizNavigation {
  currentQuestion: number;
  userAnswers: string[];
  onNavigate: (index:number)=>void;
  calculateScore:()=> void;
}

function QuizNavigation(props:IQuizNavigation) {

    const {currentQuestion,userAnswers,onNavigate,calculateScore} = props;
  return (
    <div className="h-64  w-96 rounded-xl shadow-lg border-2 mx-2 px-4 ">
      <div className="font-semibold text-lg flex h-1/5 items-center px-3">
        <h2>Quiz Navigation</h2>
      </div>
      <div className="h-3/5 flex items-center justify-center">
        <div className="grid grid-cols-5 gap-3">
          {[0,1, 2, 3, 4, 5, 6, 7, 8, 9,].map((index) => {
            const isAnswered = userAnswers[index] !== "q";
            const isCurrent = index === currentQuestion;
            return (
              <div key={index} className="flex justify-center">
                <div
                onClick={()=>onNavigate(index)}
                  className={clsx(
                    "aspect-square transition-all hover:scale-105 bg-[#EAF3F8] font-semibold text-black cursor-pointer rounded-lg w-14 h-14 flex justify-center items-center",
                    isCurrent && "ring-2 ring-primary ring-offset-2",
                    isAnswered
                      ? "bg-emerald-500 text-white hover:bg-emerald-600"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  )}
                >
                  {index + 1}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="px-2">
        <button
          type="button"
          onClick={()=>calculateScore()}
          className="border-2 w-full bg-primary text-primaryForeground hover:bg-coral-600 h-10 rounded-lg"
        >
          Submit Quiz
        </button>
      </div>
    </div>
  );
}

export default QuizNavigation;
