import React, { useContext, useState } from "react";
import { Context } from "../../context/context";
import darkModeLight from "../../images/moon-dark-mode.svg"
import darkModeDark from "../../images/sun-dark-mode.svg"
import ButtonDarkModeSTL from "../../utils/ButtonDarkModeSTL.styled";
import Header from "../header/header";

const HomeSection = () => {
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
    <>
      <Header />
      <ButtonDarkModeSTL onClick={darkMode} change={typeButton}>
        <img src={imageDM} alt={typeButton === false ? 'imagem de lua' : 'imagem de sol'} />
        {textButton}
      </ButtonDarkModeSTL>
    </>
  )
};

export default HomeSection;