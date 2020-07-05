import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Wrapper = styled.section`
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

const StarIcon = styled(FontAwesomeIcon)`
  color: ${(props) => props.theme.primaryColor};
  cursor: pointer;
  position: absolute;
  right: 16px;
  top: 8px;
`;
const Card = ({ name, imageSource, onClick }) => {
  return (
    <Wrapper onClick={onClick} alt={name}>
      <ImageOverlay src={imageSource} />
      <StarIcon icon={faStar} />
      <Name> {name} </Name>
    </Wrapper>
  );
};

Card.propTypes = {
  name: PropTypes.string.isRequired,
  imageSource: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Card;
