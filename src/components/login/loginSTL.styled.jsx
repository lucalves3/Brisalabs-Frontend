import styled from "styled-components";
import loginImage from '../../images/login.svg';

const LoginSTL = styled.div.attrs((props) => ({
  darkMode: props.darkMode,
  image: props.image,
}))`
background-color: ${(props) => props.darkMode ? 'black' : '#E5E5E5' };
height: 100vh;
display: flex;
justify-content: space-around;
flex-direction: column;
background-image: url(${loginImage});
background-repeat: no-repeat;
background-size: cover;

  div {
    display: flex;
    flex-direction: column;
    width: 250px;
    align-items: center;
    /* padding-bottom: 122px; */
  }

  h1 {
    color: ${(props) => props.darkMode ? '#E5E5E5' : 'black'};
    font-family: 'Poppins', sans-serif;
    font-size: 1.2em;
  }

  input {
    width: 265px;
    height: 34px;
    border-radius: 8px;
    margin-top: 15px;
    border: 0px solid;
  }

  input:focus {
    outline: none !important;
    border: 0px solid blue;
    box-shadow: 0 0 10px #719ECE;
  }

  .buttonLoginWhite {
    width: 265px;
    height: 34px;
    border-radius: 8px;
    background-color: #FFCB05;
    color: black;
    margin-top: 33px;
  }

  .fisrtSection {
    margin-left: 5%;
    width: 20%;
  }

  .imageLogo {
    margin-top: 10px;
    width: 200px;
    height: 76px;
  }
`;

export default LoginSTL