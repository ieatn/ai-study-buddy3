import React, { useState } from 'react';
import { quizData } from './data/quizData';

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [wrongAnswers, setWrongAnswers] = useState([]);

  const handleAnswerClick = (selectedOption, selectedIndex) => {
    if (selectedIndex === quizData[currentQuestion].correctAnswerIndex) {
      setScore(score + 1);
    } else {
      setWrongAnswers([
        ...wrongAnswers,
        {
          question: quizData[currentQuestion].question,
          yourAnswer: selectedOption,
          correctAnswer: quizData[currentQuestion].options[quizData[currentQuestion].correctAnswerIndex]
        }
      ]);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizData.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResult(true);
    }
  };


  // REVIEW SCREEN
  if (showResult) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-full max-w-screen-xl mx-auto p-8 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Quiz Complete!</h2>
          <p className="text-lg text-gray-700 mb-6">
            Your score: {score} out of {quizData.length}
          </p>
          
          {wrongAnswers.length > 0 && (
            <div className="mt-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Questions to Review:</h3>
              <div className="space-y-4">
                {wrongAnswers.map((wrong, index) => (
                  <div key={index} className="bg-red-50 p-4 rounded-lg">
                    <p className="font-medium text-gray-800 mb-2">{wrong.question}</p>
                    <p className="text-red-600">Your answer: {wrong.yourAnswer}</p>
                    <p className="text-green-600">Correct answer: {wrong.correctAnswer}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-screen-xl mx-auto p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Question {currentQuestion + 1}
        </h2>
        <p className="text-xl text-gray-700 mb-8">
          {quizData[currentQuestion].question}
        </p>
        
        <div className="space-y-4">
          {quizData[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerClick(option, index)}
              className="w-full py-4 px-6 text-left text-lg bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Quiz;
