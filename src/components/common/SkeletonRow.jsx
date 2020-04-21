import React from "react";
import { Row, Col } from "reactstrap";
import Skeleton from "react-loading-skeleton";
import styled from "styled-components";
import vars from "../../styles/vars";

function SkeletonRow({ rowCount = 5 }) {
  const items = [];

  for (let i = 0; i < rowCount; i++) {
    items.push(
      <StyledCol xs="12" md="auto" className="mb-3" key={`skeleton-item-${i}`}>
        <Skeleton height={240} />
        <Skeleton height={60} />
      </StyledCol>
    );
  }

  return <Row>{items}</Row>;
}

export default SkeletonRow;

const StyledCol = styled(Col)`
  @media (min-width: ${vars.screen_md_min}) {
    width: 20%;
  }
`;
