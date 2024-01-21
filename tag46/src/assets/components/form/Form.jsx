import { useState } from "react";

const Form = () => {

    const [firstName, setFirstName] = useState("Andre")
    const [lastName, setLastName] = useState("Bothke")
    const [age, setAge] = useState("34")
    const [happy, setHappy] = useState(false)
    return ( 
        <>
        <h1>Form</h1>
        <form>
            <input
            type="text"
placeholder="Firstname"
value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
            />
            <input
            type="text"
            placeholder="Lastname"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
            />
            <input
            type="text"
            placeholder="age"
            value={age}
            onChange={(event) => setAge(event.target.value)}
            />
            <input
            type="checkbox"
            onChange={(event) => setHappy(event.target.checked)}
            />
        </form>

        <p>Firstname: {firstName}</p>
        <p>Lastname: {lastName}</p>
        <p>Age: {age}</p>
        <p>Happy: {happy}</p>

        </>
     );
}
 
export default Form;