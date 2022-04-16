import styled from "styled-components";
import loginImage from '../../images/login.svg'

const LoginSTL = styled.section`

  div {
    display: flex;
    flex-direction: column;
    width: 350px;
  }

  input {
    width: 365px;
    height: 34px;
    border-radius: 8px;
    margin-top: 15px;
  }

  button {
    width: 365px;
    height: 34px;
    border-radius: 8px;
    background-color: #FFCB05;
    color: black;
  }

  .imageLogo {
    margin-left: 50px;
    margin-top: 20px;
    width: 200px;
    height: 76px;
  }

  .img-login {
  position: fixed;
  z-index: -9999;
  width: 75%;
  margin-top: -30%;
  margin-left: 30%;
  }
`;

export default LoginSTL