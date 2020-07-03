import React from "react";
import { MdSearch } from "react-icons/md";
import styled from "styled-components";
import vars from "../../styles/vars";

function Search(props) {
  return (
    <StyledSearchButton>
      <MdSearch />
    </StyledSearchButton>
  );
}

export default Search;

const StyledSearchButton = styled.button`
  background: none;
  color: inherit;
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

  &:hover {
    background: ${vars.whiteTransparent("0.3")};
  }
`;
