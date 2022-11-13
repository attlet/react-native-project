import axios from "axios";

const baseURL = __DEV__
    ? 'http://localhost:8000'
    : 'http://3.39.96.37'

// const baseURL = "http://3.39.96.37";

const api_axios = axios.create({
  baseURL: baseURL,
});

export default api_axios;
