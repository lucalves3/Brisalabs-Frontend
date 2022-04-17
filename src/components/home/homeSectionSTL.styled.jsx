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

.typePoke {
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

.typePoke:focus {
  border: none;
  color: ${(props) => props.darkMode ? 'black' : 'black'};
  background-color: ${(props) => props.darkMode ? '#FFCB05' : '#FFCB05'};
  font-weight: 800 bold;
}
`;

export default HomeSectionSTL