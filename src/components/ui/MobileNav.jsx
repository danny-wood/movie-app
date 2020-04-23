import React from "react";
import styled from "styled-components";
import vars from "../../styles/vars";
import { Nav } from "reactstrap";

function MobileNav(props) {
  return (
    <StyledMobileNav>
      <Nav />
    </StyledMobileNav>
  );
}

export default MobileNav;

const StyledMobileNav = styled.div`
  background-color: ${vars.grey_800};
  padding: 0.8rem 0;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 999;

  @media (min-width: ${vars.screen_sm_min}) {
    display: none;
  }
`;
