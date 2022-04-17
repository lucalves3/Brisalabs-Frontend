import React, { useContext } from "react";
import { Context } from "../../context/context";
import HeaderSTL from "./headerSTL.styled";
import pokemonLogo from "../../images/header-logo.svg";
import leaveVector from "../../images/leave-vector.svg";
import leaveVectorWhite from "../../images/leave-vector-white.svg";
import { useNavigate, useLocation, Link } from "react-router-dom";

const Header = () => {
  const {typeButton} = useContext(Context);
  let navigate = useNavigate();
  const location = useLocation();
  console.log(location?.pathname)
  const handleLeave = () => {
    localStorage.clear();
    navigate('/');
  }

  return (
    <HeaderSTL darkMode={typeButton}>
      <img src={pokemonLogo} alt="pokemon logo" />
      <div>
        <Link to="/favorites">
          <button className={location?.pathname === '/favorites' ? 'navigations-linkstrue' : 'navigations-linksfalse'}>
              Favoritos
          </button>
        </Link>
        <Link to="/search">
          <button className={location?.pathname === '/search' ? 'navigations-linkstrue' : 'navigations-linksfalse'}>
            Procurar
          </button>
        </Link>
        <Link to="/home">
          <button className={location?.pathname === '/home' ? 'navigations-linkstrue' : 'navigations-linksfalse'}>
            Ver Todos
          </button>
        </Link>
      </div>
      <button className="LeaveButton" onClick={() => handleLeave()}>
        Sair
        <img src={ typeButton === true ? leaveVectorWhite : leaveVector} alt="Sair" />
      </button>
    </HeaderSTL>
  )
}

export default Header;