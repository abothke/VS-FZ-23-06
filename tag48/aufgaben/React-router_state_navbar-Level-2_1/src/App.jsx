import { Route, Routes } from 'react-router-dom'
import './App.css'
import Speisekarte from './assets/pages/speisekarte/Speisekarte'
import Galerie from './assets/pages/galerie/Galerie'
import Kontakt from './assets/pages/kontakt/Kontakt'
import Oeffnungszeiten from './assets/pages/oeffnungszeiten/Oeffnungszeiten'
import Header from './components/header/Header'

function App() {

  return (
    <>
    < Header />
        <Routes>
            <Route
            path='/'
            element={<Speisekarte />}
            />
            <Route
            path='/galerie'
            element={<Galerie />}
            />
            <Route
            path='/kontakt'
            element={<Kontakt />}
            />
            <Route
            path='/oeffnungszeiten'
            element={<Oeffnungszeiten />}
            />
        </Routes>
    </>
  )
}

export default App