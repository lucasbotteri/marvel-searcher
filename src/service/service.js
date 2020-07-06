import axiosClient from "../axiosClient";

export const getCharacterByName = async (name) => {
  const { data } = await axiosClient.get("/characters", {
    params: {
      nameStartsWith: name,
    },
  });
  const results = data.data.results || [];
  const parsedResults = results.map((c) => ({
    id: c.id,
    name: c.name,
    thumbnail: c.thumbnail && `${c.thumbnail.path}/portrait_fantastic.jpg`,
  }));

  return parsedResults;
};

export const pepito = () => {};
