import { queryClient } from "AppRoutes";
import axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios";

export const API_URL = process.env?.REACT_APP_API_BASE_URL;

const api: AxiosInstance = axios.create({
  baseURL: API_URL,
});

export function authHeader(): object {
  const authToken = localStorage.getItem("token");

  if (authToken) {
    return { headers: { Authorization: `Bearer ` + authToken }, withCredentials: true };
  } else return {};
}

function refresh() {
  return new Promise((resolve, reject) => {
    api
      .get("/auth/refresh", authHeader())
      .then((res: AxiosResponse) => {
        localStorage.setItem("token", res.data.result.accessToken);
        return resolve(res.data.result.accessToken);
      })
      .catch(async (error: AxiosError) => {
        localStorage.removeItem("token");
        window.location.replace("/");
        queryClient.clear();
        return reject(error.response?.data?.message);
        // try {
        //   return await api.get("/auth/logout", authHeader());
        // } catch (err) {
        //   return reject(error);
        // }
      });
  });
}

api.interceptors.response.use(
  (res: AxiosResponse) => {
    return res;
  },
  (err: AxiosError) => {
    if (err.response?.status === 500 && err.response.data.message === "jwt expired") {
      refresh().then((token) => {
        err.config.headers.Authorization = "Bearer " + token;
        return api.request(err.config);
      });
    } else if (err.response?.status === 401 && err.response.data.message === "Authentication Header Not Found") {
      window.location.replace("/");
    }
    return Promise.reject(err);
  }
);

export default api;
