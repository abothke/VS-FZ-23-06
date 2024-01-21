import { useState} from "react";

const Counter = () => {
    const [counter, setCounter] = useState(0)

    const minus = () =>{
        setCounter(counter -1)
    }

    const plus = () =>{
        setCounter(counter + 1)
    }
    return ( 
        <>
        <p>{counter}</p>
        <button onClick={plus}>+1</button>
        <button onClick={minus}>-1</button>
        </>
     );
}
 
export default Counter;