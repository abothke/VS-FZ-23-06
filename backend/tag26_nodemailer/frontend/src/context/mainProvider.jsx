import { createContext, useState } from "react";

export const mainContext = createContext();

const MainProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  return (
    <>
    <mainContext.Provider value={{ loggedIn, setLoggedIn, username, setUsername }}>
      {children}
    </mainContext.Provider>
    </>
  );
};

export default MainProvider;
