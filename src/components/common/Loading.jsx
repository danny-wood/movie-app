import React from "react";
import styled from "styled-components";

function Loading(props) {
  return (
    <LoadingContainer>
      <img
        alt="Loading..."
        src={require("../../assets/svg/loading-ellipsis.svg")}
        style={{ width: 200 }}
      />
    </LoadingContainer>
  );
}

export default Loading;

const LoadingContainer = styled.div`
  text-align: center;
  padding: 2rem 0;
`;
