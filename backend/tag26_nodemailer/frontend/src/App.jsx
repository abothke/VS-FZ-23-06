import { useContext, useEffect, useState } from "react";
import "./App.css";
import EntryForm from "./components/EntryForm";
import EntryList from "./components/EntryList";
import LoginForm from "./components/Login";
import RegisterForm from "./components/Register";
import { mainContext } from "./context/mainProvider.jsx";
import Cookies from "js-cookie";

function App() {
  const { loggedIn, setLoggedIn, username, setUsername } =
    useContext(mainContext);

  if (Cookies.get("token")) {
    setLoggedIn(true);
    setUsername(Cookies.get("name"));
  }

  const handleLogout = () => {
    setLoggedIn(false);
    setUsername("");
    Cookies.remove("token");
    Cookies.remove("name");
  };
  const [entries, setEntries] = useState([]);
  const postRegistration = async (email, name, password) => {
    // hier post mit zugangsdaten an /users implementieren
    const response = await fetch("http://localhost:3000/users/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, name, password }),
    });
    console.log(response);
  };

  const postLogin = async (name, password) => {
    // hier post mit zugangsdaten an /users/login implementieren
    // das zurückgeschickte bearertoken dann für spätere verwendung speichern
    const response = fetch("http://localhost:3000/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
      body: JSON.stringify({ name, password }),
    }).then(async (response) => {
      if (response.status === 200) {
        const json = await response.json();
        setLoggedIn(true);
        setUsername(name);
        fetchEntries();
        Cookies.set("token", json.token, { expires: 7 });
      }
    });
    console.log(response);
  };

  console.log(username);

  const fetchEntries = async () => {
    // hier muss ein Bearer Token Mitgeschickt werden, findet heraus wie
    const response = await fetch(`http://localhost:3000/entries/${username}`, {
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    });
    const json = await response.json();
    setEntries(json);
  };

  useEffect(() => {
    if (loggedIn) {
      fetchEntries();
    }
    if (!loggedIn) {
      setEntries([]);
    }
  }, [loggedIn]);

  const postEntry = async (content, author) => {
    const response = await fetch("http://localhost:3000/entries", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content, author }),
    });
    console.log(response);
    // refetch entries after post
    fetchEntries();
  };

  return (
    <div>
      {!loggedIn ? (
        <>
          <p>Register</p>
          <RegisterForm postRegistration={postRegistration} />
          <p>Login</p>
          <LoginForm postLogin={postLogin} />
          <hr />
        </>
      ) : (
        <button onClick={handleLogout}>Logout</button>
      )}
      {loggedIn ? (
        <>
          <h2>Hey, {username}!</h2>
          <EntryForm postEntry={postEntry} />
          <hr />
          <EntryList entries={entries} />
          <button onClick={fetchEntries}>Refresh</button>
        </>
      ) : (
        <p>Please login to see entries</p>
      )}
    </div>
  );
}

export default App;
