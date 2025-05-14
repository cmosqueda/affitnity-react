import { create } from "zustand";

type UserFormState = {
  gender: string;
  birth_date: Date;

  height: number;
  weight: number;
};
