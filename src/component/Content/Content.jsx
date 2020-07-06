import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import CardList from "../CardList";
import { StoreContext } from "../../store";

const ContentWrapper = styled.main`
  background-color: ${(props) => props.theme.appBackgroundColor};
  box-sizing: border-box;
  height: 100%;
  padding-top: 50px;
`;

const Content = () => {
  const { characters, searchRandomCharacter } = useContext(StoreContext);

  useEffect(() => {
    searchRandomCharacter();
  }, [searchRandomCharacter]);

  return (
    <ContentWrapper>
      <CardList characters={characters} />
    </ContentWrapper>
  );
};

export default Content;