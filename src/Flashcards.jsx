import React, { useState } from 'react';
import { flashcardsData } from './data/flashcardsData';

const Flashcards = () => {
  const [currentCard, setCurrentCard] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

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

  return (
    <div className="flex flex-col items-center gap-6 p-4">
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
      
      <div className="text-gray-600">
        Card {currentCard + 1} of {flashcardsData.length}
      </div>
      
      <div className="flex gap-4">
        <button 
          onClick={handlePrevious}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 
            transition-colors duration-200"
        >
          Previous
        </button>
        <button 
          onClick={handleNext}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 
            transition-colors duration-200"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Flashcards;
