import { LOADING_CHARACTERS_LIST, SET_CHARACTERS_LIST } from "./constants";

const reducer = (state, action) => {
  switch (action.type) {
    case LOADING_CHARACTERS_LIST:
      return { ...state, characters: [], isCharacterListLoading: true };
    case SET_CHARACTERS_LIST:
      return {
        ...state,
        characters: action.payload,
        isCharacterListLoading: false,
      };
    default:
      throw new Error("Invalid Action");
  }
};

export default reducer;
