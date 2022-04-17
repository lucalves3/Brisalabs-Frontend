import styled from "styled-components";

const PokeCardsSTL = styled.section.attrs((props) => ({
  
}))`
  background-color: white;
  width: 200px;
  height: auto;
  margin: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
  font-family: 'Poppins', sans-serif;

  button {
    margin: 10px;
  }

  img {
    height: 100px;
  }

  h1 {
    margin-bottom: -20px;
    margin-top: -5px;
  }

  .heart-div {
    width: 100%;
    display: flex;
    align-items: top;
    justify-content: flex-end;
    margin-right: 10px;
    margin-bottom: -10px;
  }

  .idPoke {
    color: gray;
    width: 160px;
  }

  .typePokes {
    display: flex;
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    height: 40px;
  }

  .hability-bug {
    background-color: purple;
    width: 70px;
    height: 25px;
    border-radius: 12px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .hability-poison {
    background-color: greenyellow;
    width: 70px;
    height: 25px;
    border-radius: 12px;
    color: black;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .hability-electric {
    background-color: #FFCB05;
    width: 70px;
    height: 25px;
    border-radius: 12px;
    color: black;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .hability-steel {
    background-color: gray;
    width: 70px;
    height: 25px;
    border-radius: 12px;
    color: black;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .hability-rock {
    background-color: whitesmoke;
    width: 70px;
    height: 25px;
    border-radius: 12px;
    color: black;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .hability-ice {
    background-color: cyan;
    width: 70px;
    height: 25px;
    border-radius: 12px;
    color: black;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .hability-ghost {
    background-color: whitesmoke;
    width: 70px;
    height: 25px;
    border-radius: 12px;
    color: black;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .hability-ground {
    background-color: #392620;
    width: 70px;
    height: 25px;
    border-radius: 12px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .hability-fairy {
    background-color: pink;
    width: 70px;
    height: 25px;
    border-radius: 12px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .hability-psychic {
    background-color: blueviolet;
    width: 70px;
    height: 25px;
    border-radius: 12px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .hability-fighting {
    background-color: violet;
    width: 70px;
    height: 25px;
    border-radius: 12px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .hability-normal {
    background-color: white;
    width: 70px;
    height: 25px;
    border-radius: 12px;
    border: 1px solid black;
    color: black;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .hability-water {
    background-color: blue;
    width: 70px;
    height: 25px;
    border-radius: 12px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .hability-flying {
    background-color: #D5D6D4;
    width: 70px;
    height: 25px;
    border-radius: 12px;
    color: black;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .hability-fire {
    background-color: #FF3326;
    width: 70px;
    height: 25px;
    border-radius: 12px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .hability-grass {
    background-color: green;
    width: 70px;
    height: 25px;
    border-radius: 12px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  button {
    background-color: #FFCB05;
    border: none;
    border-radius: 8px;
    width: 90%;
    height: 32px;
    cursor: pointer;
  }
  `;

export default PokeCardsSTL;