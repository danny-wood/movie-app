import React from "react";
import { Container, Row, Col } from "reactstrap";
import HeroBanner from "../ui/HeroBanner";

const People = () => {
  return (
    <>
      <HeroBanner title="People" />
      <Container className="mt-4">
        <Row>
          <Col>
            <p>People...</p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default People;
