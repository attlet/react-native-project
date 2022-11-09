import axios from 'axios';


// const baseURL = __DEV__
//     ? 'http://localhost:8000'
//     : 'http://3.38.117.74'
const baseURL = 'http://3.38.117.74';

const api_axios = axios.create({
    baseURL: baseURL,
});

export default api_axios;