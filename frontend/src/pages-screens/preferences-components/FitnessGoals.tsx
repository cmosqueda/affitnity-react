"use client";

import { useUserPreferenceFormStore } from "@/stores/useUserPreferenceFormStore";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
  DrawerClose,
} from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";

const initialOptions = [
  "Improve Cardiovascular Health",
  "Improve Overall Fitness and Wellness",
  "Weight Loss",
  "Gain Stamina",
  "Build Muscle",
  "Maintain Weight",
  "Toning and Sculpting",
];

export default function FitnessGoals() {
  // Global state
  const fitnessGoals = useUserPreferenceFormStore((state) => state.fitness_goals);
  const setFitnessGoals = useUserPreferenceFormStore((state) => state.setFitnessGoals);

  // Local state
  const [selected, setSelected] = useState<string[]>([]);
  const [options, setOptions] = useState(initialOptions);
  const [customInput, setCustomInput] = useState("");

  // Sync local state on mount
  useEffect(() => {
    const customGoals = fitnessGoals.filter((goal) => !initialOptions.includes(goal));
    if (customGoals.length > 0) {
      setOptions((prev) => [...new Set([...prev, ...customGoals])]);
    }
    setSelected(fitnessGoals);
  }, [fitnessGoals]);

  const toggleOption = (value: string) => {
    const updatedSelected = selected.includes(value) ? selected.filter((v) => v !== value) : [...selected, value];

    setSelected(updatedSelected);
    setFitnessGoals(updatedSelected);
  };

  const handleAddCustom = () => {
    const trimmed = customInput.trim();
    if (trimmed && !options.includes(trimmed)) {
      setOptions([...options, trimmed]);
    }
    if (trimmed && !selected.includes(trimmed)) {
      const updated = [...selected, trimmed];
      setSelected(updated);
      setFitnessGoals(updated);
    }
    setCustomInput("");
  };

  return (
    <div className="max-w-md mx-auto p-4 space-y-4">
      <Label>Please select any that apply to you, or skip if none.</Label>

      <div className="flex flex-wrap gap-2">
        {options.map((option) => (
          <Button
            key={option}
            variant={selected.includes(option) ? "customBrand" : "outline"}
            onClick={() => toggleOption(option)}
            className="whitespace-nowrap"
          >
            {option}
          </Button>
        ))}

        {/* "Others" button with drawer */}
        <Drawer>
          <DrawerTrigger asChild>
            <Button variant="outline" onClick={(e) => e.currentTarget.blur()}>
              + Others
            </Button>
          </DrawerTrigger>
          <DrawerContent>
            <div className="mx-auto w-full max-w-sm">
              <DrawerHeader>
                <DrawerTitle>Specify Your Fitness Goal</DrawerTitle>
                <DrawerDescription>Enter a specific goal not listed above.</DrawerDescription>
              </DrawerHeader>

              <div className="p-4">
                <Input
                  placeholder="e.g. Improve balance"
                  value={customInput}
                  onChange={(e) => setCustomInput(e.target.value)}
                />
              </div>

              <DrawerFooter>
                <DrawerClose asChild>
                  <Button onClick={handleAddCustom}>Save</Button>
                </DrawerClose>
                <DrawerClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DrawerClose>
              </DrawerFooter>
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </div>
  );
}
