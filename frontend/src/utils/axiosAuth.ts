import axios, { InternalAxiosRequestConfig } from "axios";

const axiosAuth = axios.create({
    baseURL: process.env.REACT_APP_API_URL || "http://localhost:3003",
    headers: {
        "Content-Type": "application/json",
    },
    withCredentials: true,
});

axiosAuth.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        const token = localStorage.getItem("accessToken"); 
        if (token && config.headers) {
            config.headers.Authorization = `Bearer ${token}`; 
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default axiosAuth;