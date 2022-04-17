import styled from "styled-components";

const HomeCardTableSTL = styled.section.attrs((props) => ({
  darkMode: props.darkMode,
  image: props.image,
}))`
background-color: ${(props) => props.darkMode ? 'black' : '#E5E5E5' };
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-around;
/* height: 100vh; */
align-items: center;

`;

export default HomeCardTableSTL