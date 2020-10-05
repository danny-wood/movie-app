import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import Header from "./Header";
import Footer from "./Footer";
import vars from "../../styles/vars";
import { Helmet } from "react-helmet";

const Layout = ({ children }) => {
  return (
    <LayoutContainer>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </Helmet>
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

    @media (max-width: ${vars.screen_xs_max}) {
      padding-bottom: 57px;
    } 
  }
  
  main{
    flex-grow: 1;
  }

  h1,h2,h3{
    margin-top: 0;
    font-weight: 800;
  }

  a{
    text-decoration: none;
    color: ${vars.grey_800};
  }

  p{
    margin-top: 0;
  }
`;

const LayoutContainer = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`;
