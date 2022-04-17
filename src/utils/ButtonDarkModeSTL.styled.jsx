import styled from "styled-components";

const ButtonDarkModeSTL = styled.button.attrs((props) => ({
  onClick: props.onClick,
  change: props.change,
}))`
  width: 120px;
  border-radius: 15px;
  color: ${ (props) => props.change ? 'white' : 'black' };
  background-color: inherit;
  height: 30px;
  /* border: 1px, solid; */
  border: 1px solid ${ (props) => props.change ? 'white' : 'black' };
  cursor: pointer;
  margin-left: 40px;

  img {
    width: 10px;
    margin-right: 5px;
  }
`;

export default ButtonDarkModeSTL