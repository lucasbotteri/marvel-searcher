import React from "react";
import styled from "styled-components";
import Star from "../Star";
import SearchBox from "../SearchBox";
import Logo from "../../logo.svg";

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
  return (
    <FixedTopBarWrapper>
      <MarvelLogo src={Logo} alt="marvel logo" />
      <VerticalDivider />
      <SearchBox />
      <TopBarFav isSolid={false} />
      <VerticalDivider />
    </FixedTopBarWrapper>
  );
};

export default TopBar;
