import styled from "styled-components";

const ButtonDarkModeSTL = styled.button.attrs((props) => ({
  onClick: props.onClick,
  change: props.change,
}))`
  width: 120px;
  border-radius: 15px;
  position: fixed;
  top: 87%;
  left: 40px;
  z-index: -1;
  color: ${ (props) => props.change ? 'white' : 'black' };
  background-color: inherit;
  border: 1px, solid;
  cursor: pointer;

  img {
    width: 10px;
    margin-right: 5px;
  }
`;

export default ButtonDarkModeSTL