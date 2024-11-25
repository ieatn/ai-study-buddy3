import React, { useState } from 'react';
import { flashcardsData } from './data/flashcardsData';

const Flashcards = () => {
  const [currentCard, setCurrentCard] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [userAnswers, setUserAnswers] = useState(() => {
    const saved = localStorage.getItem('flashcardAnswers');
    return saved ? JSON.parse(saved) : {};
  });

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleNext = () => {
    setCurrentCard((prev) => (prev + 1) % flashcardsData.length);
    setIsFlipped(false);
  };

  const handlePrevious = () => {
    setCurrentCard((prev) => (prev - 1 + flashcardsData.length) % flashcardsData.length);
    setIsFlipped(false);
  };

  const handleAnswer = (isEasy) => {
    const newAnswers = {
      ...userAnswers,
      [currentCard]: isEasy
    };
    setUserAnswers(newAnswers);
    localStorage.setItem('flashcardAnswers', JSON.stringify(newAnswers));
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 p-4">
      <div 
        className="relative w-80 h-52 [perspective:1000px] cursor-pointer"
        onClick={handleFlip}
      >
        <div 
          className={`relative w-full h-full transition-all duration-500 
            [transform-style:preserve-3d] ${isFlipped ? '[transform:rotateY(180deg)]' : ''}`}
        >
          {/* Front of card */}
          <div className="absolute inset-0 w-full h-full p-6 bg-white rounded-xl border border-gray-200 
            flex items-center justify-center text-center text-lg [backface-visibility:hidden]">
            {flashcardsData[currentCard].question}
          </div>
          
          {/* Back of card */}
          <div className="absolute inset-0 w-full h-full p-6 bg-white rounded-xl border border-gray-200 
            flex items-center justify-center text-center text-lg [backface-visibility:hidden] 
            [transform:rotateY(180deg)]">
            {flashcardsData[currentCard].answer}
          </div>
        </div>
      </div>
      
      <div className="text-center text-gray-600">
        Card {currentCard + 1} of {flashcardsData.length}
      </div>
      
      <div className="flex justify-center gap-4">
        <button 
          onClick={handlePrevious}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 
            transition-colors duration-200"
        >
          Previous
        </button>
        <button 
          onClick={() => handleAnswer(userAnswers[currentCard] === false)}
          className={`px-4 py-2 text-white rounded-lg transition-colors duration-200
            ${userAnswers[currentCard] ? 'bg-green-500 hover:bg-green-600' : 'bg-red-500 hover:bg-red-600'}`}
        >
          {userAnswers[currentCard] ? 'Easy' : 'Hard'}
        </button>
        <button 
          onClick={handleNext}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 
            transition-colors duration-200"
        >
          Next
        </button>
      </div>

      {userAnswers[currentCard] !== undefined && (
        <div className={`text-center text-lg ${userAnswers[currentCard] ? 'text-green-600' : 'text-red-600'}`}>
          Difficulty: {userAnswers[currentCard] ? 'Easy' : 'Hard'}
        </div>
      )}
    </div>
  );
};

export default Flashcards;
