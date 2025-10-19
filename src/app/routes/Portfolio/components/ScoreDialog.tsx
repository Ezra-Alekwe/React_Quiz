import React from "react";
import { quizData } from "../../../../utils/quizData";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import TrophySVG from "../../../../assets/svg/TrophySVG";

interface IScoreDialong {
  setOpenDialog: React.Dispatch<React.SetStateAction<boolean>>;
  openDialog: boolean;
  score: number;
  scoreComment: string;
  onReset:()=> void;
}

function ScoreDialog(props: IScoreDialong) {
  const { openDialog, setOpenDialog, score, scoreComment, onReset} = props;



  return (
    <Dialog open={openDialog} onClose={setOpenDialog} className="relative z-50">
      {/* Dim background */}
      <DialogBackdrop className="fixed inset-0 bg-black/50 backdrop-blur-sm" />

      {/* Centered dialog */}
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <DialogPanel className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">
          {/* Trophy Icon */}
          <div className="flex justify-center mb-4">
            <div className="h-20 w-20 rounded-full bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center">
              <TrophySVG width={50} height={50} fill="#fff" />
            </div>
          </div>

          {/* Title */}
          <DialogTitle className="text-center text-2xl font-semibold text-gray-900">
            Quiz Complete!
          </DialogTitle>

          {/* Score + Comment */}
          <div className="text-center space-y-4 pt-4">
            <div className="text-4xl font-bold text-gray-900">
              {score} / {quizData.length}
            </div>
            <div className="text-lg font-medium text-gray-500">
              {scoreComment}
            </div>
            <div className="text-sm text-gray-500">
              You scored {Math.round((score / quizData.length) * 100)}%
            </div>
          </div>

          {/* Try Again Button */}
          <div className="flex gap-3 mt-6">
            <button
              onClick={()=>onReset()}
              className="flex-1 py-2 text-white bg-teal-600 rounded-md hover:bg-teal-700 transition"
            >
              Try Again
            </button>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
}

export default ScoreDialog;
