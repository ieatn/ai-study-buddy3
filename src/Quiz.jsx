import React, { useState } from 'react';
import { quizData } from './data/quizData';

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswerClick = (selectedOption, selectedIndex) => {
    if (selectedIndex === quizData[currentQuestion].correctAnswerIndex) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizData.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResult(true);
    }
  };

  if (showResult) {
    return (
      <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Quiz Complete!</h2>
        <p className="text-lg text-gray-700">
          Your score: {score} out of {quizData.length}
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        Question {currentQuestion + 1}
      </h2>
      <p className="text-lg text-gray-700 mb-6">
        {quizData[currentQuestion].question}
      </p>
      
      <div className="space-y-3">
        {quizData[currentQuestion].options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswerClick(option, index)}
            className="w-full py-3 px-4 text-left bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Quiz;
