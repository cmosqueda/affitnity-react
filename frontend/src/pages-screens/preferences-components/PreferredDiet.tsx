"use client";

import { useState } from "react";
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
  const [selected, setSelected] = useState<string[]>([]);
  const [options, setOptions] = useState(initialOptions);
  const [customInput, setCustomInput] = useState("");

  const toggleOption = (value: string) => {
    setSelected((prev) => (prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]));
  };

  const handleAddCustom = () => {
    const trimmed = customInput.trim();
    if (trimmed && !options.includes(trimmed)) {
      setOptions([...options, trimmed]);
      setSelected([...selected, trimmed]);
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
            <Button
              variant="outline"
              onClick={(e) => {
                // Remove focus to prevent accessibility warning
                e.currentTarget.blur();
              }}
            >
              + Others
            </Button>
          </DrawerTrigger>
          <DrawerContent>
            <div className="mx-auto w-full max-w-sm">
              <DrawerHeader>
                <DrawerTitle>Add a Custom Goal</DrawerTitle>
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
