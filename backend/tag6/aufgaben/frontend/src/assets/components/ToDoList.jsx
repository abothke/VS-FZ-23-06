import React, { useContext, useRef } from 'react'
import { mainContext } from '../context/MainProvider'

const ToDoList = () => {
    const { activeTasks, setActiveTasks, completedTasks, setCompletedTasks, triggerFetch, setTriggerFetch } = useContext(mainContext)
    const completeTask = async(id) => {
        await fetch('http://localhost:3000/tasks/', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({id: id, status: 'done'})
        })
        setTriggerFetch(!triggerFetch)
    }

const deleteCompleted = async() => {
    await fetch('http://localhost:3000/tasks/', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
    })
    setTriggerFetch(!triggerFetch)
}

  return (
    <>
    <div className='flex flex-col justify-center items-center bg-gray-100 gap-5'>
        <h3 className='text-2xl font-bold mb-4'>To-Do Liste</h3>
        <h3 className='text-xl font-bold mb-4'>Noch zu tun: {activeTasks.length}</h3>
        <h3 className='text-xl font-bold mb-4'>Aktive To-Dos</h3>
        <ul className='list-disc'>
            {activeTasks.map((task) => (
                <li key={task.id} className='flex justify-between items-center'>
                    {task.name}
                    <button onClick={() => completeTask(task.id)}>✅</button>
                </li>
            ))}
        </ul>
        <h3 className='text-xl font-bold mb-4'>Erledigte To-Dos</h3>
        <ul className='list-disc'>
            {completedTasks.map((task) => (
                <li key={task.id} className='flex justify-between items-center'>{task.name}</li>
            ))}
        </ul>
        <button onClick={() => setTriggerFetch(!triggerFetch)}>Refresh</button>
        <button onClick={deleteCompleted}>🗑️</button>
        </div>
    </>
  )
}

export default ToDoList