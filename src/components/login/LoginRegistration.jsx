import React, { useContext, useState } from "react";
import LoginSTL from "./loginSTL.styled";
import logoPokemon from '../../images/pokemon-logo-white.svg'
import loginImage from '../../images/login.svg'
import { Context } from "../../context/context";
import darkModeLight from "../../images/moon-dark-mode.svg"
import darkModeDark from "../../images/sun-dark-mode.svg"
import ButtonDarkModeSTL from "../../utils/ButtonDarkModeSTL.styled";

const LoginRegistration = () => {
  const {typeButton, setTypeButton, textButton, setTextButton} = useContext(Context);
  const [imageDM, setImageDM] = useState(darkModeLight);
  
  const darkMode = () => {
    if (typeButton === false) {
      setTypeButton(true);
      setImageDM(darkModeDark)
      setTextButton('Tema claro');
    }
    if (typeButton === true) {
      setTypeButton(false);
      setImageDM(darkModeLight)
      setTextButton('Tema escuro');
    }
  }

  return (
    <LoginSTL darkMode={typeButton}>
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
      <ButtonDarkModeSTL onClick={darkMode} change={typeButton}>
        <img src={imageDM} alt={typeButton === false ? 'imagem de lua' : 'imagem de sol'} />
        {textButton}
      </ButtonDarkModeSTL>
    </LoginSTL>
  )
};

export default LoginRegistration;