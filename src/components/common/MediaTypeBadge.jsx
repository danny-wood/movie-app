import React from "react";
import styled from "styled-components";
import vars from "../../styles/vars";

const handleDisplayText = (mediaType) => {
  switch (mediaType) {
    case "tv":
      return "TV Show";
    case "person":
      return "People";
    default:
      return "Movie";
  }
};

function MediaTypeBadge({ mediaType }) {
  return (
    <StyledBadge mediaType={mediaType}>
      {handleDisplayText(mediaType)}
    </StyledBadge>
  );
}

export default MediaTypeBadge;

const handleBageColour = (mediaType) => {
  switch (mediaType) {
    case "tv":
      return vars.orange;
    case "person":
      return vars.green;
    default:
      return vars.blue;
  }
};

const StyledBadge = styled.span`
  display: inline-block;
  padding: 5px 10px;
  font-size: 0.6rem;
  color: ${vars.white} !important;
  background: ${(props) => handleBageColour(props.mediaType)};
  border-radius: 20px;
  border: none;
  outline: none;
`;
