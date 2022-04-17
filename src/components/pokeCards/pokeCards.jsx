import React from "react";
import PokeCardsSTL from "./pokeCardsSTL";

const PokeCards = ({ image, name, type, id}) => {
  console.log(type.map((hab) => (
    hab?.type?.name
  )))
  return (
    <PokeCardsSTL>
      <div>
        heart
      </div>
      <img src={image} alt={name} />
      <div>
      <h1>
        {name.charAt(0).toUpperCase() + name.slice(1)}
      </h1>
      <p className="idPoke">
        ID: {id}
      </p>
      </div>
      <div className="typePokes">
        {type.map((hab) => (
          <>
          <p className={`hability-${hab?.type?.name}`}>{hab?.type?.name.charAt(0).toUpperCase() + hab?.type?.name.slice(1)}</p>
          {console.log(`hability-${hab?.type?.name}`)}
          </>
        ))}
      </div>
      <button>
        Ver detalhes
      </button>
    </PokeCardsSTL>
  );
};

export default PokeCards;