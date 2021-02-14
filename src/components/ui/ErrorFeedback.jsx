import React from "react";
import styled from "styled-components";
import vars from "../../styles/vars";

function ErrorFeedback({ error, resetErrorBoundary }) {
  return (
    <StyledError>
      <StyledErrorContent>
        <h1>Error!</h1>
        <p>{error.message}</p>
        <button onClick={resetErrorBoundary}>Try again</button>
      </StyledErrorContent>
    </StyledError>
  );
}

export default ErrorFeedback;

const StyledError = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  background: ${vars.primaryGradient};
  height: 100vh;
  color: ${vars.white};
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;

  h1,
  p {
    margin-top: 0;
    margin-bottom: 1.5rem;
  }

  button {
    font-family: Arial, Helvetica, sans-serif;
    background: ${vars.primary};
    background: ${vars.primaryGradient};
    padding: 1rem 2rem;
    color: ${vars.white};
    display: inline-block;
    border-radius: 1.5rem;
    cursor: pointer;
    opacity: 1;
    transition: ease-in-out 200ms;
    border: none;
    outline: none;
    text-transform: uppercase;
    letter-spacing: 0.2rem;

    &:hover {
      opacity: 0.7;
    }
  }
`;

const StyledErrorContent = styled.div`
  padding: 2rem;
  border-radius: 30px;
  width: 320px;
  background: rgba(255, 255, 255, 0.3);
  box-shadow: 0 8px 32px 0 rgba(225, 225, 225, 0.37);
  backdrop-filter: blur(5.5px);
  -webkit-backdrop-filter: blur(5.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
`;
