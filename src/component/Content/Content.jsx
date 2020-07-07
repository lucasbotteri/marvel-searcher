import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import CharacterList from "../CharacterList";
import CharacterModal from "../CharacterModal";
import { StoreContext } from "../../store";
import { useQuery } from "../../hook";

const ContentWrapper = styled.main`
  background-color: ${(props) => props.theme.appBackgroundColor};
  box-sizing: border-box;
  height: 100%;
  padding-top: 50px;
`;

const Content = () => {
  const { searchRandomCharacter, searchCharacter } = useContext(StoreContext);
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
      <CharacterList />
      <CharacterModal />
    </ContentWrapper>
  );
};

export default Content;
