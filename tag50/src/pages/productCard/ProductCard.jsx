import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({data}) => {
  return (
    <>
    <h2>{data.title}</h2>
    <img src={data.images[3]} alt={data.title} />
    <Link to={`/product/${data.id}`}>Read more</Link>
    </>
  )
}

export default ProductCard