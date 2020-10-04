import React from "react";
import { Container, Row, Col } from "reactstrap";
import { useAuth } from "../../hooks/useAuth";
import HeroBanner from "./../ui/HeroBanner";
import styled from "styled-components";
import vars from "../../styles/vars";

function Profile() {
  const { user } = useAuth();

  console.log("Rendering profile", user);

  return (
    <>
      <HeroBanner title="Your Profile" />
      <Container>
        <Row>
          <Col xs="12" md="auto" className="mt-3">
            <StyledProfileImage
              src={`https://www.gravatar.com/avatar/${user?.avatar.gravatar.hash}?s=200`}
              lazyload
            />
          </Col>
          <Col className="mt-3">
            <p>
              <strong>Name:</strong> {user?.name}
            </p>
            <p>
              <strong>Username:</strong> {user?.username}
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Profile;

const StyledProfileImage = styled.img`
  border-radius: 50%;
  margin-top: -50%;

  @media (max-width: ${vars.screen_md_max}) {
    margin-top: 0;
  }
`;
