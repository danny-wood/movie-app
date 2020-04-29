import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Loading from "../common/Loading";
import { getPerson } from "../../services/peopleService";
import HeroBanner from "../ui/HeroBanner";
import { Container, Row, Col } from "reactstrap";
import imageSizeEnum from "../../enums/imageSizeEnum";
import { baseImageUrl } from "../../config.json";
import Button from "./../common/Button";
import vars from "../../styles/vars";

function PeopleDetails(props) {
  const [person, setPerson] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const data = await getPerson(props.match.params.id);
      setPerson(data);
      setIsLoading(false);
    };

    getData();
  }, []);

  if (isLoading) return <Loading />;

  return (
    <>
      <HeroBanner title={person.name} />
      <Container className="mt-0 mt-sm-4">
        <Row>
          <Col xs="12" md="auto" className="p-0 px-sm-2">
            {person.profile_path && (
              <PersonImageContainer className="mb-3 text-center">
                <img
                  src={`${baseImageUrl}/${imageSizeEnum.Profile.w185}/${person.profile_path}`}
                  alt={person.name}
                />
              </PersonImageContainer>
            )}
          </Col>
          <Col>
            {person.biography && (
              <>
                <h2 className="mb-3">Bio</h2>
                <p>{person.biography}</p>
              </>
            )}
          </Col>
          <Col sm="4" md="3">
            {person.birthday && (
              <p>
                <strong>Date of birth:</strong> {person.birthday}
              </p>
            )}
            {person.place_of_birth && (
              <p>
                <strong>Place of birth:</strong> {person.place_of_birth}
              </p>
            )}
            {person.known_for_department && (
              <p>
                <strong>Knowing for:</strong> {person.known_for_department}
              </p>
            )}
          </Col>
        </Row>
        <Row>
          <Col>
            <Button to="/people">Back</Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default PeopleDetails;

const PersonImageContainer = styled.div`
  @media (max-width: ${vars.screen_xs_max}) {
    background: ${vars.grey_200};
  }

  img {
    max-width: 100%;
    display: block;
    margin: 0 auto;
  }
`;
