import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "reactstrap";
import vars from "../../styles/vars";

function HeroBanner(props) {
  return (
    <StyledHeroBanner image={props.image}>
      <Container>
        <Row className="align-items-center">
          <Col>
            <h1>{props.title}</h1>
            {props.subtext && <p>{props.subtext}</p>}
          </Col>
        </Row>
      </Container>
    </StyledHeroBanner>
  );
}

export default HeroBanner;

const StyledHeroBanner = styled.section`
  background: ${(props) =>
    props.image
      ? `linear-gradient(90deg, rgba(255, 0, 136, 0.5), rgba(221, 0, 238, 0.5)), url(${props.image}) no-repeat center center transparent`
      : vars.primaryGradient};
  background-size: cover;
  padding: 2rem 0;
  text-align: center;
  color: ${vars.white};

  .row {
    min-height: ${(props) => (props.image ? "300px" : 0)};
  }
  h1 {
    margin: 0;
    text-transform: uppercase;
    font-size: 4rem;
    font-weight: 900;
  }

  p {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    margin-top: 1rem;
  }
`;
