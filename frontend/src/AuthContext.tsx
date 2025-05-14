import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { authApi, AuthResponse, validateToken } from "./api/auth";
// import axios from "axios";

type User = {
  id: number;
  username: string;
  email?: string;
  first_name?: string;
  last_name?: string;
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
  register: (details: {
    first_name: string;
    last_name: string;
    username: string;
    email?: string;
    password: string;
  }) => Promise<void>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [accessToken, setAccessToken] = useState<string | null>(null);

  // debug authprovider mounted
  useEffect(() => {
    console.log("%c[AuthProvider] Mounted", "color: green");
    const storedToken = localStorage.getItem("accessToken");

    if (storedToken) {
      console.log("[AuthProvider] Found stored token, validating...");
      validateToken()
        .then((data) => {
          console.log("[AuthProvider] Token valid. User authenticated:", data.user);
          setUser(data.user);
          setAccessToken(storedToken);
          localStorage.setItem("user", JSON.stringify(data.user));
        })
        .catch(() => {
          console.warn("[AuthProvider] Token invalid or expired. Logging out...");
          logout(); // Token invalid or expired
        });
    } else {
      console.log("[AuthProvider] No stored token found.");
    }
  }, []);

  const login = async (credentials: { username: string; password: string }) => {
    try {
      console.log("[AuthProvider] Attempting login with credentials:", credentials.username);
      const data: AuthResponse = await authApi("/users/login/", credentials);

      setUser(data.user);
      setAccessToken(data.access);

      localStorage.setItem("user", JSON.stringify(data.user));
      localStorage.setItem("accessToken", data.access);
      localStorage.setItem("refreshToken", data.refresh);

      console.log("[AuthProvider] Login successful:", data.user);
    } catch (err) {
      console.error("[AuthProvider] Login failed:", err);
      throw err;
    }
  };

  const register = async (details: {
    first_name: string;
    last_name: string;
    username: string;
    email?: string;
    password: string;
  }) => {
    try {
      console.log("[AuthProvider] Attempting registration for:", details.username);
      const data: AuthResponse = await authApi("/users/register/", details);

      setUser(data.user);
      setAccessToken(data.access);

      localStorage.setItem("user", JSON.stringify(data.user));
      localStorage.setItem("accessToken", data.access);
      localStorage.setItem("refreshToken", data.refresh);

      console.log("[AuthProvider] Registration successful:", data.user);
    } catch (err) {
      console.error("[AuthProvider] Registration failed:", err);
      throw err;
    }
  };

  const logout = () => {
    console.log("[AuthProvider] Logging out...");
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
