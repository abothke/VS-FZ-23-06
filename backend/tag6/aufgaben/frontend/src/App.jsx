import { useContext, useEffect, useRef, useState } from 'react'
import './App.css'
import { mainContext } from './assets/context/MainProvider'
import ToDoList from './assets/components/ToDoList'


function App() {
  const { activeTasks, completedTasks, triggerFetch, setTriggerFetch, currentID, tasks} = useContext(mainContext)
  const taskInput = useRef('')
  console.log(currentID);

  
  const addTask = async(e) => {
    e.preventDefault()
    const newTask = taskInput.current.value
    await fetch('http://localhost:3000/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({name: newTask, status: 'pending'})
    })
    setTriggerFetch(!triggerFetch)
  }

  return (
    <main className='flex flex-col justify-center items-center bg-gray-100'>
      <div className='pt-20 h-screen bg-gray-100'>
        <form className='flex flex-col gap-4' onSubmit={addTask}>
          <input className='p-2 border border-gray-300 rounded-md' type='text' ref={taskInput}/>
            <button
            type='submit'
            className='p-2 bg-blue-500 text-white rounded-md'
          >
            +
          </button>
        </form>
        <ToDoList />
        </div>
    </main>
  )
}

export default App
