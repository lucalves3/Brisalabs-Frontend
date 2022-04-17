import React, { useContext, useState } from "react";
import { Context } from "../../context/context";
import darkModeLight from "../../images/moon-dark-mode.svg"
import ButtonDarkModeSTL from "../../utils/ButtonDarkModeSTL.styled";
import darkModeDark from "../../images/sun-dark-mode.svg"
import HomeCardTableSTL from "./homeCardTableSTL.styled";

const HomeCardTable = () => {
  const {typeButton, setTypeButton, setTextButton, textButton} = useContext(Context);
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
    <HomeCardTableSTL darkMode={typeButton}>
      <div>
        <button className="typePoke">
          Todos
        </button>
        <button className="typePoke">
          Fire
        </button>
        <button className="typePoke">
          Eletric
        </button>
        <button className="typePoke">
          Water
        </button>
      </div>
      <ButtonDarkModeSTL onClick={darkMode} change={typeButton}>
        <img src={imageDM} alt={typeButton === false ? 'imagem de lua' : 'imagem de sol'} />
        {textButton}
      </ButtonDarkModeSTL>
    </HomeCardTableSTL>
  );
};

export default HomeCardTable;