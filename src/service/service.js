import axiosClient from "../axiosClient";

const TOTAL_CHARACTERS = 1493;

const parseCharactersResponse = (response) => {
  const results = response.results || [];
  return results.map((c) => ({
    id: c.id,
    name: c.name,
    thumbnail: c.thumbnail && `${c.thumbnail.path}/portrait_fantastic.jpg`,
  }));
};

export const getCharacterByName = async (name) => {
  const { data } = await axiosClient.get("/characters", {
    params: {
      nameStartsWith: name,
    },
  });

  return parseCharactersResponse(data.data);
};

export const getRandomCharacter = async () => {
  const randomCharacterOffset = Math.floor(
    Math.random() * (TOTAL_CHARACTERS - 1)
  );

  const { data } = await axiosClient.get("/characters", {
    params: {
      offset: randomCharacterOffset,
      limit: 1,
    },
  });

  return parseCharactersResponse(data.data);
};

export const getCharacterComics = async (characterId, comicFilter) => {
  const { data } = await axiosClient.get(`/characters/${characterId}/comics`, {
    params: {
      orderBy: "onsaleDate",
      ...(comicFilter && { titleStartsWith: comicFilter }),
    },
  });
  const results = data.data.results || [];
  return results.map((c) => ({
    id: c.id,
    title: c.title,
    description: c.description,
    thumbnail: c.thumbnail && `${c.thumbnail.path}/standard_medium.jpg`,
  }));
};
