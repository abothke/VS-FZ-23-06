import axios from 'axios'
import { createContext, useEffect, useState } from 'react'

export const mainContext = createContext()

const MainProvider = ({ children }) => {
    const [user, setUser] = useState({
        userName: '',
        email: '',
        password: ''
    })

const [data, setData] = useState([])


useEffect(() => {
    const apiFetch = async () => {
        const resp = await axios.get("https://dummyjson.com/products")
        setData(resp.data.products)
    }
    apiFetch()
}, [])

console.log(data);

  return (
    <mainContext.Provider value={{user, setUser, data , setData}}>
          {children}
    </mainContext.Provider>
  )
}

export default MainProvider