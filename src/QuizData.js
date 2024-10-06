import React from "react";

//Quiz Quesition
const QuizData = [
    {
        Number: 1,
        Question: "What is React primarily used for?",
        Option1: "a) Database management",
        Option2: "b) Building user interfaces",
        Option3: "c) Server-side rendering",
        Option4: "d) Managing cloud infrastructure",
    },
    {
        Number: 2,
        Question: "Who developed React?",
        Option1: "a) Google",
        Option2: "b) Microsoft",
        Option3: "c) Facebook",
        Option4: "d) Twitter",
    },
    {
        Number: 3,
        Question: "Which method is used to create a new component in React?",
        Option1: "a) React.createElement()",
        Option2: "b) React.Component()",
        Option3: "c) React.newComponent()",
        Option4: "d) React.makeComponent()",
    },
    {
        Number: 4,
        Question: "In React, what does JSX stand for?",
        Option1: "a) JavaScript XML",
        Option2: "b) JavaScript XHTML",
        Option3: "c) Java Syntax Extension",
        Option4: "d) JavaScript Exchange",
    },
    {
        Number: 5,
        Question: "What is the use of the render() method in React?",
        Option1: "a) To create a new React application",
        Option2: "b) To compile the React code",
        Option3: "c) To update the user interface",
        Option4: "d) To link components",
    },
    {
        Number: 6,
        Question: "Which of the following is a hook in React?",
        Option1: "a) useEffect",
        Option2: "b) useFetch",
        Option3: "c) useStyle",
        Option4: "d) useRender",
    },
    {
        Number: 7,
        Question: "What is the default port for a React application created with Create React App?",
        Option1: "a) 3000",
        Option2: "b) 8080",
        Option3: "c) 5000",
        Option4: "d) 4000",
    },
    {
        Number: 8,
        Question: "How can you pass data from a parent component to a child component in React?",
        Option1: "a) Using props",
        Option2: "b) Using state",
        Option3: "c) Using context",
        Option4: "d) Using methods",
    },
    {
        Number: 9,
        Question: "What is the purpose of componentDidMount lifecycle method?",
        Option1: "a) To initialize the state",
        Option2: "b) To handle events",
        Option3: "c) To fetch data after the component is rendered",
        Option4: "d) To update the component’s state",
    },
    {
        Number: 10,
        Question: "What is the purpose of a key prop in React lists?",
        Option1: "a) To uniquely identify list items",
        Option2: "b) To bind event handlers",
        Option3: "c) To apply CSS styles",
        Option4: "d) To manage state transitions",
    }
];

export const QuizAnswers= ['b', 'c', 'a', 'a', 'c', 'a', 'a', 'a', 'c', 'a'];


export default QuizData;
