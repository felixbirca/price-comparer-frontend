import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import Router from "next/r"
export default function useAxios() {
  const { getAccessTokenSilently } = useAuth0();
  axios.defaults.baseURL = "https://localhost:7263/api/";

  axios.interceptors.request.use(
    async (config) => {
      const token = await getAccessTokenSilently();
      if (token && config && config.headers) config.headers.Authorization = `Bearer ${token}`
      return config;
    },
    (err) => Promise.reject(err)
  );

  return axios;
}