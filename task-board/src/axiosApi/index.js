import axios from "axios";
import { config } from "../config/env.config.jsx";

const api = axios.create({
  baseURL: config.API_URL,
});

api.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export { api };
