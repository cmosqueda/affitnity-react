// import { title } from "process";
import Welcome from "./Welcome";
import PersonalDetails from "./PersonalDetails";
import BodyAttributes from "./BodyAttributes";
import FitnessGoals from "./FitnessGoals";
import FitnessFocus from "./FitnessFocus";
import PreferredDiet from "./PreferredDiet";
import DietRestrictions from "./DietRestrictions";

export const pages = [
  { title: "Welcome", content: <Welcome></Welcome> },
  { title: "Personal details", content: <PersonalDetails></PersonalDetails> },
  { title: "Your body attributes", content: <BodyAttributes></BodyAttributes> },
  { title: "What is your target fitness?", content: <FitnessGoals></FitnessGoals> },
  { title: "What is your fitness focus?", content: <FitnessFocus></FitnessFocus> },
  { title: "What is your preferred diet?", content: <PreferredDiet></PreferredDiet> },
  { title: "Do you have allergies or dietary restrictions?", content: <DietRestrictions></DietRestrictions> },
];
