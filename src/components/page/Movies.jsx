import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import { getMovies } from "../../services/mediaService";
import MediaList from "../common/MediaList";
import HeroBanner from "../ui/HeroBanner";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [moviesLoading, setMoviesLoading] = useState(true);

  useEffect(() => {
    const getMoviesData = async () => {
      const data = await getMovies();
      setMovies(data.results);
      setMoviesLoading(false);
    };

    getMoviesData();
  }, []);

  return (
    <>
      <HeroBanner title="Movies" />
      <Container className="mt-4">
        <Row>
          <Col>
            <MediaList data={movies} isLoading={moviesLoading} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Movies;
