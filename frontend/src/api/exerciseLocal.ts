import axios from "axios";

const API_BASE_URL = "http://localhost:8000";

export interface Exercise {
  exerciseId: string;
  name: string;
  gifUrl: string;
  target_muscles: string[];
  body_parts: string[];
  equipments: string[];
}

interface GetExercisesResponse {
  count: number;
  offset: number;
  limit: number;
  data: {
    exercises: Exercise[];
  };
}

// Fetch exercises with pagination
export const getAllExercises = async (offset: number = 0, limit: number = 10): Promise<GetExercisesResponse> => {
  try {
    const response = await axios.get<GetExercisesResponse>(`${API_BASE_URL}/exercises/exercises/`, {
      params: {
        offset,
        limit,
      },
    });
    return response.data; // Return the data object as is
  } catch (error) {
    console.error("[getAllExercises] Error fetching exercises with pagination:", error);
    throw error;
  }
};

// Search exercises by query - returns a plain array of exercises
export const searchExercises = async (query: string): Promise<Exercise[]> => {
  try {
    const response = await axios.get<Exercise[]>(`${API_BASE_URL}/exercises/exercises/search/`, {
      params: { q: query },
    });
    return response.data; // response.data is a plain Exercise[] array
  } catch (error) {
    console.error("[searchExercises] Error searching exercises:", error);
    throw error;
  }
};
// export const searchExercises = async (query: string): Promise<Exercise[]> => {
//   const response = await axios.get<Exercise[]>(`${API_BASE_URL}/exercises/exercises/search/`, {
//     params: { q: query },
//   });
//   return response.data; // array of Exercise
// };
