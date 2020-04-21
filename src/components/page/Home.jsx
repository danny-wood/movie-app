import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import MediaList from "../common/MediaList";
import HeroBanner from "../ui/HeroBanner";
import { getTrending } from "../../services/trendingService";

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [trendingMoviesLoading, setTrendingMoviesLoading] = useState(true);

  useEffect(() => {
    const getTrendingMovies = async () => {
      const data = await getTrending("movie", "week");
      setTrendingMovies(data.results.splice(0, 5));
      setTrendingMoviesLoading(false);
    };

    getTrendingMovies();
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
      </Container>
    </>
  );
};

export default Home;
