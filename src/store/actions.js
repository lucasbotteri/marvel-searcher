import { LOADING_CHARACTERS, FETCH_CHARACTERS_SUCCESSFUL } from "./constants";
import axiosClient from "../axiosClient";

export const loadingCharacters = () => ({
  type: LOADING_CHARACTERS,
});
export const fetchCharacterSuccessful = (characters) => ({
  type: FETCH_CHARACTERS_SUCCESSFUL,
  data: characters,
});

export const fetchCharacters = async (dispatch, { charactersQuery }) => {
  dispatch(loadingCharacters());
  const data = await axiosClient.get("charactersEndpoint", { charactersQuery });
  dispatch(fetchCharacterSuccessful(data));
};
