import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Star from "../Star";

export const CharacterCardWrapper = styled.section`
  cursor: pointer;
  height: 380px;
  position: relative;
  width: 256px;

  &:before {
    content: "";
    background: linear-gradient(
      to top,
      rgba(0, 0, 0, 1) 0%,
      rgba(255, 255, 255, 0) 33%
    );
    border-radius: ${(props) => props.theme.radius};
    bottom: 0;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    z-index: 1;
  }
`;

export const ImageOverlay = styled.img`
  background: grey;
  border-radius: ${(props) => props.theme.radius};
  height: 100%;
  position: relative;
  width: 100%;
`;

export const Name = styled.h2`
  bottom: 8px;
  color: ${(props) => props.theme.primaryColor};
  font-size: ${(props) => props.theme.h2Size};
  left: 16px;
  position: absolute;
  z-index: 1;
`;

export const TopRightStar = styled(Star)`
  position: absolute;
  right: 16px;
  top: 8px;
  z-index: 1;
`;

const CharacterCard = ({ character, onClick, isFaved, onFaved, onUnfaved }) => {
  const { name, thumbnail } = character;
  return (
    <CharacterCardWrapper onClick={onClick} alt={name}>
      <ImageOverlay src={thumbnail} />
      <TopRightStar
        isSolid={isFaved}
        onClick={(e) => {
          e.stopPropagation();
          if (isFaved) {
            onUnfaved();
          } else {
            onFaved();
          }
        }}
      />
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
  onFaved: PropTypes.func.isRequired,
  onUnfaved: PropTypes.func.isRequired,
  isFaved: PropTypes.bool,
};

CharacterCard.defaultProps = {
  isFaved: false,
};

export default CharacterCard;
