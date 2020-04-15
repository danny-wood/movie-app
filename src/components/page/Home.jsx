import React from "react";
import { Container, Row, Col } from "reactstrap";
import TrendingList from "../common/TrendingList";
import styled from "styled-components";
import vars from "../../styles/vars";

const Home = () => {
  return (
    <>
      <HeroBanner>
        <Container>
          <Row>
            <Col>
              <h1>Welcome to Movie App</h1>
              <p>
                Millions of movies, TV shows and people to discover. Explore
                now.
              </p>
            </Col>
          </Row>
        </Container>
      </HeroBanner>
      <Container>
        <Row>
          <Col>
            <section className="mt-4">
              <h2>Trending Movies</h2>
              <TrendingList />
            </section>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;

const HeroBanner = styled.section`
  background: ${vars.primaryGradient};
  padding: 2rem 0;
  text-align: center;
  color: ${vars.white};

  h1 {
    margin: 0;
    text-transform: uppercase;
    font-size: 4rem;
    font-weight: 900;
  }

  p {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }
`;
