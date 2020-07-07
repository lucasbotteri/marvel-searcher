import React, { useContext } from "react";
import { StoreContext } from "../../store";
import styled from "styled-components";
import CharacterCard from "../CharacterCard";

const CharacterListWrapper = styled.ul`
  box-sizing: border-box;
  display: grid;
  grid-gap: 33px;
  grid-template-columns: repeat(auto-fit, minmax(256px, 1fr));
  justify-items: center;
  padding: 40px 40px;
  width: 100%;
`;

const CharacterListItem = styled.li`
  list-style: none;
`;

const CharacterList = () => {
  const { characters, setCharacterSelected } = useContext(StoreContext);

  return (
    <CharacterListWrapper>
      {characters.map((c) => (
        <CharacterListItem>
          <CharacterCard
            key={c.id}
            character={c}
            onClick={() => {
              setCharacterSelected(c.id, c.name);
            }}
          />
        </CharacterListItem>
      ))}
    </CharacterListWrapper>
  );
};

export default CharacterList;
