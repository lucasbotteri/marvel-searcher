import axios from "axios";

const MARVEL_BASE_URL = process.env.REACT_APP_MARVEL_BASE_URL;
const MARVEL_PUBLIC_KEY = process.env.REACT_APP_MARVEL_PUBLIC_KEY;

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
