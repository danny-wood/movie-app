import React from "react";
import { Row, Col } from "reactstrap";
import { MdPersonOutline } from "react-icons/md";
import { RiLoginCircleLine, RiLogoutCircleLine } from "react-icons/ri";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import IconButton from "../common/IconButton";

function AccountNav() {
  const { user, signout, signin } = useAuth();
  const history = useHistory();

  if (!user)
    return (
      <IconButton onClick={signin} title="login" className="ml-2">
        <RiLoginCircleLine />
      </IconButton>
    );

  return (
    <Row noGutters className="align-items-center">
      <Col xs="auto mx-2">
        <IconButton onClick={() => history.push("/profile")} title="profile">
          <MdPersonOutline />
        </IconButton>
      </Col>
      <Col xs="auto">
        <IconButton onClick={signout} title="logout">
          <RiLogoutCircleLine />
        </IconButton>
      </Col>
      <Col xs="auto" className="ml-2">
        Hi {user.name}
      </Col>
    </Row>
  );
}

export default AccountNav;
