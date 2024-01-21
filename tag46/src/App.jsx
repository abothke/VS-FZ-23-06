import { useState } from 'react'
import './App.css'
import Counter from './assets/components/counter/Counter'
import Form from './assets/components/form/Form'
import cars from './assets/data/cars'
import ListItem from './assets/components/listItem/ListItem'

function App() {
const [darkMode, setDarkMode] = useState(false)
const [data, setData] = useState(cars)
 return (
    <>
    <div className={`${darkMode ? "dark" : "light"}`}>
      <button onClick={() => setDarkMode(!darkMode)}>Change Mode</button>
    <h1>useState</h1> 
    <Counter />
    <Form />
    <ListItem uebergebendeData={data} />
    </div>
     
    </>
  )
}

export default App
