"use client";

import { useState } from "react";

// import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectContent, SelectValue, SelectItem } from "@/components/ui/select";

export default function BodyAttributes() {
  const [bodyType, setBodyType] = useState<string | undefined>();

  return (
    <>
      <div className="space-y-4">
        <Label>Enter your height, weight, and body type.</Label>
        <div className="flex flex-col">
          {/* height */}
          <div>
            <Label className="text-gray-500 my-3">Height - in centimeter</Label>
            <Input type="number" placeholder="Weight"></Input>
          </div>

          {/* weight */}
          <div>
            <Label className="text-gray-500 my-3">Weight - in kilograms</Label>
            <Input type="number" placeholder="Height"></Input>
          </div>

          {/* body type */}
          <Label className="text-gray-500 my-3">Body Type</Label>
          <Select onValueChange={setBodyType} defaultValue={bodyType}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select an option."></SelectValue>
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="Ectomorph">Ectomorph</SelectItem>
              <SelectItem value="Mesomorph">Mesomorph</SelectItem>
              <SelectItem value="Endomorph">Endomorph</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </>
  );
}
// dari
