import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { mainContext } from '../../context/MainProvider';

const ProductDetails = () => {
  const {id} = useParams()
  const [product, setProduct] = useState()
  const { data } = useContext(mainContext)

  console.log(data);
  
useEffect(() => {
  const filterData = data.filter((data) => {
    console.log(data.id);
    return data.id === Number(id)
  })
  setProduct(filterData[0])
}, [id, data])

    return (
    <>
    {product ? (
      <>
      <h2>{product.title}</h2>
      <img src={product.images[3]} alt={product.title} />
      </>
    )
    :
    (
      <div>Loading...</div>
    )  
    }
    </>
  )
}

export default ProductDetails