import React from "react";
import { Container, Row, Col } from "reactstrap";
import styled from "styled-components";
import vars from "../../styles/vars";

const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <Row className="align-items-center">
          <Col>Movie App {new Date().getFullYear()}</Col>
          <Col xs="auto">
            <a href="https://www.themoviedb.org">
              <TMDBLogo
                src={require("../../assets/images/tmdb-logo.svg")}
                alt="TMDB"
              />
            </a>
          </Col>
        </Row>
      </Container>
    </StyledFooter>
  );
};

export default Footer;

const StyledFooter = styled.footer`
  padding: 1.5rem 0;
  background: ${vars.grey_300};
  color: ${vars.grey_700};
`;

const TMDBLogo = styled.img`
  width: 100%;
  max-width: 200px;
`;
