import React, { useContext, useState, useEffect } from "react";
import { Context } from "../../context/context";
import darkModeLight from "../../images/moon-dark-mode.svg"
import ButtonDarkModeSTL from "../../utils/ButtonDarkModeSTL.styled";
import darkModeDark from "../../images/sun-dark-mode.svg"
import HomeCardTableSTL from "./homeCardTableSTL.styled";
import { getAllPokemons, getApiPokemon } from "../../services/api";
import PokeCards from "../pokeCards/pokeCards";
import HomeSectionSTL from "./homeSectionSTL.styled";

const HomeCardTable = () => {
  const {typeButton, setTypeButton, setTextButton, textButton} = useContext(Context);
  const [imageDM, setImageDM] = useState(darkModeLight);
  const [pokeDatas, setPokeDatas] = useState([]);
  const [pokeInfos, setPokeInfos] = useState([]);
  const [filterPokes, setFilterPokes] = useState('');
  const [isFilter, setIsFilter] = useState(false);

  useEffect(() => {
    async function getAllPoke() {
      const result = await getAllPokemons();
      setPokeDatas(result?.results);
    }
    getAllPoke()
  }, []);

  useEffect(() => {
    async function getPokeByName() {
      let arrayPokes = [];
      pokeDatas.map(async (poke) => {
        const result = await getApiPokemon(poke.name);
        arrayPokes.push(result);
        if (arrayPokes.length === 20) {
          setPokeInfos(arrayPokes);
        }
      });
    };
    getPokeByName();
  }, [setPokeInfos, pokeDatas]);

  const filterPokemon = (type) => {
    if (type !== 'no') {
      setFilterPokes(type);
      setIsFilter(true);
    };
    if (type === 'no') {
      setIsFilter(false);
    }
  }

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
      <div style={{marginTop: '20px'}}>
        <button className="typePoke" onClick={() => filterPokemon('no')}>
          Todos
        </button>
        <button className="typePoke" onClick={() => filterPokemon('fire')}>
          Fire
        </button>
        <button className="typePoke" onClick={() => filterPokemon('electric')}>
          Eletric
        </button>
        <button className="typePoke" onClick={() => filterPokemon('water')}>
          Water
        </button>
      <ButtonDarkModeSTL onClick={darkMode} change={typeButton}>
        <img src={imageDM} alt={typeButton === false ? 'imagem de lua' : 'imagem de sol'} />
        {textButton}
      </ButtonDarkModeSTL>
      </div>
      {
        isFilter === true ?
        <HomeCardTableSTL darkMode={typeButton}>
          { pokeInfos && pokeInfos.filter((e) => e.types[0].type.name === filterPokes).map((poke) => (
            <PokeCards 
            name={poke?.name}
            image={poke?.sprites?.front_default}
            id={poke?.id}
            type={poke?.types}
            />
          )) }
        </HomeCardTableSTL>
        :
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

export default HomeCardTable;