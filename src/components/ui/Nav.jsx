import React from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "reactstrap";
import vars from "../../styles/vars";
import styled from "styled-components";

const Nav = () => {
  return (
    <Row>
      <Col xs="auto">
        <SyledLink to="/movies">Movies</SyledLink>
      </Col>
      <Col xs="auto">
        <SyledLink to="/tv-shows">TV Shows</SyledLink>
      </Col>
      <Col xs="auto">
        <SyledLink to="/people">People</SyledLink>
      </Col>
    </Row>
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
