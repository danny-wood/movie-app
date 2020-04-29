import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import vars from "../../styles/vars";

function Button(props) {
  return <StyledButton {...props}>{props.children}</StyledButton>;
}

export default Button;

const StyledButton = styled(Link)`
  background: ${vars.primary};
  background: ${vars.primaryGradient};
  padding: 1rem 2rem;
  color: ${vars.white};
  display: inline-block;
  border-radius: 1.5rem;
  cursor: pointer;
  opacity: 1;
  transition: ease-in-out 200ms;

  &:hover {
    opacity: 0.7;
  }
`;
