import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_REACT_APP_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const AxiosInstanceFiles = axios.create({
  baseURL: process.env.NEXT_PUBLIC_REACT_APP_API_URL,
  headers: {
    "Content-Type": "multipart/form-data",
  },
});
