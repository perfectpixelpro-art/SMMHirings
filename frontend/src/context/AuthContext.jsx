import { createContext, useContext, useState, useEffect, useCallback } from "react";
import { api, setAccessToken } from "../api/axios";

const AuthContext = createContext(null);
export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }) {
  const [accessToken, setToken] = useState(null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // true while we attempt silent login

  // Keep the in-memory token (used by axios) and React state in sync.
  const applyToken = useCallback((t) => {
    setToken(t);
    setAccessToken(t);
  }, []);

  const login = useCallback(
    async (email, password, role) => {
      const { data } = await api.post("/api/auth/login", { email, password, role });
      applyToken(data.accessToken);
      setUser(data.user);
      return data.user;
    },
    [applyToken]
  );

  const logout = useCallback(async () => {
    try {
      await api.post("/api/auth/logout");
    } catch {
      /* ignore network errors on logout */
    }
    applyToken(null);
    setUser(null);
  }, [applyToken]);

  // Re-fetch the current user (e.g. to pick up an admin approval) without
  // rotating the refresh token.
  const reloadUser = useCallback(async () => {
    try {
      const me = await api.get("/api/auth/me");
      setUser(me.data.user);
      return me.data.user;
    } catch {
      return null;
    }
  }, []);

  const refreshToken = useCallback(async () => {
    try {
      const { data } = await api.post("/api/auth/refresh");
      applyToken(data.accessToken);
      // Pull the full user with the fresh access token.
      const me = await api.get("/api/auth/me");
      setUser(me.data.user);
      return true;
    } catch {
      applyToken(null);
      setUser(null);
      return false;
    }
  }, [applyToken]);

  // On first load, try to restore the session from the refresh cookie.
  useEffect(() => {
    (async () => {
      await refreshToken();
      setLoading(false);
    })();
  }, [refreshToken]);

  const value = { accessToken, user, loading, login, logout, refreshToken, reloadUser };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
