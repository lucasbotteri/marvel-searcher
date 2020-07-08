import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Star from "../Star";

const CharacterCardWrapper = styled.section`
  cursor: pointer;
  height: 380px;
  position: relative;
  width: 256px;
`;

const ImageOverlay = styled.img`
  border-radius: ${(props) => props.theme.radius};
  height: 100%;
  position: relative;
  width: 100%;
`;

// TODO color should be themed, fontSize also
const Name = styled.h2`
  bottom: 8px;
  color: ${(props) => props.theme.primaryColor};
  font-size: ${(props) => props.theme.h2Size};
  left: 16px;
  position: absolute;
`;

const TopRightStar = styled(Star)`
  position: absolute;
  right: 16px;
  top: 8px;
`;
const CharacterCard = ({ character, onClick, isFaved }) => {
  const { name, thumbnail } = character;
  return (
    <CharacterCardWrapper onClick={onClick} alt={name}>
      <ImageOverlay src={thumbnail} />
      <TopRightStar isSolid={isFaved} />
      <Name> {name} </Name>
    </CharacterCardWrapper>
  );
};

CharacterCard.propTypes = {
  character: PropTypes.shape({
    name: PropTypes.string,
    thumbnail: PropTypes.string,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
  isFaved: PropTypes.bool,
};

CharacterCard.defaultProps = {
  isFaved: false,
};

export default CharacterCard;
