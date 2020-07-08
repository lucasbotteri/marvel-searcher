import {
  LOADING_CHARACTERS_LIST,
  SET_CHARACTERS_LIST,
  SET_CHARACTER_SELECTED,
  HIDE_MODAL,
  SET_COMICS,
  SET_LOADING_COMICS,
  SET_COMIC,
  SET_LOADING_COMIC,
} from "./constants";

const reducer = (state, action) => {
  switch (action.type) {
    case SET_CHARACTER_SELECTED:
      return {
        ...state,
        characterSelected: action.payload,
        isShowingModal: true,
      };
    case SET_LOADING_COMICS:
      return {
        ...state,
        isLoadingComics: true,
      };
    case SET_COMICS:
      return {
        ...state,
        comics: action.payload,
        isLoadingComics: false,
      };
    case HIDE_MODAL:
      return {
        ...state,
        isShowingModal: false,
      };
    case SET_COMIC:
      return {
        ...state,
        comic: action.payload,
        loadingContent: false,
      };
    case SET_LOADING_COMIC:
      return {
        ...state,
        loadingContent: true,
        characters: null,
        comic: null,
      };
    case LOADING_CHARACTERS_LIST:
      return { ...state, characters: null, comic: null, loadingContent: true };
    case SET_CHARACTERS_LIST:
      return {
        ...state,
        characters: action.payload,
        loadingContent: false,
        isShowingModal: false,
      };
    default:
      throw new Error("Invalid Action");
  }
};

export default reducer;
