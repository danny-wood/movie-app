import React, { useState, useEffect } from "react";
import { Row, Col } from "reactstrap";

function TrendingList(props) {
  const [trendingList, setTrendingList] = useState([
    { id: 123, title: "test1" },
    { id: 456, title: "test2" },
  ]);
  return (
    <Row>
      {trendingList.map((trendingItem) => (
        <Col key={trendingItem.id}>{trendingItem.title}</Col>
      ))}
    </Row>
  );
}

export default TrendingList;
