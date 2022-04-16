import styled from "styled-components";

const LoginSTL = styled.section`

  div {
    display: flex;
    flex-direction: column;
    width: 350px;
    align-items: center;
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
    margin-top: 33px;
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
    z-index: -9999;
    width: 75%;
    margin-top: -34%;
    margin-left: 30%;
  }
`;

export default LoginSTL