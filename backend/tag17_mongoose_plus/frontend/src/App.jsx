import { useEffect, useState } from 'react'
import './App.css'
import BirdList from './components/BirdList'
import AddEntry from './components/AddEntry'


function App() {
  const [birds, setBirds] = useState([])
  const [entries, setEntries] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/birds')
      .then((res) => res.json())
      .then((data) => setBirds(data))
  }
  , [])

  useEffect(() => {
    fetch('http://localhost:3000/entries')
      .then((res) => res.json())
      .then((data) => setEntries(data))
  }
  , [])

  return (
    
    <main className='container mx-auto p-4 bg-gray-100 m-5'>
      <div className='grid grid-cols-3'>
        <div className='col-span-2'>
          <BirdList birds={birds} entries={entries} />
        </div>
        <div className='col-span-1 w-full max-w-xs'>
          <AddEntry birds={birds}/>
        </div>
      </div> 
    </main> 
  );
}

export default App
