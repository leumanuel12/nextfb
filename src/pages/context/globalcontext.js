"use client";
import { createContext, useContext, useState } from "react";

export const GlobalContext = createContext({});

export default function GlobalContextProvider({ children }) {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <GlobalContext.Provider value={{ loggedIn, setLoggedIn }}>
      {children}
    </GlobalContext.Provider>
  );
}

export function useGlobalContext() {
  return useContext(GlobalContext);
}
