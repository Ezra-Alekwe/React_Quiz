import React, { useState } from "react";
import CardPresentation, { ShowScoreDialog } from "./CardPresentation";
import QuizData, { QuizAnswers } from "./QuizData";

function QuizComponent() {
  // Used to loop through the Quiz
  const [count, setCount] = useState(0);
  const [userAnswer, setUserAnswer] = useState(["q","q","q","q","q","q","q","q","q","q",]); // set user answer
  const [text, setText] = useState("Next"); // Change the Next button text to finish so user know it is the last question
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [comment, setComment] = useState("");

  //Used to  update UserAnswer
  const AddAnswer = (index, newAnswer) => {
    setUserAnswer(
      userAnswer.map((answer, i) => (i === index ? newAnswer : answer))
    );
  };

  //Move to the next question

  const Next = () => {
    if (count == 9) {
      setText("Finish");
    } else {
      setText("Next");
    }

    if (count !== 9) {
      setCount((prev) => prev + 1);
    }
  };
  //Move to the previous question
  const Prev = () => {
    if (count > 0) {
      setCount((prev) => prev - 1);
    } else {
      alert("That is the first question");
    }

    if (count === 9) {
      setText("Finish");
    } else {
      setText("Next");
    }
  };

  // set comments

  function assignComment(tempScore) {
    if (tempScore >= 0 && tempScore <= 4) {
      setComment("Too bad!");
    } else if (tempScore >= 5 && tempScore <= 7) {
      setComment("Amazing!");
    } else if (tempScore >= 8 && tempScore <= 10) {
      setComment("Excellent!");
    }
  }

  const calculateScore = () => {
    let tempScore = 0;
    for (let i = 0; i < QuizData.length; i++) {
      if (QuizAnswers[i] === userAnswer[i]) {
        tempScore++;
      }
    }
    setScore(tempScore);
    setShowScore(true);
    assignComment(tempScore);
  };

  //Navigation
  const navigate = (index) => {
    setCount(index);
  };

  return (
    <div>
      <CardPresentation
        functionNext={Next}
        count={count}
        functionPrev={Prev}
        functionAddAnswer={AddAnswer}
        ans={userAnswer}
        nextButton={text}
        userAnswer={userAnswer}
        navigate={navigate}
        calculateScore={calculateScore}
      />

      {showScore && <ShowScoreDialog score={score} comment={comment} />}
    </div>
  );
}

export default QuizComponent;
