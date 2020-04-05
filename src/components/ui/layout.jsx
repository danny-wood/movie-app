import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import Header from "./header";
import Footer from "./footer";

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
