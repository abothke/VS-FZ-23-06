import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BirdForest from './assets/components/BirdForest';
import NewBird from './assets/components/NewBird';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex p-8'>
      <section className='flex-1'>
        <h1 className='text-3x font-bold'>Birds!</h1>
        <BirdForest />
      </section>
      <section>
    <h2 className='text-3xl font-bold'>New Bird!</h2>
    <NewBird />
      </section>
    </div>
  )
}

export default App
