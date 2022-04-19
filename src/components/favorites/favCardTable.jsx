import React, { useContext, useState, useEffect } from "react";
import { Context } from "../../context/context";
import darkModeLight from "../../images/moon-dark-mode.svg"
import ButtonDarkModeSTL from "../../utils/ButtonDarkModeSTL.styled";
import darkModeDark from "../../images/sun-dark-mode.svg"
import { getAllPokemons, getApiPokemon, searchApiPokemonById } from "../../services/api";
import PokeCards from "../pokeCards/pokeCards";
import HomeSectionSTL from "../home/homeSectionSTL.styled";
import HomeCardTableSTL from "../home/homeCardTableSTL.styled";

const FavCardTable = () => {
  const {typeButton, setTypeButton, setTextButton, textButton, favPokes} = useContext(Context);
  const [imageDM, setImageDM] = useState(darkModeLight);
  const [pokeDatas, setPokeDatas] = useState([]);
  const [pokeInfos, setPokeInfos] = useState([]);
  const [filterPokes, setFilterPokes] = useState('');
  const [isFilter, setIsFilter] = useState(false);

  useEffect(() => {
    async function getPokeByName() {
      let arrayPokes = [];
      favPokes.map(async (poke) => {
        const result = await searchApiPokemonById(poke);
        arrayPokes.push(result);
          setPokeInfos(arrayPokes);
      });
    };
    getPokeByName();
  }, []);

  console.log(favPokes)

  const darkMode = () => {
    if (typeButton === false) {
      setTypeButton(true);
      setImageDM(darkModeDark)
      setTextButton('Tema claro');
    }
    if (typeButton === true) {
      setTypeButton(false);
      setImageDM(darkModeLight)
      setTextButton('Tema escuro');
    }
  };
  return (
    <HomeSectionSTL darkMode={typeButton}>
      <div className="sectionFavorites">
        <ButtonDarkModeSTL onClick={darkMode} change={typeButton}>
          <img src={imageDM} alt={typeButton === false ? 'imagem de lua' : 'imagem de sol'} />
          {textButton}
        </ButtonDarkModeSTL>
      </div>
      { 
        <HomeCardTableSTL darkMode={typeButton}>
          { pokeInfos && pokeInfos.map((poke) => (
            <PokeCards 
            name={poke?.name}
            image={poke?.sprites?.front_default}
            id={poke?.id}
            type={poke?.types}
            />
          )) }
        </HomeCardTableSTL>
      }
    </HomeSectionSTL>
  );
};

export default FavCardTable;