// import exercise and diet plans
import ExercisePlan from "./ExercisePlan";
import DietPlan from "./DietPlan";

export default function MyPlan() {
  return (
    <>
      <div className="flex flex-col">
        <ExercisePlan></ExercisePlan>
        <DietPlan></DietPlan>
      </div>
    </>
  );
}
