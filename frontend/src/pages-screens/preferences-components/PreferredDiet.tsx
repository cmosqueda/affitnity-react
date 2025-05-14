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

const initialOptions = [
  "Weight Loss",
  "Muscle Gain",
  "Maintenance",
  "Improved Health and Wellness",
  "Keto",
  "Vegan/Vegetarian",
  "Kosher",
  "Halal",
];

export default function PreferredDiet() {
  const preferredDiet = useUserPreferenceFormStore((state) => state.preferred_diet);
  const setPreferredDiet = useUserPreferenceFormStore((state) => state.setPreferredDiet);

  const [options, setOptions] = useState(initialOptions);
  const [customInput, setCustomInput] = useState("");
  const [selected, setSelected] = useState<string[]>(preferredDiet);

  // Sync Zustand state with local selected state on load or update
  useEffect(() => {
    setSelected(preferredDiet);
  }, [preferredDiet]);

  const toggleOption = (value: string) => {
    const updated = selected.includes(value) ? selected.filter((v) => v !== value) : [...selected, value];

    setSelected(updated);
    setPreferredDiet(updated); // Sync with Zustand
  };

  const handleAddCustom = () => {
    const trimmed = customInput.trim();
    if (trimmed && !options.includes(trimmed)) {
      const newOptions = [...options, trimmed];
      const newSelected = [...selected, trimmed];

      setOptions(newOptions);
      setSelected(newSelected);
      setPreferredDiet(newSelected); // Sync with Zustand
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
            variant={selected.includes(option) ? "customEmerald" : "outline"}
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
                <DrawerTitle>Add a Custom Diet</DrawerTitle>
                <DrawerDescription>Enter a specific preference not listed above.</DrawerDescription>
              </DrawerHeader>

              <div className="p-4">
                <Input
                  placeholder="e.g. Mediterranean"
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
