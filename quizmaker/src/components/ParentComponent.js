import React, { useState } from 'react';
import CreateQuizPage from './CreateQuizPage';

const ParentComponent = () => {
  // State to store the quiz list
  const [quizList, setQuizList] = useState([]);

  // Function to add questions to the quiz list
  const addQuestion = (questions, quizName) => {
    // Create a new quiz object with the questions and quiz name
    const newQuiz = {
      name: quizName,
      questions: questions,
    };
    // Update the quiz list state by adding the new quiz
    setQuizList([...quizList, newQuiz]);
  };

  return (
    <div>
      {/* Render the CreateQuizPage component and pass the addQuestion function as a prop */}
      <CreateQuizPage addQuestion={addQuestion} />
      {/* Render the quiz list or display it however you want */}
      <h2>Quiz List</h2>
      <ul>
        {quizList.map((quiz, index) => (
          <li key={index}>{quiz.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ParentComponent;
