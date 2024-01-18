import axios from "axios";

const axiosInstance = axios.create({
    baseURL: '',
    headers: {
        'Accept': 'application/json'
    },
    withCredentials: true,
    responseType: 'json'
});

export default axiosInstance;