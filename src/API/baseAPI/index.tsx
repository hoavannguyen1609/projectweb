import axios from "axios";

export const baseURL: string = "http://127.0.0.1:8000";

let API: any;

const token: string | null = localStorage.getItem("access_token");

if (token) {
  API = axios.create({
    baseURL: `${baseURL}/api/`,
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    withCredentials: true,
  });
} else {
  API = axios.create({
    baseURL: `${baseURL}/api/`,
    headers: {
      Accept: "application/json",
    },
    withCredentials: true,
  });
}

export default API;
