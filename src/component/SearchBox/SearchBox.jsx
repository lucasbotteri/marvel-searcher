import React from "react";
import { faSearch as SearchSvg } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const InputBox = styled.input`
  border: 0;
  outline: 0;
  margin-left: 10px;
  width: 100%;
`;

const SearchIcon = styled(FontAwesomeIcon)`
  font-size: 20px;
  color: ${(props) => props.theme.secondaryColor};
`;

const SearchForm = styled.form`
  display: flex;
  color: ${(props) => props.theme.secondaryColor};
  font-size: 16px;
  width: 80%;
`;

const SearchBox = () => {
  return (
    <SearchForm role="search">
      <SearchIcon icon={SearchSvg} alt="search-icon" />
      <InputBox
        id="search-input"
        type="text"
        placeholder="Search"
        aria-label="Search a character or comic"
      />
    </SearchForm>
  );
};

export default SearchBox;
