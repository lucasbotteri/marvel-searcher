import React, { useState } from "react";
import PropTypes from "prop-types";
import { faSearch as SearchSvg } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

export const InputBox = styled.input`
  -webkit-appearance: none;
  border: 0;
  margin-left: 10px;
  outline: 0;
  width: 100%;
`;

export const SearchIcon = styled(FontAwesomeIcon)`
  font-size: 20px;
  color: ${(props) => props.theme.secondaryColor};
`;

export const SearchForm = styled.form`
  display: flex;
  color: ${(props) => props.theme.secondaryColor};
  font-size: 16px;
  width: 80%;

  @media (max-width: 768px) {
    width: 70%;
  }

  @media (max-width: 425px) {
    width: 60%;
  }
`;

const SearchBox = ({ onSearch }) => {
  const [searchText, setSearchText] = useState("");
  const onChange = ({ target }) => {
    setSearchText(target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    onSearch(searchText);
  };

  return (
    <SearchForm role="search" onSubmit={onSubmit}>
      <SearchIcon icon={SearchSvg} alt="search-icon" />
      <InputBox
        id="search-input"
        type="text"
        value={searchText}
        onChange={onChange}
        autocomplete="off"
        placeholder="Search"
        aria-label="Search a character or comic"
      />
    </SearchForm>
  );
};

SearchBox.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchBox;
