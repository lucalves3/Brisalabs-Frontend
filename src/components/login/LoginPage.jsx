import React, { useContext, useState } from "react";
import { Context } from "../../context/context";
import ButtonDarkModeSTL from "../../utils/ButtonDarkModeSTL.styled";
import LoginRegistration from "./LoginRegistration";
import darkModeLight from "../../images/moon-dark-mode.svg"
import darkModeDark from "../../images/sun-dark-mode.svg"

const LoginPage = () => {

  return (
    <>
      <LoginRegistration />
    </>
  )
};

export default LoginPage;