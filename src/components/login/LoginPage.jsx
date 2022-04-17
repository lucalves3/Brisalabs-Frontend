import React, { useContext, useState } from "react";
import { Context } from "../../context/context";
import ButtonDarkModeSTL from "../../utils/ButtonDarkModeSTL.styled";
import LoginRegistration from "./LoginRegistration";
import darkModeLight from "../../images/moon-dark-mode.svg"
import darkModeDark from "../../images/sun-dark-mode.svg"

const LoginPage = () => {
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
    <section style={{ display: 'flex', flexDirection: 'column' }}>
      <LoginRegistration />
      <ButtonDarkModeSTL onClick={darkMode} change={typeButton}>
        <img src={imageDM} alt={typeButton === false ? 'imagem de lua' : 'imagem de sol'} />
        {textButton}
      </ButtonDarkModeSTL>
    </section>
  )
};

export default LoginPage;