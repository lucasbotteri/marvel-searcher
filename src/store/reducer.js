import {
  LOADING_CHARACTERS_SEARCH,
  CHARACTERS_SEARCH_SUCCESSFUL,
} from "./constants";

const reducer = (state, action) => {
  switch (action.type) {
    case LOADING_CHARACTERS_SEARCH:
      return { ...state, characters: [], isLoadingCharactersSearch: true };
    case CHARACTERS_SEARCH_SUCCESSFUL:
      return {
        ...state,
        characters: action.payload,
        isCharacterSearchSuccessful: true,
      };
    default:
      throw new Error("Invalid Action");
  }
};

export default reducer;
