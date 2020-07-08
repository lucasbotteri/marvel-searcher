import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import CharacterList from "../CharacterList";
import CharacterModal from "../CharacterModal";
import ComicDetail from "../ComicDetail";
import { StoreContext } from "../../store";
import { useQuery } from "../../hook";

const ContentWrapper = styled.main`
  background-color: ${(props) => props.theme.appBackgroundColor};
  box-sizing: border-box;
  height: 100%;
  margin-top: 50px;
  text-align: center;

  @media (max-width: 425) {
    margin: 0;
  }
`;

const Content = () => {
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
    <ContentWrapper>
      {loadingContent && "...loading"}
      {noResults && "No Results Found"}
      {characters && <CharacterList characters={characters} />}
      {comic && <ComicDetail comic={comic} />}
      <CharacterModal />
    </ContentWrapper>
  );
};

export default Content;
