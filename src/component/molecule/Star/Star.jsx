import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { faStar as SolidStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as RegularStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const StarIcon = styled(FontAwesomeIcon)`
  color: ${(props) => props.theme.primaryColor};
  cursor: pointer;
`;

const Star = ({ onClick, isSolid, className }) => {
  const svgStar = isSolid ? SolidStar : RegularStar;
  return <StarIcon className={className} icon={svgStar} onClick={onClick} />;
};

Star.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  isSolid: PropTypes.bool,
};
Star.defaultProps = {
  className: "",
  isSolid: false,
  onClick: () => {},
};

export default Star;
