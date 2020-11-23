import React, { useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import { useAuth } from "../../hooks/useAuth";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import Loading from "../common/Loading";

function Approve() {
  const { approve } = useAuth();
  const location = useLocation();

  useEffect(
    function () {
      const qs = queryString.parse(location?.search);
      qs.approved && approve(qs.request_token);
      console.log("qs", qs);
      console.log("location", location);
    },
    [approve, location]
  );

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
