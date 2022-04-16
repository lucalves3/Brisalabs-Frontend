import React from "react";
import LoginSTL from "./loginSTL.styled";
import logoPokemon from '../../images/pokemon-logo-white.svg'

const LoginRegistration = () => {
  return (
    <LoginSTL>
      <img className="imageLogo" src={logoPokemon} alt="Imagen da logo do pokemon" />
      <h1>Comece a coletar pokémons!</h1>
      <div>
        <input type="email"/>
        <input type="password"/>
      </div>
      <button className="buttonLoginWhite" type="button">
        Entrar
      </button>
    </LoginSTL>
  )
};

export default LoginRegistration;