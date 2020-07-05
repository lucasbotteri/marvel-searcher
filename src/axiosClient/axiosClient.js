import axios from "axios";

const MARVEL_BASE_URL = "http://gateway.marvel.com/v1/";
const AUTH_TOKEN = "secret";

const axiosConfiguratedInstance = () => {
  const axiosInstance = axios.create({
    baseURL: MARVEL_BASE_URL,
  });
  axiosInstance.defaults.headers.common.Authorization = AUTH_TOKEN;
  return axiosInstance;
};

export default axiosConfiguratedInstance();
