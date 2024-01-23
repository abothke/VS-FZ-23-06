import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import About from './pages/about/About'
import UseEffectComponent from './pages/useEffectComponent/UseEffectComponent'
import ProductList from './components/productList/ProductList'
import ProductDetails from './components/productDetails/ProductDetails'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/useeffectcomponent" element={<UseEffectComponent />} />
        <Route path="/productlist" element={<ProductList />} />
        <Route path="/productlist/:id" element={<ProductDetails />} />
      </Routes>
    </>
  )
}

export default App
