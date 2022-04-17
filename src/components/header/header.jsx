import React, { useContext } from "react";
import { Context } from "../../context/context";
import HeaderSTL from "./headerSTL.styled";
import pokemonLogo from "../../images/header-logo.svg";
import leaveVector from "../../images/leave-vector.svg";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const {typeButton} = useContext(Context);
  let navigate = useNavigate();

  const handleLeave = () => {
    localStorage.clear();
    navigate('/');
  }

  return (
    <HeaderSTL darkMode={typeButton}>
      <img src={pokemonLogo} alt="pokemon logo" />
      <div>
        <button className="navigations-links">
          Favoritos
        </button>
        <button className="navigations-links">
          Procurar
        </button>
        <button className="navigations-links">
          Ver Todos
        </button>
      </div>
      <button className="LeaveButton" onClick={() => handleLeave()}>
        Sair
        <img src={leaveVector} alt="Sair" />
      </button>
    </HeaderSTL>
  )
}

export default Header;