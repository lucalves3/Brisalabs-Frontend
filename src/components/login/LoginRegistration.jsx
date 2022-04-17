import React, { useContext, useState, useEffect } from "react";
import LoginSTL from "./loginSTL.styled";
import logoPokemon from '../../images/pokemon-logo-white.svg'
import { Context } from "../../context/context";
import darkModeLight from "../../images/moon-dark-mode.svg"
import darkModeDark from "../../images/sun-dark-mode.svg"
import ButtonDarkModeSTL from "../../utils/ButtonDarkModeSTL.styled";
import { useNavigate } from "react-router-dom";

const LoginRegistration = () => {
  const {typeButton, setTypeButton, textButton, setTextButton} = useContext(Context);
  let token = JSON.parse(localStorage.getItem('userToken'));
  let navigate = useNavigate();
  const [imageDM, setImageDM] = useState(darkModeLight);
  const [userDatas, setUserDatas] = useState({
    email: '',
    password: '',
  });
 
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

  const handleLogin = () => {
    localStorage.setItem('InfoUser', JSON.stringify(userDatas));
    localStorage.setItem('userToken', JSON.stringify((userDatas.email + userDatas.password)));
    navigate('/home')
  }

  const handleChange = (e, type) => {
    if (type === 'email') {
      setUserDatas(() => { return {
        ...userDatas,
        email: e.target.value
      }})
    }
    if (type === 'password') {
      setUserDatas(() => { return {
        ...userDatas,
        password: e.target.value
      }})
    }
  };

  useEffect(() => {
    function checkStorage () {
      if (token !== null) {
        navigate('/home')
      }
    }
    checkStorage();
  })

  return (
    <LoginSTL darkMode={typeButton}>
      <section className="fisrtSection">
        <img className="imageLogo" src={logoPokemon} alt="Imagen da logo do pokemon" />
        <h1>Comece a coletar pokémons!</h1>
        <div>
          <input type="email" placeholder="Email" onBlur={(e) => handleChange(e, 'email')}/>
          <input type="password" placeholder="Password" onBlur={(e) => handleChange(e, 'password')}/>
          <button className="buttonLoginWhite" type="button" onClick={() => handleLogin()}>
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