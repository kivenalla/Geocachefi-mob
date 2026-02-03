import axios, { InternalAxiosRequestConfig } from "axios";
import { apiBaseUrl } from "@/old/utils/env";

const axiosAuth = axios.create({
    baseURL: apiBaseUrl,
    headers: {
        "Content-Type": "application/json",
    },
    withCredentials: true
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