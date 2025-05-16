import RopeExercise from "../assets/image/rope_exercise.jpg";

const exerciseDataString = `
{
  "user_profile": {
    "body_type": "ectomorph",
    "weight_kg": 60,
    "height_cm": 170,
    "bmi": 20.8,
    "experience_level": "beginner",
    "fitness_goals": ["muscle gain", "flexibility"],
    "fitness_focus": ["strength training", "flexibility exercise"]
  },
  "plan_summary": {
    "week_duration": 1,
    "description": "This 7-day exercise plan is tailored for an ectomorph beginner focused on building muscle and improving flexibility. The AI generated a balanced routine combining strength training and light mobility work."
  },
  "daily_plan": [
    {
      "day": "Monday",
      "focus": "Upper Body Strength",
      "exercises": [
        { "name": "Push-ups", "sets": 3, "reps": 10 },
        { "name": "Dumbbell Rows", "sets": 3, "reps": 12 },
        { "name": "Shoulder Taps", "sets": 3, "duration_sec": 30 }
      ]
    },
    {
      "day": "Tuesday",
      "focus": "Lower Body Strength",
      "exercises": [
        { "name": "Bodyweight Squats", "sets": 3, "reps": 15 },
        { "name": "Glute Bridges", "sets": 3, "reps": 12 },
        { "name": "Lunges", "sets": 2, "reps": 10 }
      ]
    },
    {
      "day": "Wednesday",
      "focus": "Flexibility & Recovery",
      "exercises": [
        { "name": "Yoga Flow", "duration_min": 30 },
        { "name": "Hamstring Stretch", "duration_sec": 60 },
        { "name": "Child's Pose", "duration_sec": 45 }
      ]
    },
    {
      "day": "Thursday",
      "focus": "Full Body Strength",
      "exercises": [
        { "name": "Burpees", "sets": 2, "reps": 10 },
        { "name": "Plank", "duration_sec": 30 },
        { "name": "Jumping Jacks", "sets": 3, "reps": 20 }
      ]
    },
    {
      "day": "Friday",
      "focus": "Cardio & Core",
      "exercises": [
        { "name": "Brisk Walk", "duration_min": 20 },
        { "name": "Bicycle Crunches", "sets": 2, "reps": 15 },
        { "name": "Leg Raises", "sets": 2, "reps": 12 }
      ]
    },
    {
      "day": "Saturday",
      "focus": "Mobility & Stretching",
      "exercises": [
        { "name": "Dynamic Stretching", "duration_min": 15 },
        { "name": "Foam Rolling", "duration_min": 10 },
        { "name": "Neck Stretch", "duration_sec": 30 }
      ]
    },
    {
      "day": "Sunday",
      "focus": "Rest",
      "exercises": []
    }
  ],
  "reminders": [
    "Start with a 5-minute warm-up every day.",
    "End each session with light stretching.",
    "Stay hydrated and listen to your body.",
    "Repeat similar intensity next week or regenerate new plan."
  ]
}
`;

type Exercise = {
  name: string;
  sets?: number;
  reps?: number;
  duration_sec?: number;
  duration_min?: number;
};

type ExerciseDayCardProps = {
  day: string;
  focus: string;
  exercises: Exercise[];
};

const ExerciseDayCard = ({ day, focus, exercises }: ExerciseDayCardProps) => (
  <div className=" bg-white shadow rounded-lg p-5  hover:shadow-lg transition-shadow duration-300">
    <h3 className=" text-xl font-semibold text-indigo-700 mb-3">
      {day} - {focus}
    </h3>

    {exercises.length === 0 ? (
      <p className="italic text-gray-500">Rest day</p>
    ) : (
      <>
        {/* <img src={RopeExercise} alt="dummy" className="w-[300px] object-contain" /> */}
        <ul className="list-disc list-inside space-y-2 text-gray-800">
          {exercises.map((ex, idx) => (
            <li key={idx} className="font-medium">
              <span className="text-indigo-600">{ex.name}</span> -{" "}
              {ex.sets && ex.reps
                ? `${ex.sets} sets of ${ex.reps} reps`
                : ex.duration_sec
                ? `${ex.duration_sec} seconds`
                : ex.duration_min
                ? `${ex.duration_min} minutes`
                : ""}
            </li>
          ))}
        </ul>
      </>
    )}
  </div>
);

export default function ExercisePlan() {
  // Replace this with actual fetching/parsing logic from backend/localStorage/etc.
  const exerciseData = JSON.parse(exerciseDataString);

  // Check if there's no data or empty daily plan
  const hasPlan =
    exerciseData &&
    exerciseData.daily_plan &&
    Array.isArray(exerciseData.daily_plan) &&
    exerciseData.daily_plan.length > 0;

  if (!hasPlan) {
    return (
      <div className="max-w-3xl mx-auto p-6 font-sans text-gray-900 text-center">
        <h1 className="text-3xl font-bold mb-4 text-indigo-700">You have no exercise plan yet</h1>
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-6 rounded-lg shadow-md transition duration-300">
          Generate Exercise Plan
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-6 font-sans text-gray-900">
      <h1 className="text-3xl font-bold mb-6 text-center text-indigo-700">
        Exercise Plan - {exerciseData.plan_summary.week_duration} Week Long
      </h1>

      <section className="mb-10 bg-white p-6 rounded-lg shadow">
        <h2 className="text-2xl font-semibold mb-4">User Profile</h2>
        <ul className="list-none list-inside space-y-1 text-gray-800">
          <li>
            <span className="font-medium">Body Type:</span> {exerciseData.user_profile.body_type}
          </li>
          <li>
            <span className="font-medium">Weight:</span> {exerciseData.user_profile.weight_kg} kg
          </li>
          <li>
            <span className="font-medium">Height:</span> {exerciseData.user_profile.height_cm} cm
          </li>
          <li>
            <span className="font-medium">BMI:</span> {exerciseData.user_profile.bmi}
          </li>
          <li>
            <span className="font-medium">Experience Level:</span> {exerciseData.user_profile.experience_level}
          </li>
          <li>
            <span className="font-medium">Fitness Goals:</span> {exerciseData.user_profile.fitness_goals.join(", ")}
          </li>
          <li>
            <span className="font-medium">Fitness Focus:</span> {exerciseData.user_profile.fitness_focus.join(", ")}
          </li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-6">Daily Exercise Plan</h2>
        <div className="flex flex-wrap gap-4 justify-center">
          {exerciseData.daily_plan.map((dayPlan: any) => (
            <ExerciseDayCard key={dayPlan.day} day={dayPlan.day} focus={dayPlan.focus} exercises={dayPlan.exercises} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Reminders</h2>
        <ul className="list-disc list-inside space-y-1 text-gray-800">
          {exerciseData.reminders.map((reminder: string, i: number) => (
            <li key={i}>{reminder}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}
