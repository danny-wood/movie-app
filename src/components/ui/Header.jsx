import React from "react";
import Nav from "./Nav";
import styled from "styled-components";
import vars from "../../styles/vars";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import Search from "./Search";
import { useAuth } from "../../hooks/useAuth";

const Header = () => {
  const { user } = useAuth();

  return (
    <StyledHeader>
      <Container>
        <Row className="align-items-center">
          <Col xs="12" sm="auto" className="text-center">
            <StyledLogo to="/">
              <img
                src={require("../../assets/svg/movie-app-logo.svg")}
                alt="Movie App"
              />
            </StyledLogo>
          </Col>
          <Col sm="auto">
            <Nav />
          </Col>
          <Col className="text-right d-none d-lg-block">
            <Search />
          </Col>
          {user && <Col xs="auto">{user.name}</Col>}
        </Row>
      </Container>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header`
  color: ${vars.white};
  background: ${vars.grey_800};
  padding: 0.8rem 0;
`;

const StyledLogo = styled(Link)`
  font-size: 1.5rem;
  font-weight: 900;
  color: ${vars.primary};
  text-decoration: none;
  background: ${vars.primaryGradient};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline-block;
  position: relative;
  top: 3px;

  img {
    width: 45px;
    height: 37px;
  }
`;
