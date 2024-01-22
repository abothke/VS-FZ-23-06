import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './assets/pages/home/Home'
import About from './assets/pages/about/About'

function App() {

  return (
    <>
      <Routes>
        <Route
        path='/'
        element={<Home />}
        />
        <Route 
        path='/about'
        element={<About />}
        />
      </Routes>
    </>
  )
}

export default App
