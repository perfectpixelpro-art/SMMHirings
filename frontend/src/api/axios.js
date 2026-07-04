import axios from "axios";

const BASE = import.meta.env.VITE_BACKEND_URL || "http://localhost:5001";

// Access token lives in memory only (module scope) — never localStorage.
let accessToken = null;
export const setAccessToken = (t) => {
  accessToken = t;
};
export const getAccessToken = () => accessToken;

export const api = axios.create({
  baseURL: BASE,
  withCredentials: true, // send/receive the HttpOnly refresh cookie
});

// Attach the access token to every request.
api.interceptors.request.use((config) => {
  if (accessToken) config.headers.Authorization = `Bearer ${accessToken}`;
  return config;
});

// On a 401, try /refresh once, then replay the original request.
let refreshing = null; // de-dupes concurrent refreshes
api.interceptors.response.use(
  (res) => res,
  async (error) => {
    const original = error.config;
    const url = original?.url || "";
    const isAuthFlow =
      url.includes("/api/auth/refresh") ||
      url.includes("/api/auth/login") ||
      url.includes("/api/auth/signup");

    if (error.response?.status === 401 && !original._retry && !isAuthFlow) {
      original._retry = true;
      try {
        refreshing = refreshing || api.post("/api/auth/refresh");
        const { data } = await refreshing;
        refreshing = null;
        setAccessToken(data.accessToken);
        original.headers.Authorization = `Bearer ${data.accessToken}`;
        return api(original);
      } catch (e) {
        refreshing = null;
        setAccessToken(null);
        return Promise.reject(e);
      }
    }
    return Promise.reject(error);
  }
);
