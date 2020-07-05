import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Star from "../Star";

const CardWrapper = styled.section`
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
  font-size: 19px;
  left: 16px;
  position: absolute;
`;

const TopRightStar = styled(Star)`
  position: absolute;
  right: 16px;
  top: 8px;
`;
const Card = ({ name, imageSource, onClick, isFaved }) => {
  return (
    <CardWrapper onClick={onClick} alt={name}>
      <ImageOverlay src={imageSource} />
      <TopRightStar isSolid={isFaved} />
      <Name> {name} </Name>
    </CardWrapper>
  );
};

Card.propTypes = {
  name: PropTypes.string.isRequired,
  imageSource: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  isFaved: PropTypes.bool,
};

Card.defaultProps = {
  isFaved: false,
};

export default Card;
