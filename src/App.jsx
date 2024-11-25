import Flashcards from "./Flashcards";
import Quiz from "./Quiz";
import { useState } from 'react';

function App() {
  const [activeComponent, setActiveComponent] = useState('flashcards');

  return (
    <>
      <div className="flex gap-4 mb-6 justify-center">
        <button 
          onClick={() => setActiveComponent('flashcards')}
          className={`px-4 py-2 rounded-lg transition-colors ${
            activeComponent === 'flashcards' 
              ? 'bg-blue-500 text-white' 
              : 'bg-gray-200 hover:bg-gray-300'
          }`}
        >
          Flashcards
        </button>
        <button 
          onClick={() => setActiveComponent('quiz')}
          className={`px-4 py-2 rounded-lg transition-colors ${
            activeComponent === 'quiz' 
              ? 'bg-blue-500 text-white' 
              : 'bg-gray-200 hover:bg-gray-300'
          }`}
        >
          Quiz
        </button>
      </div>

      {activeComponent === 'flashcards' ? <Flashcards /> : <Quiz />}
    </>
  )
}

export default App
