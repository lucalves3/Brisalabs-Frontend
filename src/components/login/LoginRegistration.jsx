import React from "react";
import LoginSTL from "./loginSTL.styled";
import logoPokemon from '../../images/pokemon-logo-white.svg'
import loginImage from '../../images/login.svg'

const LoginRegistration = () => {
  return (
    <LoginSTL>
      <section className="fisrtSection">
        <img className="imageLogo" src={logoPokemon} alt="Imagen da logo do pokemon" />
        <h1>Comece a coletar pokémons!</h1>
        <div>
          <input type="email" placeholder="Email"/>
          <input type="password" placeholder="Password"/>
          <button className="buttonLoginWhite" type="button">
            Entrar
          </button>
        </div>
      </section>
      <img className="img-login" src={loginImage} alt="Imagem com vários pokemons" />
    </LoginSTL>
  )
};

export default LoginRegistration;