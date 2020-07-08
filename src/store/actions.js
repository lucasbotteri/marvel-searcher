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
import {
  getCharacterByName,
  getRandomCharacter,
  getCharacterComics,
  getComic,
} from "../service";

export const loadingCharacters = () => ({
  type: LOADING_CHARACTERS_LIST,
});

export const setCharacters = (characters) => ({
  type: SET_CHARACTERS_LIST,
  payload: characters,
});

export const setCharacterSelected = (id, name) => ({
  type: SET_CHARACTER_SELECTED,
  payload: { id, name },
});

export const hideModal = () => ({
  type: HIDE_MODAL,
});

export const setComics = (comics) => ({
  type: SET_COMICS,
  payload: comics,
});

export const setLoadingComics = () => ({
  type: SET_LOADING_COMICS,
});

export const setComic = (comics) => ({
  type: SET_COMIC,
  payload: comics,
});

export const setLoadingComic = () => ({
  type: SET_LOADING_COMIC,
});

export const searchCharacter = async (dispatch, characterName) => {
  dispatch(loadingCharacters());
  const characters = await getCharacterByName(characterName);
  dispatch(setCharacters(characters));
};

export const searchRandomCharacter = async (dispatch) => {
  dispatch(loadingCharacters());
  const characters = await getRandomCharacter();
  dispatch(setCharacters(characters));
};

export const searchCharacterComics = async (
  dispatch,
  characterId,
  comicFilter
) => {
  dispatch(setLoadingComics());
  const comics = await getCharacterComics(characterId, comicFilter);
  dispatch(setComics(comics));
};

export const searchComic = async (dispatch, comicId) => {
  dispatch(setLoadingComic());
  const comic = await getComic(comicId);
  dispatch(setComic(comic));
};
