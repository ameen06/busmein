import axios from "axios";

// https://busmein.flypomo.com/api/
// http://127.0.0.1:8000/api/

const axiosInstance = axios.create({
    baseURL: 'https://busmein.flypomo.com/api/',
    // baseURL: 'http://127.0.0.1:8000/api/',
    headers: {
        'Accept': 'application/json'
    },
    withCredentials: true,
    responseType: 'json'
});

export default axiosInstance;