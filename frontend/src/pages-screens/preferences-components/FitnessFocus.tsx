"use client";

import { useEffect, useState } from "react";
import { useUserPreferenceFormStore } from "@/stores/useUserPreferenceFormStore";
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

const initialOptions = ["Cardio", "Flexibility", "HIIT", "Strength", "Yoga", "Aerobics"];

export default function FitnessFocus() {
  const fitnessFocus = useUserPreferenceFormStore((state) => state.fitness_focus);
  const setFitnessFocus = useUserPreferenceFormStore((state) => state.setFitnessFocus);

  const [options, setOptions] = useState(initialOptions);
  const [customInput, setCustomInput] = useState("");
  const [selected, setSelected] = useState<string[]>(fitnessFocus);

  // Sync Zustand state with local selected state
  useEffect(() => {
    setSelected(fitnessFocus);
  }, [fitnessFocus]);

  const toggleOption = (value: string) => {
    const updated = selected.includes(value) ? selected.filter((v) => v !== value) : [...selected, value];

    setSelected(updated);
    setFitnessFocus(updated); // Update Zustand store
  };

  const handleAddCustom = () => {
    const trimmed = customInput.trim();
    if (trimmed && !options.includes(trimmed)) {
      const newOptions = [...options, trimmed];
      const newSelected = [...selected, trimmed];

      setOptions(newOptions);
      setSelected(newSelected);
      setFitnessFocus(newSelected); // Update Zustand store
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

        <Drawer>
          <DrawerTrigger asChild>
            <Button variant="outline" onClick={(e) => e.currentTarget.blur()}>
              + Others
            </Button>
          </DrawerTrigger>
          <DrawerContent>
            <div className="mx-auto w-full max-w-sm">
              <DrawerHeader>
                <DrawerTitle>Add a Custom Focus</DrawerTitle>
                <DrawerDescription>Enter a specific focus not listed above.</DrawerDescription>
              </DrawerHeader>

              <div className="p-4">
                <Input
                  placeholder="e.g. Balance Training"
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
