import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

function ProductDetails() {
    const id = useParams()

    let apiLinkproduct = `https://dummyjson.com/products/${id.id}`

    const [product, setProduct] = useState(null)
    useEffect(()=> {
        const fetchApi = async () => {
            const resp = await axios.get(apiLinkproduct)
            setProduct(resp.data)
        }
        fetchApi()
    }, [])
  return (
    <>
    {product ? (
        <>
        <h2>{product.name}</h2>
        <img style={{width: "200px"}} src={product.images[0]} alt={product.name} />
        <h3>{product.price}</h3>
        <p>{product.description}</p>
        </>
    ) : (
        <p>Loading...</p>
    )
    }
    <Link to="/productlist"><button>Back to ProductList</button></Link>
        </>
  )
}

export default ProductDetails