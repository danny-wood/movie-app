import React, { useState, useCallback } from "react";
import { Row, Col } from "reactstrap";
import { MdSearch } from "react-icons/md";
import styled from "styled-components";
import _ from "lodash";
import vars from "../../styles/vars";
import { multiSearch } from "../../services/searchService";
import { Link } from "react-router-dom";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const sendQuery = async (searchTerm) => {
    if (searchTerm) {
      console.log(`Searching for ${searchTerm}`);
      const response = await multiSearch(searchTerm);
      console.log("Search Result", response);
      setSearchResults(response.results);
    } else {
      setSearchResults([]);
    }
  };

  const delayedQuery = useCallback(
    _.debounce((value) => sendQuery(value), 500),
    []
  );

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    delayedQuery(e.target.value);
  };

  const resetSearch = () => {
    setSearchTerm("");
    setSearchResults([]);
  };

  const parseUrl = (mediaType, id) => {
    switch (mediaType) {
      case "tv":
        return `/tv-show/${id}`;
      case "people":
        return `/people/${id}`;
      default:
        return `/movie/${id}`;
    }
  };

  return (
    <StyledForm>
      <Row className="align-items-center">
        <Col>
          <StyledSearchTextInput
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </Col>
        <Col>
          <StyledSearchButton>
            <MdSearch />
          </StyledSearchButton>
        </Col>
      </Row>
      <StyledAutoComplete>
        {searchResults.map((item) => (
          <div key={item.id}>
            <Link to={parseUrl(item.media_type, item.id)} onClick={resetSearch}>
              {item.title || item.name}
            </Link>
          </div>
        ))}
      </StyledAutoComplete>
    </StyledForm>
  );
};

export default Search;

const StyledForm = styled.form`
  position: relative;
`;

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

const StyledAutoComplete = styled.div`
  background: ${vars.white};
  position: absolute;
  top: 40px;
  left: 0;
  z-index: 20;
  div {
    padding: 5px;
    border-bottom: 1px solid ${vars.grey_500};
    color: ${vars.grey_700};
  }
`;
