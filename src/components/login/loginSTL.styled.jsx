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
    color: ${(props) => props.darkMode ? '#E5E5E5' : 'black'}
  }

  input {
    width: 265px;
    height: 34px;
    border-radius: 8px;
    margin-top: 15px;
  }

  .buttonLoginWhite {
    width: 265px;
    height: 34px;
    border-radius: 8px;
    background-color: #FFCB05;
    color: black;
    margin-top: 33px;
    /* margin-bottom: 10px; */
  }

  .fisrtSection {
    margin-left: 5%;
  }

  .imageLogo {
    margin-left: 50px;
    margin-top: 20px;
    width: 200px;
    height: 76px;
  }

  .img-login {
    position: fixed;
    width: 100vmax;
    /* margin-top: -35%;
    margin-left: 30%;
    margin-bottom: -15%; */
  }
`;

export default LoginSTL