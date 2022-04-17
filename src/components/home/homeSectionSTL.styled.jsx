import styled from "styled-components";

const HomeSectionSTL = styled.section.attrs((props) => ({
  darkMode: props.darkMode,
  image: props.image,
}))`
background-color: ${(props) => props.darkMode ? 'black' : '#E5E5E5' };
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-evenly;

.typePokefalse {
  border: 1px solid;
  border-radius: 15px;
  background-color: inherit;
  margin: 0px 10px 0px 10px;
  padding: 10px;
  width: 145px;
  font-weight: 300;
  color: ${(props) => props.darkMode ? 'white' : 'black'};
  cursor: pointer;
}

.sectionFavorites {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 30px;
  margin-top: 10px;
}

.typePoketrue {
  border: none;
  border-radius: 15px;
  background-color: inherit;
  margin: 0px 10px 0px 10px;
  padding: 10px;
  width: 145px;
  font-weight: 300;
  color: ${(props) => props.darkMode ? 'black' : 'black'};
  background-color: ${(props) => props.darkMode ? '#FFCB05' : '#FFCB05'};
  cursor: pointer;
}

.typePoke:focus {
  border: none;
  color: ${(props) => props.darkMode ? 'black' : 'black'};
  background-color: ${(props) => props.darkMode ? '#FFCB05' : '#FFCB05'};
  font-weight: 800 bold;
}
`;

export default HomeSectionSTL