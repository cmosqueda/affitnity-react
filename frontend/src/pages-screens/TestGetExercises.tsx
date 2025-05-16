import React, { useEffect, useState } from "react";

// import nav bar
import Nav from "./components/Nav";

// function
import { getAllExercises } from "@/api/exerciseLocal";
import { Exercise } from "@/api/exerciseLocal";

// import asset
import RopeExercise from "../assets/image/rope_exercise.jpg";

const ExerciseList: React.FC = () => {
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [page, setPage] = useState<number>(1);
  const [totalCount, setTotalCount] = useState<number>(0);
  const [selectedExercise, setSelectedExercise] = useState<Exercise | null>(null);

  const limit = 9;
  const isLastPage = page * limit >= totalCount;

  const fetchExercises = async (pageNum: number) => {
    setLoading(true);
    try {
      const offset = (pageNum - 1) * limit;
      const response = await getAllExercises(offset, limit);
      setExercises(response.data.exercises);
      setTotalCount(response.count);
    } catch (error) {
      console.error("Error fetching exercises:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchExercises(page);
  }, [page]);

  return (
    <div className="p-10 font-dmsans">
      <div className="space-y-5 text-center flex flex-col justify-between items-center mb-4">
        <h2 className="text-3xl md:text-5xl font-bold">Workout Gallery</h2>
        <p>Browse over 1000+ exercises here and kickstart your fitness journey!</p>

        {/* SEARCH BAR HERE */}

        <div className="text-sm flex justify-center items-center gap-4">
          <button
            onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
            disabled={page === 1}
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 disabled:opacity-50"
          >
            ⬅ Previous
          </button>
          <span className=" font-medium">Page {page}</span>
          <button
            onClick={() => setPage((prev) => prev + 1)}
            disabled={isLastPage}
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 disabled:opacity-50"
          >
            Next ➡
          </button>
        </div>
      </div>

      {loading ? (
        <div className="text-center mt-10 text-4xl ">Loading...</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {exercises.map((exercise) => (
            <div
              key={exercise.exerciseId}
              onClick={() => setSelectedExercise(exercise)}
              className="cursor-pointer bg-white shadow-md rounded-xl p-4 hover:shadow-xl transition"
            >
              <img src={RopeExercise} alt={"dummy"} />
              <h2 className="text-xl font-semibold mt-2 capitalize">{exercise.name}</h2>
              <p className="text-sm text-gray-600 mt-1">
                <strong>Target:</strong> {(exercise.target_muscles ?? []).join(", ")}
              </p>
              <p className="text-sm text-gray-600">
                <strong>Body Parts:</strong> {(exercise.body_parts ?? []).join(", ")}
              </p>
              <p className="text-sm text-gray-600">
                <strong>Equipment:</strong> {(exercise.equipments ?? []).join(", ")}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* 🔍 Modal Overlay */}
      {selectedExercise && (
        <div className="fixed inset-0 z-50 backdrop-blur-sm bg-white/30 flex justify-center items-center">
          <div className="bg-white/80 max-w-4xl w-full mx-4 rounded-lg p-8 relative shadow-xl overflow-auto max-h-[90vh] border border-gray-200 backdrop-blur-md">
            <button
              onClick={() => setSelectedExercise(null)}
              className="absolute top-4 right-4 text-gray-600 hover:text-red-500 text-2xl"
            >
              ✕
            </button>
            <h2 className="text-3xl font-bold mb-4 capitalize">{selectedExercise.name}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                {/* {selectedExercise.gifUrl && <img src={RopeExercise} alt={"dummy"} className="rounded-lg w-full" />} */}
                <img src={RopeExercise} alt={"dummy"} className="rounded-lg w-full" />
              </div>
              <div className="space-y-2">
                <p>
                  <strong className="text-gray-700">Target Muscles:</strong>{" "}
                  {(selectedExercise.target_muscles ?? []).join(", ")}
                </p>
                <p>
                  <strong className="text-gray-700">Body Parts:</strong>{" "}
                  {(selectedExercise.body_parts ?? []).join(", ")}
                </p>
                <p>
                  <strong className="text-gray-700">Equipments:</strong>{" "}
                  {(selectedExercise.equipments ?? []).join(", ")}
                </p>
                {/* <p>
            <strong className="text-gray-700">Difficulty:</strong>{" "}
            {selectedExercise.difficulty ?? "N/A"}
          </p>
          <p>
            <strong className="text-gray-700">Instructions:</strong>{" "}
            {selectedExercise.instructions ?? "No instructions provided."}
          </p> */}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default function TestGetExercises() {
  return (
    <>
      <Nav></Nav>
      <div className="min-h-screen min-w-screen">
        <ExerciseList />
      </div>
    </>
  );
}
