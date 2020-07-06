import axios from "axios";

const MARVEL_BASE_URL = "http://gateway.marvel.com/v1/public";
const MARVEL_PUBLIC_KEY = "a5de01d258e63fb728a0977b5d6bfc8c";

const axiosConfiguratedInstance = () => {
  const axiosInstance = axios.create({
    baseURL: MARVEL_BASE_URL,
  });
  axiosInstance.interceptors.request.use((config) => {
    const configWithApiKey = {
      ...config,
      params: {
        ...config.params,
        apikey: MARVEL_PUBLIC_KEY,
      },
    };

    return configWithApiKey;
  });
  return axiosInstance;
};

export default axiosConfiguratedInstance();
