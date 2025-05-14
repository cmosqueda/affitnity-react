import { create } from "zustand";

// Based on the variables in your targets model
type UserFormState = {
  gender: string;
  birth_date: Date | undefined;
  experience_level: string;
  height: number | undefined;
  weight: number | undefined;
  body_type: string;
  fitness_goals: string[];
  fitness_focus: string[];
  preferred_diet: string[];
  diet_restrictions: string[];
  setGender: (gender: string) => void;
  setBirthDate: (date: Date | undefined) => void;
  setExperienceLevel: (level: string) => void;
  setHeight: (height: number | undefined) => void;
  setWeight: (weight: number | undefined) => void;
  setBodyType: (type: string) => void;
  setFitnessGoals: (goals: string[]) => void;
  setFitnessFocus: (focus: string[]) => void;
  setPreferredDiet: (diet: string[]) => void;
  setDietRestrictions: (restrictions: string[]) => void;
};

export const useUserPreferenceFormStore = create<UserFormState>((set) => ({
  gender: "",
  birth_date: undefined,
  experience_level: "",
  height: 0,
  weight: 0,
  body_type: "",
  fitness_goals: [],
  fitness_focus: [],
  preferred_diet: [],
  diet_restrictions: [],

  setGender: (gender) => set({ gender }),
  setBirthDate: (date) => set({ birth_date: date }),
  setExperienceLevel: (level) => set({ experience_level: level }),
  setHeight: (height) => set({ height }),
  setWeight: (weight) => set({ weight }),
  setBodyType: (type) => set({ body_type: type }),
  setFitnessGoals: (goals) => set({ fitness_goals: goals }),
  setFitnessFocus: (focus) => set({ fitness_focus: focus }),
  setPreferredDiet: (diet) => set({ preferred_diet: diet }),
  setDietRestrictions: (restrictions) => set({ diet_restrictions: restrictions }),
}));
