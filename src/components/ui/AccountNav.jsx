import React from "react";
import { Row, Col } from "reactstrap";
import { MdPersonOutline } from "react-icons/md";
import { RiLoginCircleLine, RiLogoutCircleLine } from "react-icons/ri";
import { useAuth } from "../../hooks/useAuth";
import IconButton from "../common/IconButton";

function AccountNav() {
  const { user, signout, signin } = useAuth();

  if (!user)
    return (
      <IconButton onClick={signin} title="login" className="ml-2">
        <RiLoginCircleLine />
      </IconButton>
    );

  return (
    <Row noGutters className="align-items-center">
      <Col xs="auto mx-2">
        <IconButton>
          <MdPersonOutline />
        </IconButton>
      </Col>
      <Col xs="auto">
        <IconButton onClick={signout} title="logout">
          <RiLogoutCircleLine />
        </IconButton>
      </Col>
    </Row>
  );
}

export default AccountNav;
