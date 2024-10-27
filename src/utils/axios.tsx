import axios, { AxiosRequestConfig, AxiosRequestHeaders } from "axios";
import { deleteCookie } from "cookies-next";

interface AdaptAxiosRequestConfig extends AxiosRequestConfig {
  headers: AxiosRequestHeaders;
}

export const axiosInstance = axios.create({
  baseURL:
    "http://admin-panel-env.eba-wrphxypt.ap-south-1.elasticbeanstalk.com",
});

// Interceptors
axiosInstance.interceptors.request.use(
  (config): AdaptAxiosRequestConfig => {
    return config;
  },
  (error): any => {
    return Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use(
  async (response): Promise<any> => {
    //  response.data?.msg == "unauthorized"
    if (response.data.status == "405") {
      deleteCookie("token");
      deleteCookie("UserId");
      window.location.href = "/";
    }
    return response;
  },
  async (error): Promise<any> => {
    return Promise.reject(error);
  },
);
