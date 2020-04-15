import React, { useState, useEffect } from "react";
import { Row, Col } from "reactstrap";
import styled from "styled-components";
import { getTrending } from "./../../services/trendingService";
import vars from "../../styles/vars";
import SkeletonRow from "./SkeletonRow";
import { baseImageUrl } from "../../config.json";
import { Link } from "react-router-dom";

function TrendingList(props) {
  const [trendingList, setTrendingList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      console.log("Getting trending data...");
      setIsLoading(true);
      const response = await getTrending("movie", "week");
      setTrendingList(response.data.results);
      setIsLoading(false);
    };

    getData();
  }, []);

  if (isLoading) return <SkeletonRow />;

  return (
    <Row>
      {trendingList.slice(0, 6).map((trendingItem) => (
        <Col xs="12" md="2" className="mb-3" key={trendingItem.id}>
          <TrendingItem to={`/movie/${trendingItem.id}`}>
            {trendingItem.poster_path && (
              <img
                src={`${baseImageUrl}/w500/${trendingItem.poster_path}`}
                alt={trendingItem.title}
                style={{ maxWidth: "100%" }}
              />
            )}
            <span>{trendingItem.title}</span>
          </TrendingItem>
        </Col>
      ))}
    </Row>
  );
}

export default TrendingList;

const TrendingItem = styled(Link)`
  background: ${vars.grey_200};
  height: 100%;
  min-height: 304px;
  display: block;

  span {
    display: block;
    padding: 1.3rem 0.5rem;
    text-align: center;
    font-size: 0.9rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
