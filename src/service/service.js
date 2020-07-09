import axiosClient from "../axiosClient";

const ON_SALE_DATE_TYPE = "onsaleDate";
const WRITER_ROLE = "writer";
const PENCILLER_ROLE = "inker";
const COVER_ROLE = "penciler (cover)";

const parseImageUrl = (thumbnail, imageSize) =>
  thumbnail && `${thumbnail.path.replace("http", "https")}/${imageSize}`;

const parseCharactersResponse = (response) => {
  const results = response.results || [];
  return results.map((c) => ({
    id: c.id,
    name: c.name,
    thumbnail: parseImageUrl(c.thumbnail, "portrait_fantastic.jpg"),
  }));
};

export const getCharactersByName = async (names = []) => {
  const charactersRequests = names.map((n) =>
    axiosClient.get("/characters", {
      params: {
        nameStartsWith: n,
      },
    })
  );
  const resolvedRequests = await Promise.all(charactersRequests);

  const parsedCharacters = resolvedRequests
    .map((r) => r.data && parseCharactersResponse(r.data.data))
    .flat();

  if (parsedCharacters.length === 0) {
    return null;
  }

  return parsedCharacters;
};

export const getRandomCharacter = async () => {
  const { data: totalData } = await axiosClient.get("/characters", {
    params: {
      offset: 0,
      limit: 1,
    },
  });
  const totalCharacters = totalData.data.total;

  const randomCharacterOffset = Math.floor(
    Math.random() * (totalCharacters - 1)
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
    thumbnail: parseImageUrl(c.thumbnail, "standard_medium.jpg"),
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

  const thumbnail = parseImageUrl(comicData.thumbnail, "portrait_uncanny.jpg");

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
