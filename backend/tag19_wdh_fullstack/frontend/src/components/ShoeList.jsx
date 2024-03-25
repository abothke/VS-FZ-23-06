import { useEffect, useState } from "react"

const initialShoes = [
    {model: "Crocs"},
    {model: "Boost ZX 220"},
    {model: "Yamamoto Y-3 flat"}
]

const ShoeList = () => {
    const [shoes, setShoes] = useState()
    useEffect(() =>{
        fetch('http://localhost:3000/shoes')
        .then((res)=>res.json())
        .then((json) => {
            setShoes(json)
        }
    )}, []);

  return (
    <ul>
    {shoes.map((shoe)=>{
        <li key={shoe.model}>{shoe.model}</li>
    })}
    </ul>
  )
}

export default ShoeList