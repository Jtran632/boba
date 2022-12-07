// src/context/state.js
import { createContext, useContext, useState } from "react";

const LoginContext = createContext();

export function LoginWrapper({ children }) {
  const [loggedIn, setLoggedIn] = useState({ logged: false, userId: "" });

  return (
    <LoginContext.Provider value={{loggedIn, setLoggedIn}}>
      {children}
    </LoginContext.Provider>
  );
}

export function useLoginContext() {
  return useContext(LoginContext);
}
