import styled from "styled-components";

const HomeCardTableSTL = styled.section.attrs((props) => ({
  darkMode: props.darkMode,
  image: props.image,
}))`
background-color: ${(props) => props.darkMode ? 'black' : '#E5E5E5' };
display: flex;
flex-direction: column;
justify-content: space-around;
height: 100vh;

.LeaveButton {
  border-radius: 15px;
  border: 1px solid ${(props) => props.darkMode ? 'white' : 'black' };
  color: ${(props) => props.darkMode ? 'white' : 'black'};
  background-color: inherit;
  width: 70px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  cursor: pointer;
}

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

export default HomeCardTableSTL