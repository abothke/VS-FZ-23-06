import { useState } from "react";
import "./App.css";

function App() {
  const [day, setDay] = useState(true);

  document.querySelector("body").className = day ? "day" : "night";

  const toggleDayOrNight = () => {
    setDay(!day);
  };

  return (
    <>
      <h1 id="dayOrNightH1">{day ? "Day" : "Night"}</h1>
      <button onClick={toggleDayOrNight} id="dayOrNight">
        {day ? "Change to Night" : "Change to Day"}
      </button>
    </>
  );
}

export default App;