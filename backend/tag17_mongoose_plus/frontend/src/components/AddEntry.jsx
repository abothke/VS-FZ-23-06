const AddEntry = ({ birds }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.set("bird", formData.get("bird").toLowerCase());
    formData.set("content", formData.get("content").toLowerCase());
    fetch("http://localhost:3000/entries", {
      method: "POST",
      body: formData,
    });
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
    >
      <h2>Neuer Eintrag</h2>
      <div>
        <label
          htmlFor="bird"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Vogel:
        </label>
        <select
          id="bird"
          name="bird"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        >
          {birds.map((bird) => (
            <option key={bird._id} value={bird._id}>
              {bird.name}({bird.latinName})
            </option>
          ))}
        </select>
      </div>
      <div>
        <label
          htmlFor="content"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Inhalt:
        </label>
        <textarea
          id="content"
          name="content"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        {" "}
        Eintrag hinzufügen
      </button>
    </form>
  );
};

export default AddEntry;
