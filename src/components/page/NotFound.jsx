import React from "react";
import { Container, Row, Col } from "reactstrap";

const NotFound = () => {
  return (
    <Container>
      <Row>
        <Col>
          <section>
            <h1>404</h1>
            <p>You just got 404'd!</p>
          </section>
        </Col>
      </Row>
    </Container>
  );
};

export default NotFound;
