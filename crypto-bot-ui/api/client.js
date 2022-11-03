import axios from 'axios';


const baseURL = __DEV__
    ? 'http://localhost:8000'
    : 'http://example.com'

const api_axios = axios.create({
    baseURL: baseURL,
});

export default api_axios;