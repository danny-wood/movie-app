import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import { getMovie } from "../../services/mediaService";
import HeroBanner from "../ui/HeroBanner";
import { baseImageUrl } from "../../config.json";
import Loading from "../common/Loading";
import imageSizeEnum from "../../enums/imageSizeEnum";

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

  const { backdrop_path: heroBanner } = movie;

  return (
    <>
      <HeroBanner
        title={movie.title}
        subtext={movie.tagline}
        image={
          heroBanner &&
          `${baseImageUrl}/${imageSizeEnum.Backdrop.w1280}/${heroBanner}`
        }
      />
      <Container className="mt-4">
        <Row>
          {movie.poster_path && (
            <Col xs="12" sm="auto" className="d-none d-md-block">
              <img
                src={`${baseImageUrl}/${imageSizeEnum.Poster.w185}/${movie.poster_path}`}
                alt={movie.title}
                style={{ maxWidth: "100%" }}
              />
            </Col>
          )}
          <Col>
            <h2 className="mb-3">Overview</h2>
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
