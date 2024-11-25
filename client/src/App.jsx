import Flashcards from "./Flashcards";
import Quiz from "./Quiz";
import { useState } from 'react';

function App() {
  const [activeComponent, setActiveComponent] = useState('flashcards');

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex-shrink-0 flex items-center">
              <h1 className="text-xl font-bold text-gray-800">StudyApp</h1>
            </div>
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => setActiveComponent('flashcards')}
                className={`px-4 py-2 rounded-md font-medium transition-all duration-200 ${
                  activeComponent === 'flashcards' 
                    ? 'bg-blue-500 text-white shadow-sm hover:bg-blue-600' 
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                Flashcards
              </button>
              <button 
                onClick={() => setActiveComponent('quiz')}
                className={`px-4 py-2 rounded-md font-medium transition-all duration-200 ${
                  activeComponent === 'quiz' 
                    ? 'bg-blue-500 text-white shadow-sm hover:bg-blue-600' 
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                Quiz
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeComponent === 'flashcards' ? <Flashcards /> : <Quiz />}
      </main>
    </div>
  )
}

export default App
