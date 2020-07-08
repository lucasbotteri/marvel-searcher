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
  padding-top: 90px;
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
    isShowingFavs,
    favs,
  } = useContext(StoreContext);

  const { character: queryParamCharacter } = useQuery();

  const charactersToShow = isShowingFavs ? favs : characters;

  const noResults = !loadingContent && !charactersToShow && !comic;

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
      {charactersToShow && <CharacterList characters={charactersToShow} />}
      {comic && <ComicDetail comic={comic} />}
      <CharacterModal />
    </HomeWrapper>
  );
};

export default Home;
