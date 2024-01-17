import animals from './assets/data/animals'
import './App.css'
import AnimalList from './assets/components/animalList/AnimalList'

function App() {

  return (
    <>
    <h1>ZooParty DB</h1>
    <h3>Explore the fascinating world of zoo animals!</h3>
    <div id="animals">
      <AnimalList animals={animals}/>
    </div>
    </>
  )
}

export default App
