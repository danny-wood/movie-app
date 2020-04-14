import React from "react";
import { Row, Col } from "reactstrap";
import Skeleton from "react-loading-skeleton";

function SkeletonRow({ rowCount = 6 }) {
  const items = [];

  for (let i = 0; i < rowCount; i++) {
    items.push(
      <Col xs="12" md="2" className="mb-3" key={`skeleton-item-${i}`}>
        <Skeleton height={240} />
        <Skeleton height={60} />
      </Col>
    );
  }

  return <Row>{items}</Row>;
}

export default SkeletonRow;
