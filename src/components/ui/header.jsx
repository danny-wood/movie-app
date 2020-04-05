import React from "react";
import Nav from "./nav";
import styled from "styled-components";
import vars from "../../styles/vars";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <Row className="align-items-center">
          <Col xs="auto">
            <StyledLogo to="/">MOVIE APP</StyledLogo>
          </Col>
          <Col>
            <Nav />
          </Col>
        </Row>
      </Container>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header`
  color: ${vars.white};
  background: ${vars.grey_800};
  padding: 1.2rem 0;
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
`;
