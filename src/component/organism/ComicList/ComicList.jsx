import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import ComicItem from "../../molecule/ComicItem";

const ComicListWrapper = styled.ul`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
`;

const NonStyledLi = styled.li`
  list-style: none;
`;

const ComicList = ({ comics }) => {
  return (
    <ComicListWrapper>
      {comics.map((c) => (
        <NonStyledLi>
          <ComicItem key={c.id} comic={c} />
        </NonStyledLi>
      ))}
    </ComicListWrapper>
  );
};

ComicList.propTypes = {
  comics: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      description: PropTypes.string,
      thumbnail: PropTypes.string,
      isFaved: PropTypes.bool,
    })
  ).isRequired,
};

export default ComicList;
