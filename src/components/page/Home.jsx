import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import MediaList from "../common/MediaList";
import HeroBanner from "../ui/HeroBanner";
import { getTrending } from "../../services/trendingService";
import { getUpcomingMovies } from "../../services/mediaService";

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [trendingMoviesLoading, setTrendingMoviesLoading] = useState(true);
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [upcomingMoviesLoading, setUpcomingMoviesLoading] = useState(true);

  useEffect(() => {
    const initTrendingMovies = async () => {
      const data = await getTrending("movie", "week");
      setTrendingMovies(data.results.splice(0, 5));
      setTrendingMoviesLoading(false);
    };

    const initUpcomingMovies = async () => {
      const data = await getUpcomingMovies();
      setUpcomingMovies(data.results.splice(0, 5));
      setUpcomingMoviesLoading(false);
    };

    initUpcomingMovies();
    initTrendingMovies();
  }, []);

  return (
    <>
      <HeroBanner
        title="Welcome to Movie App"
        subtext="Millions of movies, TV shows and people to discover. Explore
                now."
      />
      <Container>
        <Row>
          <Col>
            <section className="mt-4">
              <h2>Trending Movies</h2>
              <MediaList
                isLoading={trendingMoviesLoading}
                data={trendingMovies}
              />
            </section>
          </Col>
        </Row>
        <Row>
          <Col>
            <section className="mt-4">
              <h2>Upcoming Movies</h2>
              <MediaList
                isLoading={upcomingMoviesLoading}
                data={upcomingMovies}
              />
            </section>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
