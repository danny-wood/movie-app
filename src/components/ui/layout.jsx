import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import Header from "./Header";
import Footer from "./Footer";
import vars from "../../styles/vars";

const Layout = ({ children }) => {
  return (
    <LayoutContainer>
      <GlobalStyle />
      <Header />
      <main>{children}</main>
      <Footer />
    </LayoutContainer>
  );
};

export default Layout;

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Montserrat', sans-serif;
    margin: 0;
    color: ${vars.grey_800};
  }
  
  main{
    flex-grow: 1;
  }
`;

const LayoutContainer = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`;
