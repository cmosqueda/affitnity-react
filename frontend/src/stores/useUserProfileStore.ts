// stores/userStore.ts
import { create } from "zustand";
import axios from "axios";

type Profile = {
  gender: string | null;
  height: number | null;
  weight: number | null;
  birth_date: string | null;
  experience_level: string | null;
  body_type: string | null;
  [key: string]: any;
};

type UserStore = {
  profile: Profile | null;
  token: string | null;
  setToken: (token: string) => void;
  fetchProfile: () => Promise<void>;
  isProfileComplete: () => boolean;
};

export const useUserStore = create<UserStore>((set, get) => ({
  profile: null,
  token: null,

  setToken: (token) => set({ token }),

  fetchProfile: async () => {
    const token = get().token;
    if (!token) return;

    const res = await axios.get<Profile>("http://localhost:8000/users/get-profile/", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    set({ profile: res.data });
  },
  isProfileComplete: () => {
    const profile = get().profile;
    if (!profile) return false;

    return (
      !!profile.gender &&
      !!profile.height &&
      !!profile.weight &&
      !!profile.birth_date &&
      !!profile.experience_level &&
      !!profile.body_type
    );
  },
}));
