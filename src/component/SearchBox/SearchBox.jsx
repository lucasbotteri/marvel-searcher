import React, { useState } from "react";
import PropTypes from "prop-types";
import { faSearch as SearchSvg } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const InputBox = styled.input`
  -webkit-appearance: none;
  border: 0;
  margin-left: 10px;
  outline: 0;
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
