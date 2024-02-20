import React, { useContext } from 'react'
import { mainContext } from '../../context/MainProvider';
import Nav from '../../components/nav/Nav';
import ProductCard from '../productCard/ProductCard';

const ProductList = () => {
const { data } = useContext(mainContext)
  return (
    <>
    <Nav />
    <div>ProductList</div>
    <main>
        {data.map((data, index) => {
            return (
                <div key={index}>
                    <ProductCard 
                    data={data}
                    />
                </div>
            )
        })}
    </main>
    </>
  )
}

export default ProductList