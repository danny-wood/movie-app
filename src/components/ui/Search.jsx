import React, { useState } from "react";
import { Row, Col } from "reactstrap";
import { MdSearch } from "react-icons/md";
import styled from "styled-components";
import vars from "../../styles/vars";
import { multiSearch } from "../../services/searchService";

function Search(props) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await multiSearch(searchTerm);
    console.log("Search Result", result);
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <Row className="align-items-center">
        <Col>
          <StyledSearchTextInput
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </Col>
        <Col>
          <StyledSearchButton>
            <MdSearch />
          </StyledSearchButton>
        </Col>
      </Row>
    </form>
  );
}

export default Search;

const StyledSearchTextInput = styled.input`
  display: inline-block;
  height: 35px;
`;

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
