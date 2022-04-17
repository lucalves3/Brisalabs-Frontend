import React, { useState } from "react";

export const Context = React.createContext({});

export const Provider = ({ value, children }) => {
  const [favSelected, setFavSelected] = useState([]);
  const [typeButton, setTypeButton] = useState(false);
  const [textButton, setTextButton] = useState('Tema escuro');
  const [favPokes, setFavPokes] = useState([]);

  const values = {
    favPokes,
    setFavPokes,
    textButton,
    setTextButton,
    favSelected,
    setFavSelected,
    typeButton,
    setTypeButton,
  };

  return (
    <Context.Provider value={( value = values )} displayName="General">
      { children }
    </Context.Provider>
  )
};