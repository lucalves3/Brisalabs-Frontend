import React from "react";
import PokeCardsSTL from "./pokeCardsSTL";

const PokeCards = ({ image, name, type, id}) => {
  return (
    <PokeCardsSTL>
      <div>
        heart
      </div>
      <img src={image} alt={name} />
      <div>
      <h1>
        {name}
      </h1>
      <p>
        ID: {id}
      </p>
      </div>
      <div>
        <p>Eletrico</p>
        <p>Fire</p>
      </div>
      <button>
        Ver detalhes
      </button>
    </PokeCardsSTL>
  );
};

export default PokeCards;