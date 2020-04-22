import React from "react";
import { Row, Col } from "reactstrap";
import styled from "styled-components";
import vars from "../../styles/vars";
import SkeletonRow from "./SkeletonRow";
import { baseImageUrl } from "../../config.json";
import { Link } from "react-router-dom";
import MediaTypeEnum from "../../enums/mediaTypeEnum";
import imageSizeEnum from "../../enums/imageSizeEnum";

function MediaList({ isLoading, data, mediaType = MediaTypeEnum.Movie }) {
  if (isLoading) return <SkeletonRow />;

  return (
    <Row>
      {data.map((item) => (
        <StyledCol xs="12" md="auto" className="mb-3" key={item.id}>
          <StyledItem to={`/${mediaType}/${item.id}`}>
            {item.poster_path && (
              <img
                src={`${baseImageUrl}/${imageSizeEnum.Poster.w500}/${item.poster_path}`}
                alt={item.title || item.name}
                style={{ maxWidth: "100%" }}
              />
            )}
            <span>{item.title || item.name}</span>
          </StyledItem>
        </StyledCol>
      ))}
    </Row>
  );
}

export default MediaList;

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
