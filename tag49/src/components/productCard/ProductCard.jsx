import React from 'react'
import { Link } from 'react-router-dom'

function ProductCard({product}) {
  return (
    <>
        <h2>{product.name}</h2>
        <img src={product.images[0]} alt={product.name} />
        <Link to={`/productlist/${product.id}`}><button>View Product</button></Link>
    </>
  )
}

export default ProductCard