import {
  LOADING_CHARACTERS_LIST,
  SET_CHARACTERS_LIST,
  SET_CHARACTER_SELECTED,
  HIDE_MODAL,
  SET_COMICS,
} from "./constants";

const reducer = (state, action) => {
  switch (action.type) {
    case LOADING_CHARACTERS_LIST:
      return { ...state, characters: [], isCharacterListLoading: true };
    case SET_CHARACTERS_LIST:
      return {
        ...state,
        characters: action.payload,
        isCharacterListLoading: false,
        isShowingModal: false,
      };
    case SET_CHARACTER_SELECTED:
      return {
        ...state,
        characterSelected: action.payload,
        isShowingModal: true,
        isLoadingComics: true,
      };
    case HIDE_MODAL:
      return {
        ...state,
        isShowingModal: false,
      };
    case SET_COMICS:
      return {
        ...state,
        comics: action.payload,
        isLoadingComics: false,
      };
    default:
      throw new Error("Invalid Action");
  }
};

export default reducer;
