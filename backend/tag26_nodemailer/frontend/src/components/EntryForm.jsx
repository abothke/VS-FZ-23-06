import { useContext, useRef } from "react";
import { mainContext } from "../context/mainProvider";


const EntryForm = ({ postEntry }) => {
  const inputRef = useRef();
  const { username } = useContext(mainContext);
  const handleSubmit = (event) => {
    event.preventDefault();
    const content = inputRef.current.value;
    postEntry(content, username);
  };
  return (
    <form onSubmit={handleSubmit}>
      <textarea ref={inputRef} type="text" name="content" />
      <button>Submit</button>
    </form>
  );
};

export default EntryForm;
