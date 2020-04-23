import React from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "reactstrap";
import vars from "../../styles/vars";
import styled from "styled-components";

const Nav = () => {
  return (
    <StyledNav>
      <Row>
        <Col xs="4" sm="auto">
          <SyledLink to="/movies">Movies</SyledLink>
        </Col>
        <Col xs="4" sm="auto">
          <SyledLink to="/tv-shows">TV Shows</SyledLink>
        </Col>
        <Col xs="4" sm="auto">
          <SyledLink to="/people">People</SyledLink>
        </Col>
      </Row>
    </StyledNav>
  );
};

export default Nav;

const SyledLink = styled(Link)`
  text-decoration: none;
  color: ${vars.white};
  &:hover {
    color: ${vars.primary};
  }
`;

const StyledNav = styled.nav`
  @media (max-width: ${vars.screen_xs_max}) {
    background-color: ${vars.grey_800};
    padding: 1.2rem 15px;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 999;
    text-align: center;
  }
`;
