import React, { useState, useCallback, useRef } from "react";
import { MdSearch } from "react-icons/md";
import styled from "styled-components";
import { debounce } from "lodash";
import vars from "../../styles/vars";
import { multiSearch } from "../../services/searchService";
import { useHistory } from "react-router-dom";
import MediaTypeBadge from "../common/MediaTypeBadge";
import IconButton from "../common/IconButton";

const Search = () => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const history = useHistory();
  const searchInput = useRef();

  const sendQuery = async (searchTerm) => {
    if (searchTerm) {
      const response = await multiSearch(searchTerm);
      setSearchResults(response.results?.slice(0, 5));
    } else {
      setSearchResults([]);
    }
  };

  const delayedQuery = useCallback(
    debounce((value) => sendQuery(value), 500),
    []
  );

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    delayedQuery(e.target.value);
  };

  const handleSearchClick = (e, mediaType, id) => {
    e.preventDefault();
    setSearchTerm("");
    setSearchResults([]);
    setIsSearchVisible(false);
    history.push(parseUrl(mediaType, id));
  };

  const handleShowSearch = (e) => {
    e.preventDefault();
    setIsSearchVisible(!isSearchVisible);
    searchInput.current && searchInput.current.focus();
  };

  const parseUrl = (mediaType, id) => {
    switch (mediaType) {
      case "tv":
        return `/tv-show/${id}`;
      case "person":
        return `/people/${id}`;
      default:
        return `/movie/${id}`;
    }
  };

  return (
    <StyledSearhFormGroup>
      <StyledSearchTextInput
        isSearchVisible={isSearchVisible}
        value={searchTerm}
        onChange={handleSearchChange}
        ref={searchInput}
      />
      <IconButton
        isActive={isSearchVisible}
        isAbsolute={true}
        onClick={handleShowSearch}
      >
        <MdSearch />
      </IconButton>
      <StyledAutoComplete>
        {searchResults.map((item) => (
          <div key={item.id}>
            <a
              href="/"
              onClick={(e) => handleSearchClick(e, item.media_type, item.id)}
            >
              {item.title || item.name}
              <MediaTypeBadge mediaType={item.media_type} />
            </a>
          </div>
        ))}
      </StyledAutoComplete>
    </StyledSearhFormGroup>
  );
};

export default Search;

const StyledSearhFormGroup = styled.form`
  position: relative;
  width: 100%;
  max-width: 500px;
  display: inline-block;
`;

const StyledSearchTextInput = styled.input`
  display: inline-block;
  height: 35px;
  border: 1px solid ${vars.white};
  outline: none;
  padding-left: 10px;
  padding-right: 50px;
  font-family: ${vars.primaryFont};
  margin-top: 5px;
  transition: ease-in-out 300ms;
  width: ${(props) => (props.isSearchVisible ? "100%" : 0)};
  opacity: ${(props) => (props.isSearchVisible ? 1 : 0)};
`;

const StyledAutoComplete = styled.div`
  background: ${vars.white};
  position: absolute;
  top: 40px;
  left: 0;
  z-index: 20;
  width: 100%;
  text-align: left;

  div {
    border-bottom: 1px solid ${vars.grey_300};
    color: ${vars.grey_700};
  }

  span {
    float: right;
  }

  a {
    padding: 10px 15px;
    display: block;
    font-size: 0.9rem;

    &:hover {
      color: ${vars.primary};
    }
  }
`;
