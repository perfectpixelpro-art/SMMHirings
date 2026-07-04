import axios from "axios";

const BASE = import.meta.env.VITE_BACKEND_URL || "http://localhost:5001";

// Admin uses its own token (kept separate from the user access token).
export const adminApi = axios.create({ baseURL: BASE });

adminApi.interceptors.request.use((config) => {
  const t = localStorage.getItem("adminToken");
  if (t) config.headers.Authorization = `Bearer ${t}`;
  return config;
});

export const setAdminToken = (t) =>
  t ? localStorage.setItem("adminToken", t) : localStorage.removeItem("adminToken");
export const getAdminToken = () => localStorage.getItem("adminToken");
