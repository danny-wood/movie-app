import React, { useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import { useAuth } from "../../hooks/useAuth";
import { useLocation } from "react-router-dom";
import queryString from "query-string";

function Approve(props) {
  const { approve } = useAuth();
  const location = useLocation();

  useEffect(
    function () {
      const qs = queryString.parse(location.search);
      qs.approved && approve(qs.request_token);
    },
    [approve, location]
  );

  return (
    <Container>
      <Row>
        <Col>
          <h1 className="mt-4">Approved</h1>
        </Col>
      </Row>
    </Container>
  );
}

export default Approve;
