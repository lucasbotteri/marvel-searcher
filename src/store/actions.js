import {
  LOADING_CHARACTERS_LIST,
  SET_CHARACTERS_LIST,
  SET_CHARACTER_SELECTED,
  HIDE_MODAL,
} from "./constants";
import { getCharacterByName, getRandomCharacter } from "../service";

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
