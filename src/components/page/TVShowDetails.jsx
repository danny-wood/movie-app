import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import { getTvShow } from "../../services/mediaService";
import HeroBanner from "../ui/HeroBanner";
import { baseImageUrl } from "../../config.json";
import Loading from "../common/Loading";
import imageSizeEnum from "../../enums/imageSizeEnum";
import Button from "./../common/Button";

function TVShowDetails(props) {
  const [tvShow, setTvShow] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const data = await getTvShow(props.match.params.id);
      setTvShow(data);
      setIsLoading(false);
    };

    getData();
  }, [props.match.params.id]);

  if (isLoading) return <Loading />;

  const { backdrop_path: heroBanner } = tvShow;

  return (
    <>
      <HeroBanner
        title={tvShow.name}
        image={
          heroBanner &&
          `${baseImageUrl}/${imageSizeEnum.Backdrop.w1280}/${heroBanner}`
        }
      />
      <Container className="mt-4">
        <Row>
          {tvShow.poster_path && (
            <Col xs="12" sm="auto" className="d-none d-md-block">
              <img
                src={`${baseImageUrl}/${imageSizeEnum.Poster.w185}/${tvShow.poster_path}`}
                alt={tvShow.name}
                style={{ maxWidth: "100%" }}
                className="mb-3"
              />
            </Col>
          )}
          <Col>
            <h2 className="mb-3">Overview</h2>
            <p>{tvShow.overview}</p>
          </Col>
          <Col xs="12" sm="3">
            {tvShow.first_air_date && (
              <p>
                <strong>First Air Date:</strong> {tvShow.first_air_date}
              </p>
            )}
            {tvShow.episode_run_time > 0 && (
              <p>
                <strong>Episode Runtime:</strong> {tvShow.episode_run_time}min
              </p>
            )}
          </Col>
        </Row>
        <Row>
          <Col>
            <Button to="/tv-shows">Back</Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default TVShowDetails;
