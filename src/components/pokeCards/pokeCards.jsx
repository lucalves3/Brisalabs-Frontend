import React, { useContext } from "react";
import PokeCardsSTL from "./pokeCardsSTL";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import { Context } from "../../context/context";

const PokeCards = ({ image, name, type, id}) => {
  const { favPokes, setFavPokes } = useContext(Context);

  const favIcons = () => {
    if (favPokes.includes(id) === false) {
      setFavPokes([...favPokes, id])
    }
    if (favPokes.includes(id) === true) {
      setFavPokes(favPokes.filter((e) => e !== id));
    }
  };

  return (
    <PokeCardsSTL>
      <div className="heart-div">
        { favPokes.includes(id) ?
        <FavoriteRoundedIcon sx={{color: 'red'}} onClick={() => favIcons()} />
        :
        <FavoriteBorderIcon onClick={() => favIcons()} />
         }
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