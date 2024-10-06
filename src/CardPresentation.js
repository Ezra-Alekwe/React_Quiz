import React, { useState } from 'react';
import QuizData from './QuizData';

// Navigation Component to handle question navigation
function Navigation({ navigate, calculateScore, userAnswer }) {
  const questionNumbers = Array.from({ length: QuizData.length }, (_, index) => index + 1);

  return (
    <div className="navigate_container">
        <h3>QUIZ NAVIGATION</h3> <br/>
      <div className="navigate">
        {questionNumbers.map((number) => {
          const backgroundColor = userAnswer[number - 1] !== "q" ? '#080' : 'lightblue'; // Green if answered, else light blue
          return (
            <div
              key={number}
              className="navigateQuestion"
              style={{ backgroundColor }}
              onClick={() => navigate(number - 1)}
            >
              <h3>{number}</h3>
            </div>
          );
        })}
      </div>
      <div className="navigateButton">
        <button onClick={calculateScore}>Submit</button>
      </div>
    </div>
  );
}

//Dialog to show score

 export function ShowScoreDialog({score,comment}){

  return(
    <div className="scoreDialog" >
      <h1>Your Score: {score}</h1>
      <h3>{comment}</h3>
      <button onClick={() => window.location.reload()}>Play Again</button>
    </div>
  );

}

// Main Quiz Component to display questions and options
function CardPresentation({
  functionNext,
  functionPrev,
  functionAddAnswer,
  count,
  userAnswer,
  navigate,
  calculateScore,
  nextButton
}) {
  const currentQuestion = QuizData[count];

  return (
    <div className="container">
      <div className="quizContent">
        <div className="navigate">
          <Navigation navigate={navigate} calculateScore={calculateScore} userAnswer={userAnswer} />
        </div>

        <div id="questionNo">
          {/* Question Number */}
          <h1>Question {currentQuestion.Number}</h1>
        </div>

        <div className="question">
          {/* Question Text */}
          <h2>{currentQuestion.Question}</h2>
        </div>

        <div className="options">
          {/* Options */}
          {['a', 'b', 'c', 'd'].map((option, index) => (
            <div key={option}>
              <input
                type="radio"
                name={`Choice_${count}`}
                checked={userAnswer[count] === option}
                onChange={() => functionAddAnswer(count, option)}
              />
              <label htmlFor={`Choice_${count}_${option}`}>
                {currentQuestion[`Option${index + 1}`]}
              </label>
              <br />
            </div>
          ))}
        </div>

        <div className="navigationButtons">
          <button id="prev" onClick={functionPrev}>
            Prev
          </button>
          <button id="next" onClick={functionNext}>
            {nextButton}
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardPresentation;
