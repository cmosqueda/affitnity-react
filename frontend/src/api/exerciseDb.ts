// API for Exercise DB by @cyberboyanmol on github
// link -> https://github.com/cyberboyanmol/exercisedb-api

import axios from "axios";

// export interface, use it in frontend
export interface Exercise {
  exerciseId: string;
  name: string;
  gifUrl: string;
  targetMuscles: string[];
  bodyParts: string[];
  equipments: string[];
}

// gets all exercises from exercise Db
// offset and limit are for pagination purposes
const getAllExercises = async (offset: number, limit: number) => {
  try {
    const response = await axios.get<{ data: { exercises: Exercise[] } }>(
      `https://exercisedb-api.vercel.app/api/v1/exercises?limit=${limit}&offset=${offset}`
    );
    console.log(response.data);
    return response;
  } catch (error: any) {
    console.error(error.message);
    throw error;
  }
};

export { getAllExercises };
