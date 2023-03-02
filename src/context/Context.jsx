import React, { createContext } from "react";

export const Context = createContext();

export function ContextProvider(props) {
  let phrase = "Hola Mundo";

  return (
    <Context.Provider
      value={{
        phrase,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}
