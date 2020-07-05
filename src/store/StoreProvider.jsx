import React, { useReducer } from "react";
import PropTypes from "prop-types";
import reducer from "./reducer";
import * as actions from "./actions";

const INITAL_STATE = {
  characters: [],
  loadingCharacters: false,
  fetchedCharactersSuccessful: true,
};

export const StoreContext = React.createContext();

const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INITAL_STATE);
  const value = {
    ...state,
    fetchCharacters: (data) => actions.fetchCharacters(dispatch, data),
  };
  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
};

StoreProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default StoreProvider;
