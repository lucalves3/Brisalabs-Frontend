import styled from "styled-components";
import loginImage from '../../images/login.svg';

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
  background-color: inherit;
  width: 70px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  cursor: pointer;
}
`;

export default HeaderSTL