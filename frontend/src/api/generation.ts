import axios from "axios";

const API_BASE_URL = "http://localhost:8000";

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Attach token to every request
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("accessToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

/**
 * Generate Exercise Plan via AI
 */
export const generateExercisePlan = async () => {
  try {
    const response = await axiosInstance.get("/plans/exercise/generate/");
    return response.data;
  } catch (error: any) {
    console.error("Error response:", error.response?.data || error.message);
    throw new Error("Failed to generate exercise plan");
  }
};

/**
 * Generate Diet Plan via AI
 */
export const generateDietPlan = async () => {
  try {
    const response = await axiosInstance.get("/plans/diet/generate/");
    return response.data;
  } catch (error: any) {
    console.error("Error response:", error.response?.data || error.message);
    throw new Error("Failed to generate diet plan");
  }
};
