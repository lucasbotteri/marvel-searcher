import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import CardList from "../CardList";
import { StoreContext } from "../../store";
import { useQuery } from "../../hook";

const ContentWrapper = styled.main`
  background-color: ${(props) => props.theme.appBackgroundColor};
  box-sizing: border-box;
  height: 100%;
  padding-top: 50px;
`;

const Content = () => {
  const { characters, searchRandomCharacter, searchCharacter } = useContext(
    StoreContext
  );
  const { character: queryParamCharacter } = useQuery();

  useEffect(() => {
    if (queryParamCharacter) {
      searchCharacter(queryParamCharacter);
    } else {
      searchRandomCharacter();
    }
  }, [searchRandomCharacter, searchCharacter, queryParamCharacter]);

  return (
    <ContentWrapper>
      <CardList characters={characters} />
    </ContentWrapper>
  );
};

export default Content;
