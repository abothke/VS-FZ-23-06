import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* Tailwind examples */}
      <div className="bg-gray-100 p-4">
        <h1 className="text-2xl font-bold">Welcome to Vite + React + Tailwind CSS</h1>
        <p className="text-lg mt-2">Edit the file <code>src/App.jsx</code> and save to test HMR updates.</p>
        <div className="flex items-center space-x-4 mt-4">
          <img src={reactLogo} alt="React Logo" className="h-8" />
          <img src={viteLogo} alt="Vite Logo" className="h-8" />
        </div>
      </div>
        
        {/* React state example */}
      <div className="bg-gray-200 p-4 mt-4">
        <h2 className="text-xl">React State Example</h2>
        <p className="text-lg mt-2">Count: {count}</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2" onClick={() => setCount((c) => c + 1)}>
          Increment
        </button>
      </div>
    </>
  )
}

export default App
