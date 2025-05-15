"use client";

// useUserPreferenceFormStore
import { useUserPreferenceFormStore } from "@/stores/useUserPreferenceFormStore";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectContent, SelectValue, SelectItem } from "@/components/ui/select";

export default function BodyAttributes() {
  // Zustand state
  const height = useUserPreferenceFormStore((state) => state.height);
  const weight = useUserPreferenceFormStore((state) => state.weight);
  const bodyType = useUserPreferenceFormStore((state) => state.body_type);

  // Zustand setters
  const setHeight = useUserPreferenceFormStore((state) => state.setHeight);
  const setWeight = useUserPreferenceFormStore((state) => state.setWeight);
  const setBodyType = useUserPreferenceFormStore((state) => state.setBodyType);

  return (
    <>
      <div className="space-y-4">
        <Label>Enter your height, weight, and body type.</Label>
        <div className="flex flex-col">
          {/* height */}
          <div>
            <Label className="text-gray-500 my-3">Height - in centimeter</Label>
            <Input
              type="number"
              placeholder="Enter height"
              value={height !== undefined ? height.toString() : ""}
              onChange={(e) => {
                const value = e.target.value;
                setHeight(value === "" ? undefined : Number(value));
              }}
            />
          </div>

          {/* weight */}
          <div>
            <Label className="text-gray-500 my-3">Weight - in kilograms</Label>
            <Input
              type="number"
              placeholder="Enter weight"
              value={weight !== undefined ? weight.toString() : ""}
              onChange={(e) => {
                const value = e.target.value;
                setWeight(value === "" ? undefined : Number(value));
              }}
            />
          </div>

          {/* body type */}
          <Label className="text-gray-500 my-3">Body Type</Label>
          <Select onValueChange={setBodyType} defaultValue={bodyType}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select an option." />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="ectomorph">Ectomorph</SelectItem>
              <SelectItem value="mesomorph">Mesomorph</SelectItem>
              <SelectItem value="endomorph">Endomorph</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </>
  );
}
