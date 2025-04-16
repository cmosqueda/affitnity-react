import React, { useEffect, useState } from "react";

// function
import { getAllExercises } from "@/api/exerciseDb";

// interface imported from exerciseDb
import { Exercise } from "@/api/exerciseDb";

// interface Exercise {
//   exerciseId: string;
//   name: string;
//   gifUrl: string;
//   targetMuscles: string[];
//   bodyParts: string[];
//   equipments: string[];
// }

const ExerciseList: React.FC = () => {
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [page, setPage] = useState<number>(1);
  const limit = 9;
  const [lastFetchTime, setLastFetchTime] = useState<number>(0);
  const [rateLimitActive, setRateLimitActive] = useState<boolean>(false);

  const RATE_LIMIT_MS = 5000;

  // updates rate limit status
  const updateRateLimitStatus = () => {
    const now = Date.now();
    setRateLimitActive(now - lastFetchTime < RATE_LIMIT_MS);
  };

  // rate limiting
  useEffect(() => {
    const interval = setInterval(updateRateLimitStatus, 500);
    return () => clearInterval(interval);
  }, [lastFetchTime]);

  // fetch exercises
  const fetchExercises = async (pageNum: number) => {
    // checks if it exceeds rate limit
    const now = Date.now();
    if (now - lastFetchTime < RATE_LIMIT_MS) {
      console.log("Rate limit active. Try again later.");
      return;
    }

    // sets last fetch time
    setLastFetchTime(now);
    setLoading(true);

    //
    try {
      const offset = (pageNum - 1) * limit;
      // used getAllExercises api from exerciseDb.ts api
      const response = await getAllExercises(offset, limit);
      setExercises(response.data.data.exercises);
      console.log("Retrieved Page:", page);
    } catch (error) {
      console.error("Error fetching exercises:", error);
    } finally {
      setLoading(false);
    }
  };

  // fetch exercises takes effect
  useEffect(() => {
    fetchExercises(page);
  }, [page]);

  // handle page refresh
  const handleRefresh = () => {
    if (loading || rateLimitActive) return;
    fetchExercises(page);
  };

  return (
    <div className="p-10 ">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Exercise List</h2>
        <button
          onClick={handleRefresh}
          disabled={loading || rateLimitActive}
          className={`px-4 py-2 rounded-lg transition ${
            loading || rateLimitActive
              ? "bg-gray-400 cursor-not-allowed text-white"
              : "bg-indigo-600 hover:bg-indigo-700 text-white"
          }`}
        >
          {loading ? "Loading..." : rateLimitActive ? "Cooldown" : "Refresh"}
        </button>
      </div>

      {/* displays retrieved exercises. if loading, returns loading, else, returns all blocks containing retrieved data from api */}
      {loading ? (
        // is loading
        <div className="text-center mt-10 text-4xl ">Loading...</div>
      ) : (
        // displays retrieved data
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {exercises.map((exercise) => (
              <div key={exercise.exerciseId} className="bg-white shadow-md rounded-xl p-4 hover:shadow-xl transition">
                {/* <img src={exercise.gifUrl} alt={exercise.name} /> */}
                <h2 className="text-xl font-semibold mt-2 capitalize">{exercise.name}</h2>
                <p className="text-sm text-gray-600 mt-1">
                  <strong>Target:</strong> {exercise.targetMuscles.join(", ")}
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Body Parts:</strong> {exercise.bodyParts.join(", ")}
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Equipment:</strong> {exercise.equipments.join(", ")}
                </p>
              </div>
            ))}
          </div>

          {/* previous and next buttons at the bottom */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
              disabled={page === 1 || rateLimitActive}
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 disabled:opacity-50"
            >
              ⬅ Previous
            </button>
            <span className="text-lg font-medium">Page {page}</span>
            <button
              onClick={() => setPage((prev) => prev + 1)}
              disabled={rateLimitActive}
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 disabled:opacity-50"
            >
              Next ➡
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default function TestGetExercises() {
  return (
    <div className="bg-gray-100 min-h-screen min-w-screen">
      <div className="text-center py-6 bg-indigo-600 text-white text-3xl font-bold ">Exercise DB by cyberboyanmol</div>
      <ExerciseList />
    </div>
  );
}
