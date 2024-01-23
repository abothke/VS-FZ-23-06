import { useEffect, useState } from 'react'
import axios from 'axios'
import ProductCard from '../productCard/ProductCard'


// ! alte Version
// const fetchApi = (apiLink) => {
//     fetch(apiLink)
//     .then(resp => resp.json())
//     .then(data => console.log(data))
//     }

// fetchApi(api)



const ProductList = () => {
    const [products, setProducts] = useState([])
    const api = 'https://dummyjson.com/products'

    useEffect(() => {
        const fetchApi = async () => {
            const resp = await axios.get(api)
            // console.log(resp.data.products)
            setProducts(resp.data.products)
        }
        fetchApi()
        }, [])

        console.log(products);
        return (
            <>
                <div>ProductList</div>
                {products.map((product, index) => {
                    return (
                        <div key={index}>
                            <ProductCard product={product} />
                        </div>
                    );
                })}
            </>
        );
}

export default ProductList