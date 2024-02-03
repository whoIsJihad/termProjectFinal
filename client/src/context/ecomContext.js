import React, { useState, createContext } from "react";

export const EcomContext = createContext();

export const EcomContextProvider = (props) => {
  const [users, setUsers] = useState([]);

  return (
    <EcomContext.Provider value={{ users, setUsers }}>
      {props.children}
    </EcomContext.Provider>
  );
};
