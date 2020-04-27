import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import HeroBanner from "../ui/HeroBanner";
import { getPeople } from "../../services/peopleService";
import PeopleList from "../common/PeopleList";

const People = () => {
  const [people, setPeople] = useState([]);
  const [peopleLoading, setPeopleLoading] = useState(true);

  useEffect(() => {
    const getMoviesData = async () => {
      const data = await getPeople();
      setPeople(data.results);
      setPeopleLoading(false);
    };

    getMoviesData();
  }, []);

  return (
    <>
      <HeroBanner title="People" />
      <Container className="mt-4">
        <Row>
          <Col>
            <PeopleList data={people} isLoading={peopleLoading} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default People;
