import React from "react";
import { Container, Row, Col } from "reactstrap";
import TrendingList from "../common/TrendingList";

const Home = () => {
  return (
    <Container>
      <Row>
        <Col>
          <section>
            <h1>Home</h1>
            <TrendingList />
          </section>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
