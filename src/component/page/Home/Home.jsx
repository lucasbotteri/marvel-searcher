import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import CharacterList from "../../organism/CharacterList";
import CharacterModal from "../../organism/CharacterModal";
import ComicDetail from "../../molecule/ComicDetail";
import { StoreContext } from "../../../store";
import { useQuery } from "../../../hook";

const HomeWrapper = styled.main`
  background-color: ${(props) => props.theme.appBackgroundColor};
  box-sizing: border-box;
  height: 100%;
  margin-top: 50px;
  text-align: center;

  @media (max-width: 425) {
    margin: 0;
  }
`;

const Home = () => {
  const {
    searchRandomCharacter,
    searchCharacter,
    comic,
    characters,
    loadingContent,
  } = useContext(StoreContext);
  const { character: queryParamCharacter } = useQuery();
  const noResults = !loadingContent && !characters && !comic;
  useEffect(() => {
    if (queryParamCharacter) {
      searchCharacter(queryParamCharacter);
    } else {
      searchRandomCharacter();
    }
  }, [searchRandomCharacter, searchCharacter, queryParamCharacter]);

  return (
    <HomeWrapper>
      {loadingContent && "...loading"}
      {noResults && "No Results Found"}
      {characters && <CharacterList characters={characters} />}
      {comic && <ComicDetail comic={comic} />}
      <CharacterModal />
    </HomeWrapper>
  );
};

export default Home;
