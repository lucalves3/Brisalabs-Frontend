import React, { useState } from "react";

export const Context = React.createContext({});

export const Provider = ({ value, children }) => {
  const [favSelected, setFavSelected] = useState([]);

  const values = {
    favSelected,
    setFavSelected,
  };

  return (
    <Context.Provider value={( value = values )} displayName="General">
      { children }
    </Context.Provider>
  )
};