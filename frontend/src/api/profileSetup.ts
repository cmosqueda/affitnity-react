// lib/api/preferences.ts
import axios from "axios";

const API_BASE_URL = "http://localhost:8000"; // Set this in your .env

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Attach token if you’re using authentication
axiosInstance.interceptors.request.use((config: any) => {
  const token = localStorage.getItem("accessToken");
  console.log("Interceptor token:", token);
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  } else {
    console.warn("No token found in localStorage");
  }
  return config;
});

// Create or update Profile
export const saveProfile = async (profileData: {
  birth_date: Date;
  gender: string;
  weight: number;
  height: number;
  body_type: string;
}) => {
  try {
    const payload = {
      ...profileData,
      birth_date: profileData.birth_date.toISOString().split("T")[0],
    };

    const response = await axiosInstance.post("/users/update-profile/", payload);
    return response.data;
  } catch (error: any) {
    console.error("Save profile error:", error.response?.data || error.message);
    throw error;
  }
};

//  Create Target (after profile)
export const saveTarget = async (targetData: {
  //   profile_id: number;
  experience_level: string;
  fitness_goals: string[];
  fitness_focus: string[];
  preferred_diet: string[];
  diet_restrictions: string[];
}) => {
  const response = await axiosInstance.post("/targets/target/", targetData);
  return response.data;
};
