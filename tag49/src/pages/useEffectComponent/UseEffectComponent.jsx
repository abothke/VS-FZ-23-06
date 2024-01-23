import { useEffect, useState } from "react";
import Nav from "../../components/nav/Nav";

const UseEffectComponent = () => {

const [count, setCount] = useState(0)
    console.log("count außerhalb von useEffect", count);

    useEffect(() => {
        console.log("count in useEffect", count);
    }, [count])



    return ( 
        <>
        <Nav />
        <h1>UseEffectComponent</h1>
        <button onClick={() => setCount(count + 1)}>+1</button>
        <p>{count}</p>
        </>
     );
}
 
export default UseEffectComponent;