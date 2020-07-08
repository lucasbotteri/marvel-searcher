import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const ComicDetailWrapper = styled.div`
  align-items: start;
  column-gap: 20px;
  display: grid;
  grid-template-areas:
    "image title"
    "image creators"
    "image description"
    "image .";
  grid-template-columns: 50% auto;
  grid-template-rows: repeat(4, auto);
  justify-items: start;
  margin: auto;
  width: 66%;

  @media (max-width: 425px) {
    grid-template-columns: 100%;
    grid-template-rows: repeat(5, auto);
    grid-template-areas:
      "image "
      "title"
      "creators"
      "description";
    justify-items: center;
    width: 90%;
  }
`;

const ComicImage = styled.img`
  grid-area: image;
  justify-self: end;
  max-width: 100%;
  height: auto;
  @media (max-width: 425px) {
    justify-self: center;
  }
`;

const ComicTitle = styled.h2`
  font-size: ${(props) => props.theme.h2Size};
  grid-area: title;
  text-align: start;

  @media (max-width: 425px) {
    text-align: center;
  }
`;

const ComicCreator = styled.p`
  font-size: 12px;
  font-weight: bold;
  margin: 0;
`;

const ComicCreatorsWrapper = styled.div`
  grid-area: creators;
  text-align: start;

  @media (max-width: 425px) {
    text-align: center;
  }
`;

const ComicDescription = styled.p`
  font-size: 11px;
  grid-area: description;
  text-align: start;

  @media (max-width: 425px) {
    text-align: center;
  }
`;

const ComicDetail = ({ comic }) => {
  return (
    <ComicDetailWrapper>
      <ComicImage
        src={comic.thumbnail}
        alt={`Comic ${comic.title} thumbnail`}
      />
      <ComicTitle>{comic.title}</ComicTitle>
      <ComicCreatorsWrapper>
        <ComicCreator>{`Published: ${comic.published}`}</ComicCreator>
        <ComicCreator>{`Writer: ${comic.writer}`}</ComicCreator>
        <ComicCreator>{`Penciler: ${comic.penciler}`}</ComicCreator>
        <ComicCreator>{`Cover Artist: ${comic.cover}`}</ComicCreator>
      </ComicCreatorsWrapper>
      <ComicDescription>{comic.description}</ComicDescription>
    </ComicDetailWrapper>
  );
};

ComicDetail.propTypes = {
  comic: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    description: PropTypes.string,
    writer: PropTypes.string,
    penciler: PropTypes.string,
    cover: PropTypes.string,
    published: PropTypes.string,
  }).isRequired,
};

export default ComicDetail;
