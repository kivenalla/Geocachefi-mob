import { Injectable } from '@nestjs/common';
import axios, { InternalAxiosRequestConfig } from "axios";
import { UsersService } from "@app/users";

@Injectable()
export class GeocachingAxiosInterceptor {
  private readonly geocachingAxios = axios.create();
  constructor(private readonly usersService: UsersService) {
    this.setupInterceptor();
  }

  private setupInterceptor() {
    this.geocachingAxios.interceptors.response.use(
      res => res,
      async (error) => {
        console.log("Interceptor triggered:", error.response?.status);
        const originalRequest = error.config;

        if (error.response?.status === 401 && !originalRequest._retry) {
          console.log("Attempting token refresh...")
          originalRequest._retry = true;

          const userId = originalRequest?.userId ?? false;
          if (!userId) {
            throw new Error("Cannot refresh token: userId is missing");
          }
          const newToken = await this.usersService.refreshUserAccessToken(userId);
          originalRequest.headers["Authorization"] = `Bearer ${newToken}`;
          return this.geocachingAxios(originalRequest);
        }
        return Promise.reject(error);
      }
    );
  }

  getAxiosInstance() {
    return this.geocachingAxios;
  }
}

/*
geocachingAxios.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);
*/
