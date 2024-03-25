import { useRef } from "react";

const NewShoeForm = () => {
  const modelInputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    fetch("http://localhost:3000/shoes/", {
      method: "POST",
      body: formData,
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Schuhmodell"
        name="model"
        ref={modelInputRef}
      />
      <button>Abschicken</button>
    </form>
  );
};

export default NewShoeForm;
