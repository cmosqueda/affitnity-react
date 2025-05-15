import axios from "axios";

// Define the expected response shape
export type AuthResponse = {
  // success: boolean;
  access: string;
  refresh: string;
  user: {
    id: number;
    username: string;
    email?: string;
    first_name?: string;
    last_name?: string;
  };
};

export type ValidateTokenResponse = {
  user: {
    id: number;
    username: string;
    email?: string;
    first_name?: string;
    last_name?: string;
  };
};

// Axios instance
const AUTH_AXIOS = axios.create({
  baseURL: "http://localhost:8000",
  headers: {
    "Content-Type": "application/json",
  },
});

// Add access token from localStorage before each request
AUTH_AXIOS.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      config.headers = config.headers ?? {};
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Login or Register API call
const authApi = async (url: string, data: { [key: string]: any }): Promise<AuthResponse> => {
  try {
    const response = await AUTH_AXIOS.post(url, data);
    console.log("Auth success:", response?.data);
    return response.data as AuthResponse;
  } catch (error: any) {
    console.error("Auth failed:", error.response?.data || error.message);
    throw error;
  }
};

// Token validation API call
const validateToken = async (): Promise<ValidateTokenResponse> => {
  try {
    // validate token
    const response = await AUTH_AXIOS.get<ValidateTokenResponse>("/users/validate-token/");
    console.log("Token validation success:", response?.data);
    return response.data;
  } catch (error: any) {
    console.error("Token validation failed:", error.response?.data || error.message);
    throw error;
  }
};

export { AUTH_AXIOS, authApi, validateToken };
