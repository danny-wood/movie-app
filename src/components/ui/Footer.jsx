import React from "react";
import { Container, Row, Col } from "reactstrap";
import styled from "styled-components";
import vars from "../../styles/vars";

const Footer = () => {
  return (
    <>
      <FooterBorderTop />
      <StyledFooter>
        <Container>
          <Row className="align-items-center text-center text-sm-left">
            <Col xs="12" className="col-sm mb-3 mb-sm-0">
              &copy;Movie App {new Date().getFullYear()}
            </Col>
            <Col xs="12" sm="auto">
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
    </>
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

const FooterBorderTop = styled.div`
  margin-top: 20px;
  width: 100%;
  height: 5px;
  background: ${vars.primary};
  background: ${vars.multiLinearGradient};
`;
