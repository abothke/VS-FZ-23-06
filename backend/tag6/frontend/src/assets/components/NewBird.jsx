import { useRef } from "react"

const NewBird = () => {
    const nameInputRef = useRef()
    const descriptionInputRef = useRef()
    const imageUrlInputRef = useRef()

    const handleSubmit = () => {


        const name = nameInputRef.current.value
        const description = descriptionInputRef.current.value
        const imageUrl = imageUrlInputRef.current.value
        
        fetch('http://localhost:3000/birds', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name, description, imageUrl})
        })
    }
  return (
    <>
    <form>
        <div>
            <label htmlFor='name'>Name</label>
            <input type='text' id='name' ref={nameInputRef} />
        </div>
        <div>
            <label htmlFor='description'>Description</label>
            <input type='text' id='description' ref={descriptionInputRef} />
        </div>
        <div>
            <label htmlFor='imageUrl'>Image URL</label>
            <input type='text' id='imageUrl' ref={imageUrlInputRef} />
        </div>
        <button type="button" onClick={handleSubmit}>Submit</button>
    </form>
    </>
  )
}

export default NewBird