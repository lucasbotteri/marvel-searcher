import { LOADING_CHARACTERS, FETCH_CHARACTERS_SUCCESSFUL } from "./constants";

const reducer = (state, action) => {
  switch (action.type) {
    case LOADING_CHARACTERS:
      return { ...state, characters: [], loadingCharacters: true };
    case FETCH_CHARACTERS_SUCCESSFUL:
      return {
        ...state,
        characters: action.payload,
        fetchedCharactersSuccessful: true,
      };
    default:
      throw new Error("Invalid Action");
  }
};

export default reducer;
