import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import MediaList from "../common/MediaList";
import HeroBanner from "../ui/HeroBanner";
import { getTrending } from "../../services/trendingService";
import { getUpcomingMovies } from "../../services/mediaService";
import { catchError } from "./../../utils/errorUtil";
import { to } from "./../../utils/httpUtil";

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [trendingMoviesLoading, setTrendingMoviesLoading] = useState(true);
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [upcomingMoviesLoading, setUpcomingMoviesLoading] = useState(true);

  useEffect(() => {
    // const initTrendingMovies = async () => {
    //   await catchError(getTrending("movie", "x"));

    //   const data = await getTrending("movie", "week");
    //   setTrendingMovies(data.results.splice(0, 5));
    //   setTrendingMoviesLoading(false);
    // };

    const initUpcomingMovies = async () => {
      const data = await getUpcomingMovies();
      setUpcomingMovies(data.results.splice(0, 5));
      setUpcomingMoviesLoading(false);
    };

    initUpcomingMovies();
    getData();
  }, []);

  async function getData() {
    const { data, error } = await to(getTrending("movie", "week"));
    data && setTrendingMovies(data.results.splice(0, 5));
    error && console.error(error);
    setTrendingMoviesLoading(false);
  }

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
