import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import HeroBanner from "../ui/HeroBanner";
import MediaList from "./../common/MediaList";
import { getTVShows } from "../../services/mediaService";

const TVShows = () => {
  const [tvShows, setTvShows] = useState([]);
  const [tvShowsLoading, setTvShowsLoading] = useState(true);

  useEffect(() => {
    const getMoviesData = async () => {
      const data = await getTVShows();
      setTvShows(data.results);
      setTvShowsLoading(false);
    };

    getMoviesData();
  }, []);

  return (
    <>
      <HeroBanner title="TV Shows" />
      <Container className="mt-4">
        <Row>
          <Col>
            <MediaList data={tvShows} isLoading={tvShowsLoading} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default TVShows;
