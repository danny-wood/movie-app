import React from "react";
import { Button } from "@material-ui/core";
import { Container, Row, Col } from "reactstrap";
import { useAuth } from "../../hooks/useAuth";

function Login(props) {
  const { signin } = useAuth();

  const handleSignIn = () => {
    signin();
  };

  return (
    <Container>
      <Row>
        <Col>
          <h1 className="mt-4">Login</h1>
          <Button variant="outlined" onClick={handleSignIn}>
            Submit
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
