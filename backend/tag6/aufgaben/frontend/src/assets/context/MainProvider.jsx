import { createContext, useEffect } from 'react'
import { useState } from 'react'

export const mainContext = createContext();

const MainProvider = ({ children }) => {
    const [count, setCount] = useState(0);
    const [activeTasks, setActiveTasks] = useState([]);
    const [completedTasks, setCompletedTasks] = useState([]);
    const [tasks, setTasks] = useState([]);
    const [triggerFetch, setTriggerFetch] = useState(false)

    useEffect(() => {
      fetch('http://localhost:3000/tasks')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        console.log(data.length);
        let filteredActiveTasks = data.filter(task => task.status === 'pending')
        setActiveTasks(filteredActiveTasks)
        let filteredCompletedTasks = data.filter(task => task.status === 'done')
        setCompletedTasks(filteredCompletedTasks)
        setTasks(data)     
      })
    }
    , [triggerFetch])

  return (
    <>
    <mainContext.Provider value={{ count, setCount, activeTasks, setActiveTasks, completedTasks, setCompletedTasks, triggerFetch, setTriggerFetch, tasks }}>
        {children}
    </mainContext.Provider>
    </>
  )
}

export default MainProvider