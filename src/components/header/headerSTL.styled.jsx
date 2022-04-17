import styled from "styled-components";

const HeaderSTL = styled.header.attrs((props) => ({
  darkMode: props.darkMode,
  image: props.image,
}))`
background-color: ${(props) => props.darkMode ? '#4B4B4D' : '#FFCB05' };
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-around;
height: 50px;

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

.navigations-links {
  border: none;
  background-color: inherit;
  /* margin: 0px 10px 0px 10px; */
  padding: 16px;
  font-weight: 300;
  color: ${(props) => props.darkMode ? 'white' : 'black'};
  cursor: pointer;
}

.navigations-links:focus {
  border-bottom: 3px solid ${(props) => props.darkMode ? '#FFCB05' : 'black'};
  color: ${(props) => props.darkMode ? '#FFCB05' : 'black'};
  font-weight: 800 bold;
}
`;

export default HeaderSTL