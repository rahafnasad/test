import { useState } from "react";
import { createContext } from "react";

export let UserContext = createContext();

export default function UserContextProvider({ children }) {
  const [isPage1Active, setIsPAge1Active] = useState(true);
  const [userInpage1, setUserInPagre1] = useState([]);
  const [ShowAdd, setShowAdd] = useState(false);
  const [state, setState] = useState("البريد الوارد");
  const myStartArray = [-1];

  return (
    <UserContext.Provider
      value={{
        isPage1Active,
        setIsPAge1Active,
        userInpage1,
        setUserInPagre1,
        ShowAdd,
        setShowAdd,
        state,
        setState,
        myStartArray,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
