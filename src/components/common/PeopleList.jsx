import React from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "reactstrap";
import styled from "styled-components";
import vars from "../../styles/vars";
import { baseImageUrl } from "../../config.json";
import imageSizeEnum from "../../enums/imageSizeEnum";
import SkeletonRow from "./SkeletonRow";

function PeopleList({ isLoading, data }) {
  if (isLoading) return <SkeletonRow />;

  return (
    <Row>
      {data.map((item) => {
        const imgSrc = item.profile_path
          ? `${baseImageUrl}/${imageSizeEnum.Profile.h632}/${item.profile_path}`
          : "https://placehold.it/500x750/e2e8f0/a0aec0?text=NO%20IMAGE";

        return (
          <StyledCol xs="12" md="auto" className="mb-3" key={item.id}>
            <StyledItem to={`/people/${item.id}`}>
              <img src={imgSrc} alt={item.name} style={{ maxWidth: "100%" }} />
              <span>{item.name}</span>
            </StyledItem>
          </StyledCol>
        );
      })}
    </Row>
  );
}

export default PeopleList;

const StyledCol = styled(Col)`
  @media (min-width: ${vars.screen_md_min}) {
    max-width: 20%;
  }
`;

const StyledItem = styled(Link)`
  background: ${vars.grey_200};
  height: 100%;
  min-height: 304px;
  display: block;
  text-align: center;

  @media (min-width: ${vars.screen_md_min}) and (max-width: ${vars.screen_md_max}) {
    min-height: 235px;
  }

  span {
    display: block;
    padding: 1.3rem 0.5rem;
    text-align: center;
    font-size: 0.9rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
