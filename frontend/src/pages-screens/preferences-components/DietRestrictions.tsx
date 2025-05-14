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

const initialOptions = ["Peanuts", "Tree nuts", "Crustacean shellfish", "Fish", "Eggs", "Wheat", "Soybeans", "Milk"];

export default function DietRestrictions() {
  const [options, setOptions] = useState(initialOptions);
  const [customInput, setCustomInput] = useState("");

  // Zustand global state
  const dietRestrictions = useUserPreferenceFormStore((state) => state.diet_restrictions);
  const setDietRestrictions = useUserPreferenceFormStore((state) => state.setDietRestrictions);

  // Local state for selected options
  const [selected, setSelected] = useState<string[]>([]);

  // Sync Zustand state with local component state on mount
  useEffect(() => {
    if (dietRestrictions.length > 0) {
      setSelected(dietRestrictions);
      setOptions((prev) => {
        const all = [...new Set([...prev, ...dietRestrictions])];
        return all;
      });
    }
  }, [dietRestrictions]);

  // Update Zustand state when local `selected` state changes
  useEffect(() => {
    setDietRestrictions(selected);
  }, [selected, setDietRestrictions]);

  const toggleOption = (value: string) => {
    setSelected((prev) => (prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]));
  };

  const handleAddCustom = () => {
    const trimmed = customInput.trim();
    if (trimmed && !options.includes(trimmed)) {
      setOptions((prev) => [...prev, trimmed]);
      setSelected((prev) => [...prev, trimmed]);
    }
    setCustomInput("");
  };

  return (
    <div className="max-w-md mx-auto p-4 space-y-4">
      <Label>Please select any allergy or restrictions that apply to you, or skip if none.</Label>

      <div className="flex flex-wrap gap-2">
        {options.map((option) => (
          <Button
            key={option}
            variant={selected.includes(option) ? "destructive" : "outline"}
            onClick={() => toggleOption(option)}
            className="whitespace-nowrap"
          >
            {option}
          </Button>
        ))}

        {/* Custom "Others" Drawer */}
        <Drawer>
          <DrawerTrigger asChild>
            <Button variant="outline" onClick={(e) => e.currentTarget.blur()}>
              + Others
            </Button>
          </DrawerTrigger>
          <DrawerContent>
            <div className="mx-auto w-full max-w-sm">
              <DrawerHeader>
                <DrawerTitle>Specify Allergy or Restriction</DrawerTitle>
                <DrawerDescription>Enter a specific allergy or restriction not listed above.</DrawerDescription>
              </DrawerHeader>

              <div className="p-4">
                <Input placeholder="e.g. Gluten" value={customInput} onChange={(e) => setCustomInput(e.target.value)} />
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
