import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { authApi, AuthResponse, validateToken } from "./api/auth";
// import axios from "axios";

type User = {
  id: number;
  username: string;
  email?: string;
};

// type ValidateTokenResponse = {
//   user: {
//     id: number;
//     username: string;
//     email?: string;
//   };
// };

type AuthContextType = {
  user: User | null;
  accessToken: string | null;
  login: (credentials: { username: string; password: string }) => Promise<void>;
  register: (details: { username: string; password: string; email?: string }) => Promise<void>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [accessToken, setAccessToken] = useState<string | null>(null);

  useEffect(() => {
    const storedToken = localStorage.getItem("accessToken");

    if (storedToken) {
      validateToken()
        .then((data) => {
          setUser(data.user);
          setAccessToken(storedToken);
          localStorage.setItem("user", JSON.stringify(data.user));
        })
        .catch(() => {
          logout(); // Token invalid or expired
        });
    }
  }, []);

  const login = async (credentials: { username: string; password: string }) => {
    try {
      const data: AuthResponse = await authApi("/users/login/", credentials);

      setUser(data.user);
      setAccessToken(data.access);

      localStorage.setItem("user", JSON.stringify(data.user));
      localStorage.setItem("accessToken", data.access);
      localStorage.setItem("refreshToken", data.refresh);
    } catch (err) {
      console.error("Login failed:", err);
      throw err;
    }
  };

  const register = async (details: { username: string; password: string; email?: string }) => {
    try {
      const data: AuthResponse = await authApi("/users/register/", details);

      setUser(data.user);
      setAccessToken(data.access);

      localStorage.setItem("user", JSON.stringify(data.user));
      localStorage.setItem("accessToken", data.access);
      localStorage.setItem("refreshToken", data.refresh);
    } catch (err) {
      console.error("Registration failed:", err);
      throw err;
    }
  };

  const logout = () => {
    setUser(null);
    setAccessToken(null);
    localStorage.removeItem("user");
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
  };

  return <AuthContext.Provider value={{ user, accessToken, login, register, logout }}>{children}</AuthContext.Provider>;
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
