import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:4000',
    headers: {
        'Token': localStorage.getItem('Token') || "",
        'Content-Type': 'application/json'
    }
});

instance.interceptors.request.use(
    (config) => {

        config.headers['Token'] = localStorage.getItem('token') || "";

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default instance;