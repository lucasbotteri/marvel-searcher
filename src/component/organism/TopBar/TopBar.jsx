import React, { useContext } from "react";
import styled from "styled-components";
import Star from "../../molecule/Star";
import SearchBox from "../../molecule/SearchBox";
import Logo from "../../../logo.svg";
import { StoreContext } from "../../../store";

const MARVEL_COMIC_URL_REGEX = /https:\/\/www\.marvel\.com\/comics\/issue\/[0-9]+\//;
const MARVEL_COMIC_ID_REGEX = /\/[0-9]+\//;

const FixedTopBarWrapper = styled.nav`
  align-items: center;
  background-color: ${(props) => props.theme.primaryColor};
  box-shadow: 0 1px 4px 0 ${(props) => props.theme.secondaryColor};
  display: flex;
  height: 50px;
  justify-content: space-around;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 9999;
`;

const TopBarFav = styled(Star)`
  color: ${(props) => props.theme.secondaryColor};
`;

const VerticalDivider = styled.div`
  border-left: 1px solid ${(props) => props.theme.secondaryColor};
  height: 75%;
`;

const MarvelLogo = styled.img`
  border-left: 1px solid ${(props) => props.theme.secondaryColor};
  height: 66%;
`;

const TopBar = () => {
  const { searchCharacter, searchComic } = useContext(StoreContext);
  const onSearch = (searchText) => {
    if (searchText) {
      const isAComicSearch = MARVEL_COMIC_URL_REGEX.test(searchText);
      if (isAComicSearch) {
        const comicId = searchText.match(MARVEL_COMIC_ID_REGEX)[0];
        const parsedComicId = comicId.slice(1, comicId.length - 1);
        searchComic(parsedComicId);
      } else {
        searchCharacter(searchText);
      }
    }
  };

  return (
    <FixedTopBarWrapper>
      <MarvelLogo src={Logo} alt="marvel logo" />
      <VerticalDivider />
      <SearchBox onSearch={onSearch} />
      <TopBarFav isSolid={false} />
      <VerticalDivider />
    </FixedTopBarWrapper>
  );
};

export default TopBar;
