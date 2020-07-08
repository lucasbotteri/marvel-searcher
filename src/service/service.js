import axiosClient from "../axiosClient";

const TOTAL_CHARACTERS = 1493;

const ON_SALE_DATE_TYPE = "onsaleDate";
const WRITER_ROLE = "writer";
const PENCILLER_ROLE = "penciller";
const COVER_ROLE = "penciller (cover)";

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

  const parsedCharacters = parseCharactersResponse(data.data);
  if (parsedCharacters.length === 0) {
    return null;
  }

  return parsedCharacters;
};

export const getRandomCharacter = async () => {
  // TODO get total characters doing a request for all characters setting count to 0 to minimum payload
  const randomCharacterOffset = Math.floor(
    Math.random() * (TOTAL_CHARACTERS - 1)
  );

  const { data } = await axiosClient.get("/characters", {
    params: {
      offset: randomCharacterOffset,
      limit: 1,
    },
  });

  const parsedCharacters = parseCharactersResponse(data.data);
  if (parsedCharacters.length === 0) {
    return null;
  }

  return parsedCharacters;
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

const getCreatorsOfRole = (creators = [], role) => {
  const creatorNames = creators
    .filter((c) => c.role === role)
    .map((c) => c.name);

  const thereAreCreatorsAvailable = creatorNames.length > 0;

  return thereAreCreatorsAvailable ? creatorNames.join(", ") : "Unknown";
};

export const getComic = async (comicId) => {
  const { data } = await axiosClient.get(`/comics/${comicId}`);
  const results = data.data.results || [];
  const comicData = results[0] || {};

  if (!comicData) {
    return null;
  }

  const { id, title, description } = comicData;

  const onsaleDate =
    (comicData.dates &&
      comicData.dates.find((d) => d.type === ON_SALE_DATE_TYPE)) ||
    {};
  const published = onsaleDate.date;

  const thumbnail =
    comicData.thumbnail && `${comicData.thumbnail.path}/portrait_uncanny.jpg`;

  const creators = comicData.creators || {};
  const writer = getCreatorsOfRole(creators.items, WRITER_ROLE);
  const penciler = getCreatorsOfRole(creators.items, PENCILLER_ROLE);
  const cover = getCreatorsOfRole(creators.items, COVER_ROLE);

  return {
    id,
    title,
    published,
    thumbnail,
    description,
    writer,
    penciler,
    cover,
  };
};
