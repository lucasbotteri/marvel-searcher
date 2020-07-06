import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Card from "../Card";

const CharacterList = styled.ul`
  box-sizing: border-box;
  display: grid;
  grid-gap: 33px;
  grid-template-columns: repeat(auto-fit, minmax(256px, 1fr));
  justify-items: center;
  padding: 40px 40px;
  width: 100%;
`;

const ListItem = styled.li`
  list-style: none;
`;

const CardList = ({ characters }) => {
  return (
    <CharacterList>
      {characters.map((c) => (
        <ListItem>
          <Card
            key={c.id}
            name={c.name}
            imageSource={c.thumbnail}
            onClick={() => {}}
          />
        </ListItem>
      ))}
    </CharacterList>
  );
};

CardList.propTypes = {
  characters: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      imageSource: PropTypes.string,
    })
  ).isRequired,
};

export default CardList;
