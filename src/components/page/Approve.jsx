import React, { useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import { useAuth } from "../../hooks/useAuth";
import Loading from "../common/Loading";

function Approve() {
  const { approve } = useAuth();

  useEffect(() => {
    approve();
  }, []);

  return (
    <Container>
      <Row>
        <Col>
          <Loading />
        </Col>
      </Row>
    </Container>
  );
}

export default Approve;
