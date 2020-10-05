import React from "react";
import { Container, Row, Col } from "reactstrap";
import MovieTable from "../common/MovieTable";

const Dashboard = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h1 className="mt-4">Dashboard</h1>
          <MovieTable />
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
