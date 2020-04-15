import React from "react";
import { Container, Row, Col } from "reactstrap";
import TrendingList from "../common/TrendingList";
import HeroBanner from "../ui/HeroBanner";

const Home = () => {
  return (
    <>
      <HeroBanner
        title="Welcome to Movie App"
        subtext="Millions of movies, TV shows and people to discover. Explore
                now."
      />
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
