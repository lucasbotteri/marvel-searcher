import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Star from "../Star";

const ComicItemWrapper = styled.div`
  column-gap: 20px;
  display: grid;
  grid-template-columns: 95px auto;
  grid-template-rows: 22px auto;
  grid-template-areas:
    "img title"
    "img description";
  row-gap: 10x;
  margin: 22px;
`;

const ComicImage = styled.img`
  grid-area: img;
  border-radius: ${(props) => props.theme.radius};
  justify-self: center;
  height: 93px;
  width: 93px;
`;

const ComicHead = styled.div`
  grid-area: title;
  align-self: end;
  display: flex;
`;

const ComicTitle = styled.h4`
  color: ${(props) => props.theme.primaryFontColor};
  display: inline-block;
  font-size: 12px;
  font-weight: bold;
  margin: 0;
  vertical-align: middle;
`;

const ComicStar = styled(Star)`
  color: ${(props) => props.theme.secondaryColor};
  display: inline-block;
  font-size: 14px;
  margin-left: 5px;
  vertical-align: middle;
`;

const ComicDescription = styled.p`
  color: ${(props) => props.theme.primaryFontColor};
  font-size: 12px;
  grid-area: description;
`;

const ComicItem = ({ comic, onFaved }) => {
  const { title, description, thumbnail, isFaved } = comic;
  return (
    <ComicItemWrapper>
      <ComicImage src={thumbnail} alt={`${title} comic thumbnail`} />
      <ComicHead>
        <ComicTitle>{title}</ComicTitle>
        <ComicStar isSolid={isFaved} role="button" onClick={onFaved} />
      </ComicHead>
      <ComicDescription>{description}</ComicDescription>
    </ComicItemWrapper>
  );
};

ComicItem.propTypes = {
  comic: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    thumbnail: PropTypes.string,
    isFaved: PropTypes.bool,
  }).isRequired,
  onFaved: PropTypes.func.isRequired,
};

export default ComicItem;
