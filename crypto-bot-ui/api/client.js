import axios from 'axios';


const baseURL = 'http://localhost:8000';

const api_axios = axios.create({
    baseURL: baseURL,
});

export default api_axios;