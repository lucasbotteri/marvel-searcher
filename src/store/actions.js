import {
  LOADING_CHARACTERS_SEARCH,
  CHARACTERS_SEARCH_SUCCESSFUL,
} from "./constants";
import { getCharacterByName } from "../service";

export const loadingCharacters = () => ({
  type: LOADING_CHARACTERS_SEARCH,
});
export const fetchCharacterSuccessful = (characters) => ({
  type: CHARACTERS_SEARCH_SUCCESSFUL,
  payload: characters,
});

export const searchCharacter = async (dispatch, characterName) => {
  dispatch(loadingCharacters());
  const characters = await getCharacterByName(characterName);
  dispatch(fetchCharacterSuccessful(characters));
};
