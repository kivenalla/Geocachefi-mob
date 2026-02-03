import axios, { InternalAxiosRequestConfig } from "axios";
import { mockApiUrl } from "@/old/utils/env";

const axiosPublic = axios.create({
    baseURL: mockApiUrl,
    headers: {
        "Content-Type": "application/json",
    },
});

axiosPublic.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default axiosPublic;