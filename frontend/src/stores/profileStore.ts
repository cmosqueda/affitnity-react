// stores/profileStore.ts
import { create } from "zustand";

type ProfileState = {
  isProfileComplete: boolean;
  missingFields: string[];
  checkStatus: () => Promise<void>;
};

import { checkProfileAndTargetCompletion } from "@/api/profileSetup";

export const useProfileStore = create<ProfileState>((set) => ({
  isProfileComplete: false,
  missingFields: [],
  checkStatus: async () => {
    try {
      const data = await checkProfileAndTargetCompletion();
      set({ isProfileComplete: data.is_complete, missingFields: data.missing_fields });
    } catch (error) {
      console.error("Error checking profile/target:", error);
    }
  },
}));
