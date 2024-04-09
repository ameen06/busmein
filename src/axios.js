import axios from "axios";

// https://busmein.flypomo.com/api/
// http://127.0.0.1:8000/api/

const axiosInstance = axios.create({
    baseURL: 'https://busmein.flypomo.com/api/',
    // baseURL: 'http://127.0.0.1:8000/api/',
    headers: {
        'Accept': 'application/json',
        // "Access-Control-Allow-Origin": "*",
        // 'Access-Control-Allow-Credentials': true
    },
    withCredentials: true,
    responseType: 'json'
});

export default axiosInstance;