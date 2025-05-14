"use client";

import { useUserPreferenceFormStore } from "@/stores/useUserPreferenceFormStore";
import { Label } from "@/components/ui/label";
import { Select, SelectItem, SelectContent, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { CalendarIcon } from "lucide-react";

export default function PersonalDetails() {
  const gender = useUserPreferenceFormStore((state) => state.gender);
  const experienceLevel = useUserPreferenceFormStore((state) => state.experience_level);
  const birthDate = useUserPreferenceFormStore((state) => state.birth_date);

  const setGender = useUserPreferenceFormStore((state) => state.setGender);
  const setExperienceLevel = useUserPreferenceFormStore((state) => state.setExperienceLevel);
  const setBirthDate = useUserPreferenceFormStore((state) => state.setBirthDate);

  return (
    <div className="space-y-6">
      <Label className="block text-lg font-semibold text-gray-700">Enter your personal details.</Label>

      {/* Gender */}
      <div className="space-y-1">
        <Label className="text-gray-500">Gender</Label>
        <Select onValueChange={setGender} defaultValue={gender}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select an option" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Male">Male</SelectItem>
            <SelectItem value="Female">Female</SelectItem>
            <SelectItem value="Other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Birthday */}
      <div className="space-y-1">
        <Label className="text-gray-500">Birthday</Label>
        <div className="relative w-full">
          <CalendarIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
          <input
            type="date"
            value={birthDate ? new Date(birthDate).toISOString().split("T")[0] : ""}
            onChange={(e) => setBirthDate(new Date(e.target.value))}
            className="w-full pl-10 pr-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <Separator />

      {/* Experience Level */}
      <div className="space-y-1">
        <Label className="text-gray-500">Experience</Label>
        <Select onValueChange={setExperienceLevel} defaultValue={experienceLevel}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select an option" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Beginner">Beginner</SelectItem>
            <SelectItem value="Intermediate">Intermediate</SelectItem>
            <SelectItem value="Expert">Expert</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
