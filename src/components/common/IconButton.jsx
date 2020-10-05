import React from "react";
import styled from "styled-components";
import vars from "../../styles/vars";

function IconButton({ isActive, isAbsolute, handleClick, children, ...rest }) {
  return (
    <StyledIconButton
      isActive={isActive}
      isAbsolute={isAbsolute}
      onClick={handleClick}
      {...rest}
    >
      {children}
    </StyledIconButton>
  );
}

export default IconButton;

const StyledIconButton = styled.button`
  background: none;
  color: ${(props) => (props.isActive ? vars.primary : vars.white)};
  border: none;
  padding: 8px;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  font-size: 30px;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  transition: ease-in-out 200ms;
  background: transparent;
  position: ${(props) => (props.isAbsolute ? "absolute" : "relative")};
  top: 0;
  right: 0;

  &:hover {
    background: ${(props) =>
      props.isActive ? "transparent" : vars.whiteTransparent("0.3")};
  }
`;
