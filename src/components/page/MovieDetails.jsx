import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import { getMovie } from "../../services/mediaService";
import HeroBanner from "../ui/HeroBanner";
import { baseImageUrl } from "../../config.json";
import Loading from "../common/Loading";

function MovieDetails(props) {
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const data = await getMovie(props.match.params.id);
      setMovie(data);
      setIsLoading(false);
    };

    getData();
  }, []);

  if (isLoading) return <Loading />;

  return (
    <>
      <HeroBanner
        title={movie.title}
        subtext={movie.tagline}
        image={`${baseImageUrl}/w1280/${movie.backdrop_path}`}
      />
      <Container className="mt-4">
        <Row>
          <Col xs="12" sm="auto">
            <img
              src={`${baseImageUrl}/w200/${movie.poster_path}`}
              alt={movie.title}
              style={{ maxWidth: "100%" }}
            />
          </Col>
          <Col>
            <h2>Overview</h2>
            <p>{movie.overview}</p>
          </Col>
          <Col xs="12" sm="3">
            <p>
              <strong>Status:</strong> {movie.status}
            </p>
            <p>
              <strong>Runtime:</strong> {movie.runtime}min
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default MovieDetails;
